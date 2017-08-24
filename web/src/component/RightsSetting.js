var React = require('react');
var UserSearcher = require('./UserSearcher');
var RoleSearcher = require('./RoleSearcher');
module.exports = React.createClass({
	getDefaultProps: function (){
		return {
			model: null,
			id: null
		}
	},
	getInitialState: function (){
		return  {
			zn_rights_users: ',',
			zn_rights_roles: ',',
			zn_rights_owner_id: 0,
			items: [
				{
					title: '是否启用权限', name: 'zn_rights_enabled', type: 'radio',
					data: [{ text: "禁用", value: 0 },{ text: '启用', value: 1 }]
				},
				{ title: '扩展', name: 'zn_tree_extend', type: 'textarea' }
			]
		}
	},
	componentDidMount: function (){
		this.__load(this.props.id);
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.id!=this.props.id){
			this.__load(nextProps.id);
		}
	},
	__load: function (id){
		if(id){
			zn.http.post('/zn.plugin.admin/model/selectOne', {
				model: this.props.model,
				where: { id: id }
			}).then(function(data){
				this.setState(data.result);
			}.bind(this));
		}
	},
	__save: function (){
		if(!this.props.id){
			zn.toast.warning('必须编辑项');
			return;
		}

		zn.http.post('/zn.plugin.admin/model/update', {
			updates: {
				zn_rights_users: this.state.users,
				zn_rights_roles: this.state.roles
			},
			model: this.props.model,
			where: { id: this.props.id }
		}).then(function(data){
			if(data.result.changedRows){
				zn.toast.success('保存成功');
			}
		});
	},
	__changeOwner: function (){

	},
	render: function(){
		return (
			<div className="zn-plugin-admin-rights-setting" style={{padding: 5}}>
				<div className="title" style={{lineHeight: '4rem'}}>
					<i className="fa fa-yelp" style={{margin: 5}} />
					<span>权限设置【拥有者：<a onClick={this.__changeOwner}>{this.state.zn_rights_owner_id}</a>】</span>
					{this.props.id && <zn.react.Button onClick={this.__save} text="保存" icon="fa-save" float="right" style={{margin:5}} />}
				</div>
				{/*
					<UI.InfoPanel icon="fa-gears" title="设置" ext={true}>
						<UI.Form
							method="POST"
							layout="stacked"
							data={this.state}
							action='/zn.plugin.admin/model/updateNode'
							items={this.state.items} />
					</UI.InfoPanel>
				*/}
				<zn.react.Card icon="fa-user" title="用户">
					<UserSearcher value={this.state.zn_rights_users} onChange={(value)=>this.state.zn_rights_users=value} />
				</zn.react.Card>
				<zn.react.Card icon="fa-graduation-cap" title="角色">
					<RoleSearcher value={this.state.zn_rights_roles} onChange={(value)=>this.state.zn_rights_roles=value} />
				</zn.react.Card>
			</div>
		);
	}
});
