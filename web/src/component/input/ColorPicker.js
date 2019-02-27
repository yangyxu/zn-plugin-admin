require('./ColorPicker.less');
var React = require('react');
var ChromePicker = require('react-color').ChromePicker;
module.exports = React.createClass({
	getDefaultProps: function (){
		return {
			valueType: 'hex'
		}
	},
	getInitialState: function () {
		return {
			value: this.props.value
		}
	},
	__onColorClick: function (value, event){
		this.state.value = value[this.props.valueType];
		this.props.onChange && this.props.onChange(value, event);
	},
	setValue: function (value){
		this.setState({
			value: value
		});
	},
	getValue: function (){
		return this.state.value;
	},
	render:function(){
		return (
			<div className={zn.react.classname("zn-plugin-admin-color-picker", this.props.className)}>
				<ChromePicker color={this.state.value} onChange={this.__onColorClick} />
			</div>
		);
	}
});
