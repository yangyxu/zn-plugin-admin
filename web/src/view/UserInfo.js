require('./UserInfo.less');
var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			userId:  this.props.userId,
			info: null,
			data: Store.post('/znadmin/model/select', { model: 'zn_admin_role', where: { pid: 0 } })
		}
	},
	componentDidMount: function (){
		this.__loadUserInfo();
	},
	__loadUserInfo: function (){
		Store.post('/znadmin/user/findUserById', { userId: this.state.userId }).exec().then(function (data){
			this.setState({
				info: data.result
			});
		}.bind(this));
	},
	__onTreeMenuItemCheckboxChange: function (value){
		Store.post('/znadmin/user/updateUser', {data: {roleIds: value}, userId: this.state.info.id }).exec().then(function (data){
			Popup.message({
				content: '保存成功!',
				type: 'success'
			});
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
						<img className="avatar" src="./images/DefaultAvatar.png" />
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
							<UI.TreeListView cascade={false} enableCheckbox={true} onItemCheckboxChange={this.__onTreeMenuItemCheckboxChange} value={this.state.info.roleIds} itemContentRender={this.__itemContentRender} ref="maintreemenu" activeAll={true} data={this.state.data} />
						</div>
					</div>
				</div>
			</UI.Page>
		);
	}
});
