var React = require('react');
module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: 'ZNPluginAdminUser'
			})
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.roleId!=this.props.roleId){
			this.state.data.extend({
				where: "locate('," + nextProps.roleId + ",',role_ids) <> 0"
			}).exec();
		}
	},
	__onUserClick: function (event, item, index){
		event.stopPropagation();
		zn.react.session.jump('/znpluginadmin.user.info', { userId: item.id });
	},
	__itemRender: function (item, index){
		return <div className="user-item">
			<img className="avatar" src={zn.http.fixURL(item.avatar_img)} />
			<div className="details">
				<span className="last-logintime">{item.last_login_time||'还未登陆'}</span>
				<div className="name" onClick={(event)=>this.__onUserClick(event, item, index)}>{item.name}</div>
				<div><i className="fa fa-clock-o" />创建时间：{item.zn_create_time}</div>
				<div><i className="fa fa-envelope" />邮箱：{item.email}</div>
				<div><i className="fa fa-phone" />手机号：{item.phone}</div>
			</div>
		</div>;
	},
	render:function(){
		return (
			<zn.react.PagerView
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
