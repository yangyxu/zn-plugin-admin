require('./RoleSelector.less');
var React = require('react');
var TreeSelector = require('./TreeSelector');
module.exports = React.createClass({
	getDefaultProps: function (){
		return {
			pid: 1,
			checkboxEnabled: true
		}
	},
	getInitialState: function (){
		return {
			value: this.props.value,
			text: this.props.text
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.value != this.props.value){
			this.setValue(nextProps.value);
		}
	},
	__onValueChange: function (obj){
		this.state.text = obj.text;
		this.state.value = obj.value;
		this.props.onChange && this.props.onChange(obj);
	},
	setValue: function (value){
		this.state.value = value;
		this.refs.treeselector.setValue(value);
	},
	getValue: function (){
		return this.state.value;
	},
	__itemContentRender: function (data){
		var _icon = '';
		if(data.type==1){
			_icon = 'fa-sitemap';
		}
		if(data.type==2){
			_icon = 'fa-graduation-cap';
		}
		return <span><i style={{margin:5}} className={'fa ' + _icon} />{data.zn_title}</span>;
	},
	render:function(){
		return (
			<TreeSelector ref="treeselector" {...this.props}
				model="ZNPluginAdminRole"
				value={this.state.value}
				itemContentRender={this.__itemContentRender}
				className={zn.react.classname("zn-plugin-admin-role-selector", this.props.className)}
				onValueChange={this.__onValueChange} />
		);
	}
});
