var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			userId: this.props.userId || zn.react.session.json().id,
			toolbarItems: this.props.userId?[]:[{icon:'fa-edit', text: '修改个人信息', onClick: this.__onEdit}],
			info: null,
			formItems: [
				{ title: '头像', name: 'avatar_img', type: 'ImageUploader', action: '/zn.plugin.admin/uploadFiles' },
				{ title: '用户名', name: 'name', type: 'Input', required: true, error: '用户名必填项!' },
				{ title: '密码', name: 'password', type: 'Input', attrs: { type: 'password' }, required: true, error: '密码必填项!' },
				{ title: '邮箱', name: 'email', type: 'Input', required: true, error: '邮箱必填项!' },
				{ title: '手机号', name: 'phone', type: 'Input', required: true, error: '手机号必填项!' },
				{ title: '地址', name: 'address', type: 'Input' },
				{ title: '说明', name: 'zn_note', type: 'Textarea' }
			],
			data: zn.store.post('/zn.plugin.admin/model/select', { model: 'ZNPluginAdminRole', where: { zn_tree_pid: 0 } })
		}
	},
	componentDidMount: function (){
		this.__loadUserInfo();
	},
	__doSuccess: function (){
		this.__loadUserInfo();
	},
	__onEdit: function (data){
		zn.dialog({
			title: '修改个人信息',
			content: <zn.react.Form
						action='/zn.plugin.admin/model/update'
						exts={{ model: 'ZNPluginAdminUser', where: { id: this.state.info.id } }}
						merge="updates"
						value={this.state.info}
						onSubmitSuccess={this.__doSuccess}
						items={this.state.formItems} />
		});
	},
	__loadUserInfo: function (){
		zn.http.post('/zn.plugin.admin/user/findUserById', {
			userId: this.state.userId
		}).then(function (data){
			this.setState({
				info: data.result,
			});
		}.bind(this));
	},
	__onTreeMenuItemCheckboxChange: function (value){
		zn.http.post('/zn.plugin.admin/user/updateUser', {
			data: {
				role_ids: value
			},
			userId: this.state.info.id
		}).then(function (data){
			zn.toast.success('保存成功');
		});
	},
	__itemContentRender: function (props){
		var _icon = '';
		if(props.data.type==1){
			_icon = 'fa-sitemap';
		}
		if(props.data.type==2){
			_icon = 'fa-graduation-cap';
		}

		return <span><i style={{margin:5}} className={'fa ' + _icon} />{props.data.id +'、'+ props.data.zn_title}</span>;
	},
	render:function(){
		if(!this.state.info){
			return <zn.react.DataLoader content="正在加载中..." loader="timer" />;
		}
		return (
			<zn.react.Page title={this.state.info.name} toolbarItems={this.state.toolbarItems} >
				<div className="user-info">
					<div className="info-form user-item">
						<img className="avatar" src={zn.http.fixURL(this.state.info.avatar_img)||'./images/DefaultAvatar.png'} />
						<div className="details">
							<span className="last-logintime">最近一次登录时间：{this.state.info.last_login_time||'还未登陆'}</span>
							<div className="name">{this.state.info.name}</div>
							<div><i className="fa fa-clock-o" />创建时间：{this.state.info.zn_create_time}</div>
							<div><i className="fa fa-envelope" />邮箱：{this.state.info.email}</div>
							<div><i className="fa fa-phone" />手机号：{this.state.info.phone}</div>
							<div>{this.state.info.zn_note}</div>
						</div>
					</div>
					<zn.react.Card title="部门及角色">
						<zn.react.TreeListView
							disabled={true}
							cascade={false}
							enableCheckbox={true}
							onItemCheckboxChange={this.__onTreeMenuItemCheckboxChange}
							value={this.state.info.roleIds}
							itemContentRender={this.__itemContentRender}
							ref="maintreemenu"
							activeAll={true}
							data={this.state.data} />
					</zn.react.Card>
				</div>
			</zn.react.Page>
		);
	}
});
