var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			userId: this.props.userId || Session.json().id,
			toolbarItems: this.props.userId?[]:[{icon:'fa-edit', text: '修改个人信息', onClick: this.__onEdit}],
			info: null,
			formItems: [
				{ title: '头像', name: 'avatarImg', type: 'ImageUploader', action: '/klproject/uploadFiles' },
				{ title: '用户名', name: 'name', type: 'Input', required: true, error: '用户名必填项!' },
				{ title: '密码', name: 'pwd', type: 'Input', attrs: { type: 'password' }, required: true, error: '密码必填项!' },
				{ title: '邮箱', name: 'email', type: 'Input', required: true, error: '邮箱必填项!' },
				{ title: '手机号', name: 'phone', type: 'Input', required: true, error: '手机号必填项!' },
				{ title: '地址', name: 'address', type: 'Input' },
				{ title: '说明', name: 'note', type: 'Textarea' }
			],
			data: Store.post('/znadmin/model/select', { model: 'zn_admin_role', where: { pid: 0 } })
		}
	},
	componentDidMount: function (){
		this.__loadUserInfo();
	},
	__doSuccess: function (){
		Popup.close('dialog');
		Toast.success('修改成功');
		Store.post('/znadmin/user/findUserById', { userId: this.state.userId }).exec().then(function (data){
			this.setState({
				info: data.result,
			});
		}.bind(this));
	},
	__onEdit: function (data){
		Popup.dialog({
			title: '修改个人信息',
			hStyle: { backgroundColor: '#0B72A5' },
			width: 480,
			content: <UI.Form
				method="POST"
				layout="stacked"
				action='/znadmin/model/updateNode'
				exts={{ model: 'zn_admin_user', where: { id: this.state.info.id } }}
				merge="data"
				value={this.state.info}
				style={{ margin: 25 }}
				syncSubmit={false}
				onSubmitSuccess={this.__doSuccess}
				btns={[{text: '修改', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight:0 }},{text:'取消', type:'cancle', status: 'danger', float: 'right'}]}
				items={this.state.formItems} />
		});
	},
	__loadUserInfo: function (){
		Store.post('/znadmin/user/findUserById', { userId: this.state.userId }).exec().then(function (data){
			this.setState({
				info: data.result,
			});
		}.bind(this));
	},
	__onTreeMenuItemCheckboxChange: function (value){
		Store.post('/znadmin/user/updateUser', {data: {roleIds: value}, userId: this.state.info.id }).exec().then(function (data){
			Toast.success('保存成功');
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

		return <span><i style={{margin:5}} className={'fa ' + _icon} />{props.data.id +'、'+ props.data.title}</span>;
	},
	render:function(){
		if(!this.state.info){
			return null;
		}
		return (
			<UI.Page title={this.state.info.name} icon="fa-newspaper-o" toolbarItems={this.state.toolbarItems} >
				<div className="user-info">
					<div className="info-form user-item">
						<img className="avatar" src={Store.fixURL(this.state.info.avatarImg)||'./images/DefaultAvatar.png'} />
						<div className="details">
							<span className="last-logintime">最近一次登录时间：{this.state.info.lastLoginTime||'还未登陆'}</span>
							<div className="name">{this.state.info.name}</div>
							<div><i className="fa fa-clock-o" />创建时间：{this.state.info.createTime}</div>
							<div><i className="fa fa-envelope" />邮箱：{this.state.info.email}</div>
							<div><i className="fa fa-phone" />手机号：{this.state.info.phone}</div>
							<div>{this.state.info.note}</div>
						</div>
					</div>
					<div className="rt-panel c-default">
						<div className="p-head">部门及角色</div>
						<div className="p-body">
							<UI.TreeListView disabled={true} cascade={false} enableCheckbox={true} onItemCheckboxChange={this.__onTreeMenuItemCheckboxChange} value={this.state.info.roleIds} itemContentRender={this.__itemContentRender} ref="maintreemenu" activeAll={true} data={this.state.data} />
						</div>
					</div>
				</div>
			</UI.Page>
		);
	}
});
