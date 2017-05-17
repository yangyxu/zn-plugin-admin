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
			users: ',',
			roles: ',',
			observers: ',',
			ownerId: 0,
			items: [
				{
					title: '是否启用权限', name: 'ifEnabledRights', type: 'radio',
					data: [{ text: "禁用", value: 0 },{ text: '启用', value: 1 }]
				},
				{ title: '扩展', name: 'ext', type: 'textarea' }
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
			Store.post('/znadmin/model/selectOne', {
				fields: '*',
				model: this.props.model,
				where: { id: id }
			}).exec().then(function(data){
				this.setState(data.result);
			}.bind(this));
		}
	},
	__save: function (){
		if(!this.props.id){
			Toast.warning('必须编辑项');
			return;
		}
		var _data = {
			users: this.state.users,
			roles: this.state.roles
		};

		Store.post('/znadmin/model/updateNode', { data: _data, model: this.props.model, where: { id: this.props.id }}).exec().then(function(data){
			if(data.result.changedRows){
				Toast.success('保存成功');
			}
		}.bind(this));
	},
	__changeOwner: function (){

	},
	render: function(){
		return (
			<div className="rt-rights-setting" style={{padding: 5}}>
				<div className="title" style={{lineHeight: '4rem'}}>
					<i className="fa fa-yelp" style={{margin: 5}} />
					<span>权限设置【拥有者：<a onClick={this.__changeOwner}>{this.state.ownerId}</a>】</span>
					{this.props.id && <UI.Button onClick={this.__save} text="保存" icon="fa-save" float="right" style={{margin:5}} />}
				</div>
				{/*
					<UI.InfoPanel icon="fa-gears" title="设置" ext={true}>
						<UI.Form
							method="POST"
							layout="stacked"
							data={this.state}
							action='/znadmin/model/updateNode'
							items={this.state.items} />
					</UI.InfoPanel>
				*/}
				<UI.Card icon="fa-user" title="用户">
					<UserSearcher value={this.state.users} onChange={(value)=>this.state.users=value} />
				</UI.Card>
				<UI.Card icon="fa-graduation-cap" title="角色">
					<RoleSearcher value={this.state.roles} onChange={(value)=>this.state.roles=value} />
				</UI.Card>
			</div>
		);
	}
});
