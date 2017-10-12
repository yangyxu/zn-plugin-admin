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
			value: '',
			text: ''
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
	render:function(){
		return (
			<TreeSelector ref="treeselector" {...this.props}
				model="ZNPluginAdminRole"
				value={this.state.value}
				className={zn.react.classname("zn-plugin-admin-role-selector", this.props.className)}
				onValueChange={this.__onValueChange} />
		);
	}
});
