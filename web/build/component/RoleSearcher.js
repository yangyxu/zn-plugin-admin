var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
module.exports = zn.react.znadmin.RoleSearcher = React.createClass({
	displayName: 'RoleSearcher',

	getDefaultProps: function getDefaultProps() {
		return {
			value: ',',
			disabled: false,
			cascade: false,
			activeAll: false,
			enableCheckbox: true
		};
	},
	getInitialState: function getInitialState() {
		return {
			value: this.props.value,
			data: Store.post('/znadmin/model/select', {
				model: 'zn_admin_role', where: {
					pid: 0
				}
			})
		};
	},
	componentDidUpdate: function componentDidUpdate(prevProps) {
		if (prevProps.value != this.props.value) {
			this.setState({
				value: this.props.value
			});
		}
	},
	__onTreeMenuItemCheckboxChange: function __onTreeMenuItemCheckboxChange(value) {
		this.state.value = value;
		this.props.onChange && this.props.onChange(value);
	},
	setValue: function setValue(value) {
		this.setState({
			value: value
		});
		this.props.onChange && this.props.onChange(value);
	},
	getValue: function getValue() {
		return this.state.value;
	},
	__itemContentRender: function __itemContentRender(props) {
		var _icon = '';
		switch (props.data.type) {
			case 1:
				_icon = 'fa-sitemap';
				break;
			case 2:
				_icon = 'fa-graduation-cap';
				break;
		}

		return React.createElement(
			'span',
			null,
			_icon && React.createElement('i', { style: { margin: 5 }, className: 'fa ' + _icon }),
			(this.props.debug ? props.data.id + '、' : '') + props.data.title
		);
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'rt-user-selector' },
			React.createElement(zn.react.TreeListView, _extends({}, this.props, {
				value: this.state.value,
				data: this.state.data,
				onItemCheckboxChange: this.__onTreeMenuItemCheckboxChange,
				itemContentRender: this.__itemContentRender }))
		);
	}
});