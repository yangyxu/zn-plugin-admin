var React = require('react');
var _exports = React.createClass({
	displayName: 'exports',

	getInitialState: function getInitialState() {
		return {
			base: null
		};
	},
	componentDidMount: function componentDidMount() {
		this.__loadBaseSetting();
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
	__onLogin: function __onLogin(event) {
		event.preventDefault();
		var _form = event.target.form;
		var _name = _form['name'].value,
		    _password = _form['password'].value;
		if (!_name || _name.length < 2) {
			zn.alert('请输入长度不少于2位的用户名');
			_form['name'].focus();
			return false;
		}
		if (!_password || _password.length < 2) {
			zn.alert('请输入长度不少于2位的密码');
			_form['password'].focus();
			return false;
		}
		zn.http.post("/zn.plugin.admin/user/login", {
			name: _name,
			password: _password
		}).then(function (data) {
			if (data.status == 200) {
				zn.react.session.doMain(data.result);
			} else {
				zn.toast.error('登录失败： ' + data.result);
			}
		}, function (err) {
			zn.toast.error('登录失败： ' + err.message);
		});
	},
	render: function render() {
		if (!this.state.base) {
			return React.createElement(zn.react.DataLoader, null);
		}
		return React.createElement(
			'div',
			{ className: 'zn-plugin-admin-login' },
			React.createElement('img', { className: 'background-image', src: this.state.base.login_background_image }),
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
								'\u4E0B\u8F7D'
							)
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'section-body rt-scroll-webkit' },
				React.createElement(
					'div',
					{ className: 'warp', style: { width: 640 } },
					React.createElement(
						'div',
						{ className: 'intro' },
						React.createElement(
							'div',
							{ className: 'qr' },
							React.createElement(
								'div',
								{ style: { fontSize: 20, margin: 10 } },
								'\u624B\u673A\u5BA2\u6237\u7AEF'
							),
							this.state.base.client_qr_image && React.createElement('img', { className: 'qr-image', src: this.state.base.client_qr_image }),
							React.createElement(
								'span',
								null,
								'\u626B\u4E00\u626B\u7ACB\u5373\u4E0B\u8F7D'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'form-dialog' },
						React.createElement(
							'form',
							{ className: 'form' },
							React.createElement(
								'div',
								{ className: 'dialog-title' },
								'\u7528\u6237\u767B\u5F55'
							),
							React.createElement(
								'div',
								{ className: 'form-item' },
								React.createElement('i', { className: 'fa fa-user' }),
								React.createElement('input', { name: 'name', type: 'input', placeholder: '\u767B\u5F55\u7528\u6237\u540D', required: true })
							),
							React.createElement(
								'div',
								{ className: 'form-item' },
								React.createElement('i', { className: 'fa fa-lock' }),
								React.createElement('input', { name: 'password', type: 'password', placeholder: '\u5BC6\u7801', required: true })
							),
							React.createElement(
								'div',
								{ className: 'form-tips' },
								React.createElement(
									'label',
									null,
									React.createElement('input', { type: 'checkbox' }),
									'\u8BB0\u4F4F\u5BC6\u7801'
								),
								React.createElement(
									'label',
									null,
									'\u5FD8\u8BB0\u5BC6\u7801'
								)
							),
							React.createElement(
								'button',
								{ onClick: this.__onLogin, className: 'btn-login' },
								'\u767B \u5F55'
							)
						)
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