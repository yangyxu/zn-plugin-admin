var React = require('react');

var CHARS = ['A','B','C','D',''];

var UserSelector = React.createClass({
	getDefaultProps: function (){
		return {
			value: ','
		};
	},
	getInitialState: function (){
		return {
			value: this.props.value,
			tag: null,
			tags: [],
			user: null,
			users: []
		}
	},
	componentDidMount: function (){
		this.loadRoles();
		this.loadUsers();
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.value != this.props.value){
			this.setState({
				value: nextProps.value
			});
		}
	},
	loadRoles: function (){
		/*
		Store.post('/plugins/dbms/model/selectAllChildByPid', {model: 'zn_admin_role', fields: 'id as value, title as text', pid: 1}).exec().then(function (data){
			this.setState({
				tags: data.result
			});
		}.bind(this));*/
	},
	loadUsers: function (){
		Store.post('/znadmin/model/select', {model: 'zn_admin_user', fields: 'id as value, name as text'}).exec().then(function (data){
			this.setState({
				users: data.result
			});
		}.bind(this));
	},
	__onTagClick: function (item){
		this.setState({tag:item.value})
	},
	__onUserClick: function (user){
		var _id = user.value + ',';
		if(this.state.value.indexOf(','+_id)==-1){
			this.state.value = this.state.value + _id;
		}else {
			this.state.value = this.state.value.replace(','+_id, ',');
		}
		this.setState({
			value: this.state.value
		});
		this.props.onChange && this.props.onChange(this.state.value);
	},
	render: function (){
		return (
			<div className="rt-user-selector">
				<ul className="tags" style={{borderBottom: '1px dashed #e4e2e2'}}>
					{
						this.state.tags.map(function (item, index){
							return <li key={index} className={this.state.tag==item.value ? 'curr' : ''} onClick={()=>this.__onTagClick(item)}>{item.text}</li>;
						}.bind(this))
					}
				</ul>
				<ul className="tags">
					{
						this.state.users.map(function (item, index){
							return <li key={index} className={this.state.value.indexOf(',' + item.value + ',')!==-1?'curr':''} onClick={()=>this.__onUserClick(item)}>{item.text}</li>;
						}.bind(this))
					}
				</ul>
			</div>
		);
	}
});


module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'zn_admin_user'
		};
	},
	getInitialState: function () {
		return {
			data: Store.post('/znadmin/model/select', { model: this.props.model, where: { pid: 0 } }),
			userSelectType: 0
		}
	},
	componentDidMount: function (){

	},
	__onListViewItemClick: function (event, item){
		if(item.view){
			this.setState({
				userSelectType: item.type
			});
		}
	},
	render:function(){
		return (
			<UserSelector {...this.props} />
		);

		return (
			<div className="rt-user-searcher">
				<UI.ListView
					className="c-tab-1"
					fireIndex={0}
					onClick={this.__onListViewItemClick}
					itemRender={(item)=>{ return <span><i style={{marginRight:5}} className={'fa ' + item.icon} />{item.text}</span>;}}
					data={[
						{ text: '首字母', icon: 'fa-font', type: 0 },
						{ text: '所属部门', icon: 'fa-sitemap', type: 1 }
					]} />
				<UserSelector type={this.state.userSelectType} />
			</div>
		);
	}
});
