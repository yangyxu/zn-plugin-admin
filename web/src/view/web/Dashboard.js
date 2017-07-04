var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			userId: Session.json().id||1,
			toolbarItems: [],
			info: null,
			kylinInfo: null,
			data: Store.post('/znadmin/model/select', { model: 'zn_admin_role', where: { pid: 0 } })
		}
	},
	componentDidMount: function (){

	},
	render:function(){
		if(!this.state.info){
			return null;
		}
		return (
			<UI.Page title={'控制面板'} icon="fa-newspaper-o" toolbarItems={this.state.toolbarItems} >
				<div className="user-info">
					<div className="info-form user-item">
						<img className="avatar" src="./images/DefaultAvatar.png" />
						<div className="details">
							<span className="last-logintime">最近一次登录时间：{this.state.info.lastLoginTime||'2016-8-21 14:38:20'}</span>
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
							<UI.TreeMenu cascade={false} enableCheckbox={true} onItemCheckboxChange={this.__onTreeMenuItemCheckboxChange} value={this.state.info.roleIds} itemContentRender={this.__itemContentRender} ref="maintreemenu" activeAll={true} data={this.state.data} />
						</div>
					</div>
				</div>
			</UI.Page>
		);
	}
});
