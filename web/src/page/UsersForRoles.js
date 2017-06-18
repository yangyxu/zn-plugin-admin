var React = require('react');
module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: Store.post('/znadmin/model/paging', {
				model: 'zn_admin_user'
			})
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.roleId!=this.props.roleId){
			this.state.data._data.where = {
				"0&<>": "locate('," + nextProps.roleId + ",',roleIds)"
			};
			this.state.data.exec();
		}
	},
	__onUserClick: function (event, item, index){
		event.stopPropagation();
		Session.jump('/main/znadmin/UserInfo', { userId: item.id });
	},
	__itemRender: function (item, index){
		return <div className="user-item">
			<img className="avatar" src={Store.fixURL(item.avatarImg||'')} />
			<div className="details">
				<span className="last-logintime">{item.lastLoginTime||'还未登陆'}</span>
				<div className="name" onClick={(event)=>this.__onUserClick(event, item, index)}>{item.name}</div>
				<div><i className="fa fa-clock-o" />创建时间：{item.createTime}</div>
				<div><i className="fa fa-envelope" />邮箱：{item.email}</div>
				<div><i className="fa fa-phone" />手机号：{item.phone}</div>
			</div>
		</div>;
	},
	render:function(){
		return (
			<UI.PagerView
				view="ListView"
				className="rt-list-view-border"
				textKey="name"
				valueKey="id"
				selectMode="none"
				itemRender={this.__itemRender}
				data={this.state.data} />
		);
	}
});
