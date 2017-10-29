var React = require('react');
module.exports = React.createClass({
	displayName: "exports",

	__renderItem: function __renderItem(item, index) {
		return React.createElement(
			"li",
			{ className: "menu-item" },
			React.createElement(
				"div",
				{ className: "item-title" },
				React.createElement("i", { className: "fa " + item.icon }),
				item.zn_title
			),
			!!item.children && !!item.children.length && this.__renderChildren(item.children)
		);
	},
	__renderChildren: function __renderChildren(children) {
		return React.createElement(
			"ul",
			{ className: "sub-menu-list" },
			children.map(function (item, index) {
				var _this = this;

				return React.createElement(
					"li",
					{ className: item.url && zn.react.session.containPath(item.url) ? 'active-item' : '', key: index, onClick: function onClick() {
							return _this.__onSubItemClick(item, index);
						} },
					React.createElement(
						"div",
						{ className: "item-title" },
						React.createElement("i", { className: "fa " + item.icon }),
						item.zn_title
					)
				);
			}.bind(this))
		);
	},
	__onSubItemClick: function __onSubItemClick(item, index) {
		if (item.url) {
			this.props.onMenuItemClick && this.props.onMenuItemClick(item, index);
			zn.react.session.relativeJump(item.url);
		}
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "zn-plugin-admin-navigation-bar", style: this.props.style },
			React.createElement(
				"ul",
				{ className: "menu-list" },
				this.props.data.map(function (item, index) {
					return this.__renderItem(item, index);
				}.bind(this))
			)
		);
	}
});