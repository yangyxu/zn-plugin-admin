var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'ZNPluginAdminUser'
		};
	},
	getInitialState: function () {
		return {
			status: 1,
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model,
				where: { status: 1 }
			}),
			items: [
				{ title: '用户名', name: 'name', width: 120, filter: { type: 'Input', opts: ['like'] } },
				{ title: '状态', name: 'status', width: 80 },
				{ title: '绑定微信', name: 'zn_plugin_wechat_open_id', width: 100 },
				{ title: '邮箱', name: 'email', width: 180, filter: { type: 'Input', opts: ['like'] } },
				{ title: 'QQ', name: 'qq', width: 120, filter: { type: 'Input', opts: ['like'] } },
				{ title: '微信号', name: 'wechat', width: 120, filter: { type: 'Input', opts: ['like'] } },
				{ title: '手机号', name: 'phone', width: 120, filter: { type: 'Input', opts: ['like'] } },
				{ title: '角色', name: 'role_ids_convert', width: 120 },
				{ title: '代理人', name: 'agents_convert', width: 120 },
				{ title: '地址', name: 'address', width: 200, filter: { type: 'Input', opts: ['like'] } },
				{ title: '说明', name: 'zn_note' }
			],
			formItems: [
				{ title: '头像', name: 'avatar_img', type: 'ImageUploader' },
				{ title: '用户名', name: 'name', type: 'Input', required: true, error: '用户名必填项!' },
				{ title: '状态', name: 'status', type: 'Select', data: [{text: '待激活', value: 0},{text: '正常', value: 1},{text: '已锁定', value: -1}], required: true },
				{ title: '邮箱', name: 'email', type: 'Input' },
				{ title: 'QQ', name: 'qq', type: 'Input' },
				{ title: '微信号', name: 'wechat', type: 'Input' },
				{ title: '手机号', name: 'phone', required: true, type: 'Input' },
				{ title: '部门/角色', type: zn.plugin.admin.RoleSelector, name: 'role_ids' },
				{ title: '地址', name: 'address', type: 'Input' },
				{ title: '说明', name: 'zn_note', type: 'Textarea' }
			],
			toolbarItems: [
				//{ text: '一键重置密码', name: 'resetpassword', icon: 'fa-plus', style: { marginRight: 5 } },
				{ text: '添加', name: 'add', icon: 'fa-plus', style: { marginRight: 5 } },
				{ text: '删除', name: 'remove', status: 'danger', icon: 'fa-remove', style: { marginRight: 5 } }
			]
		}
	},
	__doSuccess: function (){
		this.state.data.refresh();
	},
	__addItem: function (){
		zn.dialog({
			title: '新增用户',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				merge='values'
				exts={{ model: this.props.model }}
				onSubmitSuccess={this.__doSuccess}
				items={this.state.formItems} />
		});
	},
	__updateItem: function (data){
		zn.dialog({
			title: '更新用户信息',
			content: <zn.react.Form
				merge="updates"
				action='/zn.plugin.admin/model/update'
				exts={{ model: this.props.model, where: {id: data.id} }}
				value={zn.store.post('/zn.plugin.admin/model/selectOne', { model: this.props.model, where: {id: data.id} })}
				onSubmitSuccess={this.__doSuccess}
				items={this.state.formItems} />
		});
	},
	__viewWechatUserInfo: function (value){
		zn.dialog({
			title: 'OPENID: ' + value,
			content: <zn.plugin.wechat.UserInfo openid={value} />
		});
	},
	__removeItems: function (){
		var _self = this,
			_values = this.refs.table.getValue();
		if(_values && _values.length){
			zn.confirm('确认删除这' + _values.length + '个用户吗？', '提示', function () {
				zn.http.post('/zn.plugin.admin/model/delete', {
					model: this.props.model,
					where: "id in (" + _values.join(',') + ")"
				}).then(function (){
					zn.toast.success('删除成功');
					_self.state.data.refresh();
				}, function (data){
					zn.toast.error('删除失败: ' + data.result);
				});
			}.bind(this));
		}else {
			zn.toast.warning('请先选择要删除的用户');
		}
	},
	__onToolbarClick: function (item){
		switch (item.name) {
			case 'add':
				this.__addItem();
				break;
			case 'remove':
				this.__removeItems();
				break;
		}
	},
	__onActiveUser: function (data, type, btn){
		zn.modal.close();
		zn.preloader.open({
			title: '请求中...'
		});
		zn.http.post('/zn.plugin.admin/user/active', {
			type: type,
			znid: data.zn_id
		}).then(function (data){
			if(data.status==200){
				zn.notification.success("发送成功");
				if(type=='sms'){
					this.state.data.refresh();
				}
			}else {
				zn.notification.error("激活失败：" + data.result);
			}
			zn.preloader.close();
		}.bind(this), function (){
			zn.notification.error('网络请求失败');
			zn.preloader.close();
		});
	},
	__onActive: function (data){
		zn.dialog({
			title: "激活用户: " + data.name,
			content: <div style={{padding: 20}}>
				<zn.react.Button onClick={(props, btn)=>this.__onActiveUser(data, 'sms', btn)} text="手机短信激活" icon="fa-phone zr-padding-3" tooltip="系统直接以短信方式发送账号密码到手机上" />
				<zn.react.Button onClick={(props, btn)=>this.__onActiveUser(data, 'email', btn)} text="邮箱激活" icon="fa-envelope zr-padding-3" tooltip="系统直接以邮件方式发送激活链接到邮箱中" status="warning" style={{ marginTop: 20 }} />
			</div>
		});
	},
	__onTableColumnRender: function (rowIndex, columnIndex, data, item, value){
		switch (item.name) {
			case 'status':
				switch (value) {
					case 0:
						return <span style={{color: '#1d18184d'}}><i onClick={()=>this.__onActive(data)} data-tooltip="点击激活用户" className="fa fa-eye zr-padding-3" />待激活</span>;
					case 1:
						return <span style={{color: '#008000'}}>正常</span>;
					case -1:
						return <span style={{color: '#d9534f'}}>已锁定</span>;
				}
			case 'name':
				return <div style={{ display: 'flex', alignItems: 'center' }}>
					<i onClick={()=>this.__updateItem(data)} className="fa fa-edit zr-padding-3" />
					{data.avatar_img && <img className="avatar" style={{ width: 16, height: 16, margin: 5, borderRadius: 16 }} src={data.avatar_img} />}
					<a href={'#'+zn.react.session.fixPath('/znpluginadmin.user.infoedit')+'?userId=' + data.id}>{value}</a>
				</div>;
			case 'zn_plugin_wechat_open_id':
				if(value){
					return <a onClick={()=>this.__viewWechatUserInfo(value)} data-tooltip="查看微信信息" style={{color: 'green', fontWeight: 'bold'}}><i className="fa fa-eye zr-padding-3" />已绑定</a>;
				}else {
					return <span>未绑定</span>;
				}
			case 'qq':
				if(value){
					return <img data-tooltip={value} style={{cursor: 'point'}} border="0" alt="点击这里发消息"
								onClick={()=>window.open("http://b.qq.com/webc.htm?new=0&sid=" + value + "&o=www.kylinpop.com&q=7", '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no')}
								src={"http://wpa.qq.com/pa?p=1:"+value+":1"} />
				}
		}
	},
	__onStatusChange: function (value){
		this.setState({ status: value.value });
		this.state.data.extend({ where: { status: value.value } }).refresh();
	},
	render:function(){
		return (
			<zn.react.Page
				title="系统账户管理"
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="status"
					onClick={this.__onStatusChange}
					value={this.state.status}
					data={[
						{ status: 1, text: '正常' },
						{ status: 0, text: '待激活' },
						{ status: -1, text: '锁定' }
					]} />}
				toolbarItems={this.state.toolbarItems}
				onToolbarClick={this.__onToolbarClick}>
				<zn.react.PagerView
					ref="table"
					view="Table"
					enableFilter={true}
					checkbox={50}
					showHeader={true}
					columnRender={this.__onTableColumnRender}
					data={this.state.data}
					items={this.state.items}/>
			</zn.react.Page>
		);
	}
});
