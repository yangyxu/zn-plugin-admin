var React = require('react');
module.exports = React.createClass({
	displayName: 'exports',

	getInitialState: function getInitialState() {
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: 'ZNPluginAdminUser'
			})
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (nextProps.roleId != this.props.roleId) {
			this.state.data.extend({
				where: "locate('," + nextProps.roleId + ",',role_ids) <> 0"
			}).exec();
		}
	},
	__onUserClick: function __onUserClick(event, item, index) {
		event.stopPropagation();
		zn.react.session.jump('/znpluginadmin.user.info', { userId: item.id });
	},
	__itemRender: function __itemRender(item, index) {
		var _this = this;

		return React.createElement(
			'div',
			{ className: 'user-item' },
			React.createElement('img', { className: 'avatar', src: zn.http.fixURL(item.avatar_img) }),
			React.createElement(
				'div',
				{ className: 'details' },
				React.createElement(
					'span',
					{ className: 'last-logintime' },
					item.last_login_time || '还未登陆'
				),
				React.createElement(
					'div',
					{ className: 'name', onClick: function onClick(event) {
							return _this.__onUserClick(event, item, index);
						} },
					item.name
				),
				React.createElement(
					'div',
					null,
					React.createElement('i', { className: 'fa fa-clock-o' }),
					'\u521B\u5EFA\u65F6\u95F4\uFF1A',
					item.zn_create_time
				),
				React.createElement(
					'div',
					null,
					React.createElement('i', { className: 'fa fa-envelope' }),
					'\u90AE\u7BB1\uFF1A',
					item.email
				),
				React.createElement(
					'div',
					null,
					React.createElement('i', { className: 'fa fa-phone' }),
					'\u624B\u673A\u53F7\uFF1A',
					item.phone
				)
			)
		);
	},
	render: function render() {
		return React.createElement(zn.react.PagerView, {
			view: 'ListView',
			className: 'zr-list-view-border',
			textKey: 'name',
			valueKey: 'id',
			selectMode: 'none',
			itemRender: this.__itemRender,
			data: this.state.data });
	}
});