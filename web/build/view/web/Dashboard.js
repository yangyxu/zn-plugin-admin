var React = require('react');

module.exports = React.createClass({
	displayName: 'exports',

	getInitialState: function getInitialState() {
		return {
			userId: Session.json().id || 1,
			toolbarItems: [],
			info: null,
			kylinInfo: null,
			data: Store.post('/znadmin/model/select', { model: 'zn_admin_role', where: { pid: 0 } })
		};
	},
	componentDidMount: function componentDidMount() {},
	render: function render() {
		if (!this.state.info) {
			return null;
		}
		return React.createElement(
			UI.Page,
			{ title: '控制面板', icon: 'fa-newspaper-o', toolbarItems: this.state.toolbarItems },
			React.createElement(
				'div',
				{ className: 'user-info' },
				React.createElement(
					'div',
					{ className: 'info-form user-item' },
					React.createElement('img', { className: 'avatar', src: './images/DefaultAvatar.png' }),
					React.createElement(
						'div',
						{ className: 'details' },
						React.createElement(
							'span',
							{ className: 'last-logintime' },
							'\u6700\u8FD1\u4E00\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A',
							this.state.info.lastLoginTime || '2016-8-21 14:38:20'
						),
						React.createElement(
							'div',
							{ className: 'name' },
							this.state.info.name
						),
						React.createElement(
							'div',
							null,
							React.createElement('i', { className: 'fa fa-clock-o' }),
							'\u521B\u5EFA\u65F6\u95F4\uFF1A',
							this.state.info.createTime
						),
						React.createElement(
							'div',
							null,
							React.createElement('i', { className: 'fa fa-envelope' }),
							'\u90AE\u7BB1\uFF1A',
							this.state.info.email
						),
						React.createElement(
							'div',
							null,
							React.createElement('i', { className: 'fa fa-phone' }),
							'\u624B\u673A\u53F7\uFF1A',
							this.state.info.phone
						),
						React.createElement(
							'div',
							null,
							this.state.info.note
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'rt-panel c-default' },
					React.createElement(
						'div',
						{ className: 'p-head' },
						'\u90E8\u95E8\u53CA\u89D2\u8272'
					),
					React.createElement(
						'div',
						{ className: 'p-body' },
						React.createElement(UI.TreeMenu, { cascade: false, enableCheckbox: true, onItemCheckboxChange: this.__onTreeMenuItemCheckboxChange, value: this.state.info.roleIds, itemContentRender: this.__itemContentRender, ref: 'maintreemenu', activeAll: true, data: this.state.data })
					)
				)
			)
		);
	}
});