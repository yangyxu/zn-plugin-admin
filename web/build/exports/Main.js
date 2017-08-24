var React = require('react');
var NavigationBar = require('../widget/NavigationBar');
var UserSessionInfo = require('../widget/UserSessionInfo');
var _exports = React.createClass({
	displayName: '_exports',

	getInitialState: function getInitialState() {
		return {
			menus: [],
			base: null
		};
	},
	componentDidMount: function componentDidMount() {
		this.__loadBaseSetting();
		this.__loadUserRights();
	},
	__loadBaseSetting: function __loadBaseSetting() {
		zn.http.post("/zn.plugin.admin/config/selectBy_id", {
			_id: 'zn.plugin.admin.base',
			valueKey: '_value'
		}).then(function (data) {
			if (data.status == 200) {
				this.setState({
					base: data.result
				});
			} else {
				this.setState({
					base: {
						"company_title": "上海佑洋信息科技有限公司",
						"company_logo": "./images/logo.png",
						"company_website": "http://www.youyangit.com",
						"company_tm": "上海佑洋信息科技有限公司 @2016 - @2017",
						"main": "/znpluginadmin.dashboard",
						"main_background_image": "./images/login_background/starry_sky_12.jpg",
						"login_background_image": "./images/login_background/starry_sky_11.jpg"
					}
				});
			}
		}.bind(this), function (err) {
			zn.toast.error('获取基础信息失败： ' + err.message);
		});
	},
	__loadUserRights: function __loadUserRights() {
		zn.http.get('/zn.plugin.admin/user/getUserRightsMenus').then(function (data) {
			this.setState({
				menus: data.result
			});
		}.bind(this));
	},
	__onSessionClick: function __onSessionClick() {
		zn.modal.open(React.createElement(UserSessionInfo, null), {
			modalStyle: { overflow: 'hidden' },
			className: 'modal-right',
			isMode: true,
			removeSelf: false
		});
	},
	__onSignOut: function __onSignOut() {
		zn.confirm('确定要退出系统？', '提示', function () {
			zn.http.post('/zn.plugin.admin/user/logout').then(function () {
				zn.react.session.doHome();
			});
		});
	},
	render: function render() {
		if (!zn.react.session.validate()) {
			return false;
		}
		if (!this.state.base) {
			return React.createElement(zn.react.DataLoader, { content: '\u6B63\u5728\u52A0\u8F7D\u4E2D...', loader: 'timer' });
		}
		return React.createElement(
			'div',
			{ className: 'zn-plugin-admin-main' },
			React.createElement('img', { className: 'background-image', src: this.state.base.main_background_image }),
			React.createElement(
				'div',
				{ className: 'section-head' },
				React.createElement(
					'div',
					{ className: 'warp' },
					React.createElement(
						'div',
						{ className: 'head-left' },
						React.createElement('img', { className: 'company-logo', src: this.state.base.company_logo }),
						React.createElement(
							'div',
							{ className: 'company-title' },
							this.state.base.company_title
						)
					),
					React.createElement(
						'div',
						{ className: 'head-right' },
						React.createElement(
							'ul',
							{ className: 'link-nav' },
							React.createElement(
								'li',
								null,
								React.createElement(
									'a',
									{ href: this.state.base.company_website },
									'\u5B98\u7F51'
								)
							),
							React.createElement(
								'li',
								null,
								React.createElement(
									'a',
									{ href: this.state.base.company_website },
									'\u4E0B\u8F7D'
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'user-session', onClick: this.__onSessionClick },
							React.createElement(
								'figure',
								{ className: 'avatar' },
								React.createElement('img', { src: zn.http.fixURL(zn.react.session.json().avatar_img) || './images/DefaultAvatar.png' })
							),
							React.createElement(
								'span',
								{ className: 'name' },
								zn.react.session.json().name
							),
							React.createElement('i', { className: 'fa fa-angle-down' })
						),
						React.createElement(
							'div',
							{ className: 'icons' },
							React.createElement('i', { onClick: this.__onMessage, className: 'fa fa-comment-o', title: '\u6D88\u606F' }),
							React.createElement('i', { onClick: this.__onSetting, className: 'fa fa-gear', title: '\u8BBE\u7F6E' }),
							React.createElement('i', { onClick: this.__onSignOut, className: 'sign-out fa fa-sign-out', title: '\u6CE8\u9500' })
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'section-body' },
				React.createElement(
					'div',
					{ className: 'warp inner-content' },
					React.createElement(
						'div',
						{ className: 'navigation-view rt-scroll-webkit' },
						React.createElement(NavigationBar, { data: this.state.menus })
					),
					React.createElement(
						'div',
						{ className: 'page-view' },
						this.props.view && React.createElement(this.props.view, this.props.request.search)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'section-foot' },
				React.createElement(
					'div',
					{ className: 'warp' },
					React.createElement(
						'div',
						{ className: 'TM' },
						this.state.base.company_tm
					)
				)
			)
		);
	}
});

_exports.global = true;
module.exports = _exports;