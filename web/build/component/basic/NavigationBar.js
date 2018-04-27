var React = require('react');

var MenuItem = React.createClass({
	displayName: 'MenuItem',

	getInitialState: function getInitialState() {
		return {
			active: false
		};
	},
	__renderChildren: function __renderChildren(children) {
		return React.createElement(
			'ul',
			{ className: 'sub-menu-list' },
			children.map(function (item, index) {
				var _this = this;

				return React.createElement(
					'li',
					{ className: item.url && zn.react.session.containPath(item.url) ? 'active-item' : '', key: index, onClick: function onClick() {
							return _this.__onSubItemClick(item, index);
						} },
					React.createElement(
						'div',
						{ className: 'item-title' },
						React.createElement(
							'div',
							null,
							React.createElement('i', { className: "fa " + item.icon }),
							item.zn_title
						)
					)
				);
			}.bind(this))
		);
	},
	__onSubItemClick: function __onSubItemClick(item, index) {
		if (item.url) {
			this.props.onMenuItemClick && this.props.onMenuItemClick(item, index);
			zn.react.session.relativeJump(item.url);
		} else {
			zn.http.get('/zn.plugin.admin/menu/getMenuPrimaryInfo?menuId=' + item.id).then(function (data) {
				if (data.status == 200) {
					zn.react.session.relativeJump("/znpluginadmin.setting.menupage", { menu: item.id });
				} else {
					zn.notification.error(data.result);
				}
			}, function () {
				zn.notification.error('请求出错');
			});
		}
	},
	render: function render() {
		var _this2 = this;

		var item = this.props.item;
		return React.createElement(
			'li',
			{ className: 'menu-item', 'data-active': this.state.active },
			React.createElement(
				'div',
				{ className: 'item-title', onClick: function onClick() {
						return _this2.setState({ active: !_this2.state.active });
					} },
				React.createElement(
					'span',
					null,
					React.createElement('i', { className: "fa " + item.icon }),
					item.zn_title
				),
				React.createElement('i', { className: "fa zr-padding-3 zn-fr " + (this.state.active ? 'fa-angle-down' : 'fa-angle-right') })
			),
			!!item.children && !!item.children.length && this.__renderChildren(item.children)
		);
	}
});

module.exports = React.createClass({
	displayName: 'exports',

	__renderItem: function __renderItem(item, index) {
		return React.createElement(MenuItem, { onMenuItemClick: this.props.onMenuItemClick, item: item, index: index });
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: zn.react.classname("zn-plugin-admin-navigation-bar", this.props.className), style: this.props.style },
			React.createElement(
				'ul',
				{ className: 'menu-list' },
				this.props.data.map(this.__renderItem)
			)
		);
	}
});