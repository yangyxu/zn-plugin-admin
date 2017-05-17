require('./UserSearcher.less');
var React = require('react');

module.exports = React.createClass({
	getDefaultProps: function (){
		return {
			value: ','
		};
	},
	getInitialState: function (){
		return {
			value: this.props.value,
			roles: []
		}
	},
	componentDidMount: function (){
		this.loadRoles();
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.value != this.props.value){
			this.setState({
				value: nextProps.value
			});
		}
	},
	loadRoles: function (){
		Store.post('/znadmin/model/selectAllChildByPid', {model: 'zn_admin_role', fields: 'id as value, title as text, type', pid: 1}).exec().then(function (data){
			this.setState({
				roles: data.result
			});
		}.bind(this));
	},
	__onTagClick: function (item){
		this.setState({tag:item.value})
	},
	__onUserClick: function (user){
		var _id = user.value + ',';
		if(this.state.value.indexOf(',' + _id)==-1){
			this.state.value = this.state.value + _id;
		}else {
			this.state.value = this.state.value.replace((',' + _id), ',');
		}
		this.setState({
			value: this.state.value
		});
		this.props.onChange && this.props.onChange(this.state.value);
	},
	__renderIcon: function (item){
		switch (item.type) {
			case 0:
				return null;
			case 1:
				return <i title="这是部门" className='fa fa-sitemap' style={{margin: 5,color: '#d9534f'}} />;
			case 2:
				return <i title="这是角色" className='fa fa-graduation-cap' style={{margin: 5}} />;
		}
	},
	render: function (){
		return (
			<div className="rt-user-selector">
				<ul className="tags">
					{
						this.state.roles.map(function (item, index){
							return <li key={index} className={this.state.value.indexOf(',' + item.value + ',')!==-1?'curr':''} onClick={()=>this.__onUserClick(item)}>{this.__renderIcon(item)}{item.text}</li>;
						}.bind(this))
					}
				</ul>
			</div>
		);
	}
});
