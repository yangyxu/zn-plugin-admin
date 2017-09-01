var React = require('react');

module.exports = React.createClass({
	displayName: 'exports',

	getInitialState: function getInitialState() {
		return {
			info: null,
			data: zn.store.post('/zn.plugin.admin/model/select', { model: 'ZNPluginAdminRole', where: { pid: 0 } })
		};
	},
	componentDidMount: function componentDidMount() {
		this.__loadUserInfo();
	},
	__loadUserInfo: function __loadUserInfo() {
		zn.http.post('/zn.plugin.admin/user/findUserById', {
			userId: this.props.userId
		}).then(function (data) {
			this.setState({
				info: data.result
			});
		}.bind(this));
	},
	__onTreeMenuItemCheckboxChange: function __onTreeMenuItemCheckboxChange(value) {
		zn.http.post('/zn.plugin.admin/user/updateUser', {
			data: { role_ids: value },
			userId: this.props.userId
		}).then(function (data) {
			zn.toast.success('保存成功!');
		});
	},
	__itemContentRender: function __itemContentRender(props) {
		var _icon = '';
		if (props.data.zn_tree_type == 1) {
			_icon = 'fa-sitemap';
		}
		if (props.data.zn_tree_type == 2) {
			_icon = 'fa-graduation-cap';
		}
		return React.createElement(
			'span',
			null,
			React.createElement('i', { style: { margin: 5 }, className: 'fa ' + _icon }),
			props.data.id + '、' + props.data.zn_title
		);
	},
	render: function render() {
		if (!this.state.info) {
			return React.createElement(zn.react.DataLoader, { content: '\u6B63\u5728\u52A0\u8F7D\u4E2D...', loader: 'timer' });
		}
		return React.createElement(
			zn.react.Page,
			{ title: this.state.info.name, icon: 'fa-newspaper-o', toolbarItems: this.state.toolbarItems },
			React.createElement(
				'div',
				{ className: 'zn-plugin-admin-user-info' },
				React.createElement(
					'div',
					{ className: 'info-form user-item' },
					React.createElement('img', { className: 'avatar', src: zn.http.fixURL(this.state.info.avatar_img) || './images/DefaultAvatar.png' }),
					React.createElement(
						'div',
						{ className: 'details' },
						React.createElement(
							'span',
							{ className: 'last-logintime' },
							'\u6700\u8FD1\u4E00\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A',
							this.state.info.last_login_time || '还未登陆'
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
							this.state.info.zn_create_time
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
							this.state.info.zn_note
						)
					)
				),
				React.createElement(
					zn.react.Card,
					{ title: '\u90E8\u95E8\u53CA\u89D2\u8272' },
					React.createElement(zn.react.TreeListView, {
						ref: 'maintreemenu',
						cascade: false,
						enableCheckbox: true,
						onItemCheckboxChange: this.__onTreeMenuItemCheckboxChange,
						value: this.state.info.roleIds,
						itemContentRender: this.__itemContentRender,
						activeAll: true,
						data: this.state.data })
				)
			)
		);
	}
});