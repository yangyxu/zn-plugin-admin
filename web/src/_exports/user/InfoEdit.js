require('./InfoEdit.less');
var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			userId: this.props.userId || this.props.request.search.userId,
			info: null,
			data: zn.store.post('/zn.plugin.admin/model/select', { model: 'ZNPluginAdminRole', where: { zn_tree_pid: 0 } })
		}
	},
	componentDidMount: function (){
		this.__loadUserInfo();
	},
	__loadUserInfo: function (){
		zn.http.post('/zn.plugin.admin/user/findUserById', {
			userId: this.state.userId
		}).then(function (data){
			this.setState({
				info: data.result
			});
		}.bind(this));
	},
	__onRoleChange: function (obj){
		zn.http.post('/zn.plugin.admin/user/updateUser', {
			data: { role_ids: obj.value },
			userId: this.state.userId
		}).then(function (data){
			if(data.status == 200){
				zn.toast.success('保存成功!');
			}else {
				zn.toast.error(data.result);
			}
		}, function (){
			zn.toast.error("服务器调用错误.");
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
		return <span><i style={{margin:5}} className={'fa ' + _icon} />{props.data.zn_title}</span>;
	},
	__onLoginTimeClick: function (){
		zn.react.session.relativeJump('/znpluginadmin.user.loginlog?userId=' + this.state.info.id);
	},
	render:function(){
		if(!this.state.info){
			return <zn.react.DataLoader content="正在加载中..." loader="timer" />;
		}
		return (
			<zn.react.Page title={this.state.info.name} icon="fa-newspaper-o" toolbarItems={this.state.toolbarItems} >
				<div className="zn-plugin-admin-user-info">
					<div className="info-form user-item">
						<img className="avatar" src={zn.http.fixURL(this.state.info.avatar_img)||'./images/DefaultAvatar.png'} />
						<div className="details">
							<span data-tooltip="查看登录日志记录" onClick={this.__onLoginTimeClick} className="last-logintime">最近一次登录时间：{this.state.info.last_login_time||'还未登陆'}</span>
							<div className="name">{this.state.info.name}</div>
							<div className="item"><i className="fa fa-clock-o" />注册时间：{this.state.info.zn_create_time}</div>
							<div className="item"><i className="fa fa-envelope" />邮箱：{this.state.info.email}</div>
							<div className="item"><i className="fa fa-phone" />手机号：{this.state.info.phone}</div>
							<div className="item">{this.state.info.zn_note}</div>
						</div>
					</div>
					<zn.react.Card title="部门及角色">
						<zn.plugin.admin.RoleSelector value={this.state.info.role_ids} onChange={this.__onRoleChange} />
					</zn.react.Card>
				</div>
			</zn.react.Page>
		);
	}
});
