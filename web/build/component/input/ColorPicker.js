var React = require('react');
var ChromePicker = require('react-color').ChromePicker;
module.exports = React.createClass({
	displayName: 'exports',

	getDefaultProps: function getDefaultProps() {
		return {
			valueType: 'hex'
		};
	},
	getInitialState: function getInitialState() {
		return {
			value: this.props.value
		};
	},
	__onColorClick: function __onColorClick(value, event) {
		this.state.value = value[this.props.valueType];
		this.props.onChange && this.props.onChange(value, event);
	},
	setValue: function setValue(value) {
		this.setState({
			value: value
		});
	},
	getValue: function getValue() {
		return this.state.value;
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: zn.react.classname("zn-plugin-admin-color-picker", this.props.className) },
			React.createElement(ChromePicker, { color: this.state.value, onChange: this.__onColorClick })
		);
	}
});