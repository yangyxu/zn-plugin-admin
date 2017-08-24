var React = require('react');
module.exports = React.createClass({
	displayName: 'exports',

	getDefaultProps: function getDefaultProps() {
		return {
			_id: 'zn.plugin.admin.base',
			title: '参数设置'
		};
	},
	getInitialState: function getInitialState() {
		return {
			items: null
		};
	},
	componentDidMount: function componentDidMount() {
		this.__getData();
	},
	__getData: function __getData() {
		zn.http.post('/zn.plugin.admin/config/selectBy_id', {
			_id: this.props._id
		}).then(function (data) {
			var _items = [],
			    _item = null;
			zn.each(data.result, function (value, key) {
				_item = {
					name: key,
					title: value._title,
					type: value.input_type,
					value: value._value || value._rich_value
				};
				if (_item.type == 'ImageUploader') {
					_item.action = '/zn.plugin.admin/uploadFiles';
				}
				_items.push(_item);
			});
			this.setState({
				items: _items
			});
		}.bind(this));
	},
	render: function render() {
		return React.createElement(
			zn.react.Page,
			{ loading: !this.state.items, title: this.props.title },
			React.createElement(
				'div',
				{ style: { backgroundColor: '#FFF' } },
				this.state.items && React.createElement(zn.react.Form, {
					items: this.state.items,
					action: '/zn.plugin.admin/config/updateBy_id',
					merge: 'updates',
					exts: {
						_id: this.props._id
					}
				})
			)
		);
	}
});