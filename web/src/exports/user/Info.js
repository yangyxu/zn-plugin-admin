var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			info: null,
			data: zn.store.post('/zn.plugin.admin/model/select', { model: 'ZNPluginAdminRole', where: { pid: 0 } })
		}
	},
	componentDidMount: function (){
		this.__loadUserInfo();
	},
	__loadUserInfo: function (){
		zn.http.post('/zn.plugin.admin/user/findUserById', {
			userId: this.props.userId
		}).then(function (data){
			this.setState({
				info: data.result
			});
		}.bind(this));
	},
	__onTreeMenuItemCheckboxChange: function (value){
		zn.http.post('/zn.plugin.admin/user/updateUser', {
			data: { role_ids: value },
			userId: this.props.userId
		}).then(function (data){
			zn.toast.success('保存成功!');
		});
	},
	__itemContentRender: function (props){
		var _icon = '';
		if(props.data.zn_tree_type==1){
			_icon = 'fa-sitemap';
		}
		if(props.data.zn_tree_type==2){
			_icon = 'fa-graduation-cap';
		}
		return <span><i style={{margin:5}} className={'fa ' + _icon} />{props.data.id +'、'+ props.data.zn_title}</span>;
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
							ref="maintreemenu"
							cascade={false}
							enableCheckbox={true}
							onItemCheckboxChange={this.__onTreeMenuItemCheckboxChange}
							value={this.state.info.roleIds}
							itemContentRender={this.__itemContentRender}
							activeAll={true}
							data={this.state.data} />
					</zn.react.Card>
				</div>
			</zn.react.Page>
		);
	}
});
