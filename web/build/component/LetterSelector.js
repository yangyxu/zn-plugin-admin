var React = require('react');
var CHARS = zn.char.getUppercaseLetters();

module.exports = React.createClass({
	displayName: 'exports',

	getDefaultProps: function getDefaultProps() {
		return {
			value: ',',
			mulitable: true
		};
	},
	getInitialState: function getInitialState() {
		return {
			value: this.props.value,
			tag: null,
			user: null,
			users: []
		};
	},
	__onLetterClick: function __onLetterClick(item) {
		var _id = item + ',';
		if (this.state.value.indexOf(',' + _id) == -1) {
			this.state.value = this.state.value + _id;
		} else {
			this.state.value = this.state.value.replace(',' + _id, ',');
		}
		this.setValue(this.state.value);
	},
	setValue: function setValue(value) {
		this.setState({
			value: value
		});

		this.props.onChange && this.props.onChange(value);
	},
	__onCheck: function __onCheck(event, value) {
		if (value) {
			this.setValue(',' + CHARS.join(',') + ',');
		} else {
			this.setValue(',');
		}
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'rt-letter-selector' },
			React.createElement(
				'ul',
				{ className: 'tags' },
				CHARS.map(function (item, index) {
					var _this = this;

					return React.createElement(
						'li',
						{ key: index, className: 'tag ' + (this.state.value.indexOf(item) != -1 ? 'selected' : ''), onClick: function onClick() {
								return _this.__onLetterClick(item);
							} },
						item
					);
				}.bind(this)),
				this.props.mulitable && React.createElement(
					'li',
					null,
					React.createElement(zn.react.Checkbox, { text: '\u5168\u9009', onChange: this.__onCheck })
				)
			)
		);
	}
});