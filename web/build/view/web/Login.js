var React = require('react');
module.exports = React.createClass({
	displayName: 'exports',

	getInitialState: function getInitialState() {
		return {
			action: 'login'
		};
	},
	__doSuccess: function __doSuccess(data, xhr) {
		var _user = data.result;
		Session.clear().set(_user).jump('/main/znadmin/MyInfo');
	},
	renderForm: function renderForm() {
		var _this = this;

		switch (this.state.action) {
			case 'login':
				return React.createElement(
					'div',
					null,
					React.createElement(UI.Form, {
						method: 'POST',
						layout: 'stacked',
						action: '/znadmin/user/login',
						style: { margin: 25 },
						btns: [{
							text: '登录',
							type: 'submit',
							float: 'none',
							textAlign: 'center',
							style: { marginTop: 25, fontSize: 16, fontWeight: 600, height: 40, lineHeight: '30px' }
						}],
						onSubmitSuccess: this.__doSuccess,
						onSubmitError: function onSubmitError(data) {
							return Popup.message({ content: "登录失败: " + data.result, type: 'warning' });
						},
						items: [{ title: '用户名', placeholder: '用户名', name: 'name', type: 'Input', required: true, error: '用户名是必填项' }, { title: '密码', placeholder: '密码 (不少于6位)', name: 'password', type: 'Input', attrs: { type: 'password' }, required: true, error: '密码是必填项且不能少于6位' }] }),
					React.createElement(
						'div',
						null,
						React.createElement(
							'a',
							{ onClick: function onClick() {
									return _this.setState({ action: 'forget' });
								}, style: { float: 'right', marginRight: 25, color: '#0B72A5', cursor: 'pointer' } },
							'\u5FD8\u8BB0\u5BC6\u7801?'
						)
					)
				);
			case 'forget':
				return React.createElement(
					'div',
					null,
					React.createElement(UI.Form, {
						method: 'POST',
						layout: 'stacked',
						style: { margin: 25 },
						btns: [{
							text: '提交',
							type: 'submit',
							float: 'none',
							textAlign: 'center',
							style: { marginTop: 25, fontSize: 16, fontWeight: 600, height: 40, lineHeight: '30px' }
						}],
						onSubmitSuccess: this.__doSuccess,
						onSubmitError: function onSubmitError(data) {
							return Popup.message({ content: "注册失败: " + data.result, type: 'warning' });
						},
						items: [{ title: '邮箱', placeholder: '邮箱 (注册使用邮箱)', name: 'email', type: 'Input', required: true, error: '邮箱是必填项' }] }),
					React.createElement(
						'div',
						null,
						React.createElement(
							'a',
							{ onClick: function onClick() {
									return _this.setState({ action: 'login' });
								}, style: { float: 'left', marginLeft: 25, color: '#0B72A5', cursor: 'pointer' } },
							'<<登录'
						)
					)
				);
		}
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'v-login admin' },
			React.createElement('img', { className: 'bg-img', src: './images/bg/4.jpg' }),
			React.createElement(
				'div',
				{ className: 'main animated slideInDown' },
				React.createElement(
					'div',
					{ className: 'head' },
					'\u4E0A\u6D77\u817E\u9E9F\u6570\u636E\u7BA1\u7406\u4E2D\u5FC3'
				),
				React.createElement(
					'div',
					{ className: 'logo' },
					React.createElement('img', { className: 'logo-img', src: './images/logo.jpg' })
				),
				React.createElement(
					'div',
					{ className: 'form' },
					this.renderForm()
				),
				React.createElement(
					'div',
					{ className: 'foot' },
					'\u4E0A\u6D77\u817E\u9E9F\u6587\u5316\u4F20\u5A92\u6709\u9650\u516C\u53F8 @2016'
				)
			)
		);
	}
});