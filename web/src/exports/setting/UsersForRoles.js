var React = require('react');
module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: 'ZNPluginAdminUser',
				where: this.props.roleId ? "locate('," + this.props.roleId + ",',role_ids) <> 0" : null
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
		zn.react.session.relativeJump('/znpluginadmin.user.infoedit', { userId: item.id });
	},
	__itemRender: function (item, index){
		return <div className="user">
			<img className="avatar" src={item.avatar_img?zn.http.fixURL(item.avatar_img):"./images/DefaultAvatar.png"} />
			<div className="name" onClick={(event)=>this.__onUserClick(event, item, index)}>{item.name}</div>
		</div>;
	},
	render:function(){
		return (
			<zn.react.PagerView
				view="ListView"
				className="zn-plugin-admin-users-for-roles"
				textKey="name"
				valueKey="id"
				selectMode="none"
				itemRender={this.__itemRender}
				data={this.state.data} />
		);
	}
});
