var React = require('react');
var QRCode = require('qrcode.react');
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
				var _base = data.result;
				var _base = data.result;
				if (_base.main_background_image.indexOf('/') == 0) {
					_base.company_logo = zn.http.fixURL(_base.company_logo);
					_base.login_background_image = zn.http.fixURL(_base.login_background_image);
					_base.main_background_image = zn.http.fixURL(_base.main_background_image);
				}
				window.document.title = _base.company_title;
				this.setState({
					base: _base
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
			zn.notification.error('获取基础信息失败： ' + err.message);
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
		zn.preloader.open({
			content: '正在登陆中...'
		});
		zn.http.post("/zn.plugin.admin/user/login", {
			name: _name,
			password: _password
		}).then(function (data) {
			if (data.status == 200) {
				zn.react.session.doMain(data.result);
			} else {
				zn.notification.error('登录失败： ' + data.result);
			}
			zn.preloader.close();
		}, function (err) {
			zn.notification.error("网络请求失败");
			zn.preloader.close();
		});
	},
	render: function render() {
		if (!this.state.base) {
			return React.createElement(zn.react.DataLoader, { content: '\u6B63\u5728\u52A0\u8F7D\u57FA\u7840\u4FE1\u606F...', loader: 'timer' });
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
				{ className: 'section-body zr-scroll-webkit' },
				React.createElement(
					'div',
					{ className: 'warp', style: { width: 640 } },
					React.createElement(
						'div',
						{ className: 'intro' },
						this.state.base.client_qr_image && React.createElement(
							'div',
							{ className: 'qr' },
							React.createElement(
								'div',
								{ style: { fontSize: 20, margin: 10 } },
								'\u624B\u673A\u5BA2\u6237\u7AEF'
							),
							React.createElement('img', { className: 'qr-image', src: this.state.base.client_qr_image }),
							React.createElement(
								'span',
								null,
								'\u626B\u4E00\u626B\u7ACB\u5373\u4E0B\u8F7D'
							)
						),
						zn.plugin.wechat && React.createElement(
							'div',
							{ className: 'qr' },
							React.createElement(
								'div',
								{ style: { fontSize: 20, margin: 10 } },
								'\u5FAE\u4FE1\u626B\u4E00\u626B'
							),
							React.createElement(QRCode, { value: window.location.origin + window.location.pathname + "#/znpluginwechat.adminuserloginwithqrcode" }),
							React.createElement(
								'span',
								null,
								'\u767B\u5F55/\u6CE8\u518C'
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
						React.createElement(
							'a',
							{ href: 'http://www.youyangit.com' },
							React.createElement('img', { src: './images/youyangit-logo.png' }),
							'\u4E0A\u6D77\u4F51\u6D0B\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8'
						),
						' \u63D0\u4F9B\u6280\u672F\u652F\u6301'
					)
				)
			)
		);
	}
});

_exports.global = true;
module.exports = _exports;