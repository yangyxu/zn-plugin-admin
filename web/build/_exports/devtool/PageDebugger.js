var React = require('react');

module.exports = React.createClass({
	displayName: "exports",

	__renderPages: function __renderPages() {
		var _routers = zn.react.app._routers;
		return React.createElement(
			"ul",
			null,
			Object.keys(_routers).map(function (router, index) {
				return React.createElement(
					"li",
					{ style: { padding: 3 } },
					React.createElement("i", { "data-tooltip": "\u590D\u5236\u94FE\u63A5", onClick: function onClick() {
							return zn.react.copyToClipboard(router);
						}, className: "fa fa-clipboard zr-padding-3" }),
					React.createElement(
						"a",
						{ href: '#' + router },
						router
					)
				);
			})
		);
	},
	render: function render() {
		return React.createElement(
			zn.react.Page,
			{ className: "zn-plugin-admin-devtool-page-debuger", title: "\u9875\u9762\u8C03\u8BD5\u5668" },
			this.__renderPages()
		);
	}
});