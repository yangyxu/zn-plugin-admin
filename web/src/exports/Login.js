var React = require('react');
var exports = React.createClass({
	getInitialState: function (){
		return {
			base: null
		};
	},
	componentDidMount: function (){
		this.__loadBaseSetting();
	},
	__loadBaseSetting: function (){
		zn.http.post("/zn.plugin.admin/config/selectBy_id", {
			_id: 'zn.plugin.admin.base',
			valueKey: '_value'
		}).then(function (data){
			if(data.status == 200){
				this.setState({
					base: data.result
				});
			}else {
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
		}.bind(this), function (err){
			zn.toast.error('获取基础信息失败： ' + err.message);
		});
	},
	__onLogin: function (event){
		event.preventDefault();
		var _form = event.target.form;
		var _name = _form['name'].value,
			_password = _form['password'].value;
		if(!_name||_name.length<2){
			zn.alert('请输入长度不少于2位的用户名');
			_form['name'].focus();
			return false;
		}
		if(!_password||_password.length<2){
			zn.alert('请输入长度不少于2位的密码');
			_form['password'].focus();
			return false;
		}
		zn.http.post("/zn.plugin.admin/user/login", {
			name: _name,
			password: _password
		}).then(function (data){
			if(data.status == 200){
				zn.react.session.doMain(data.result);
			}else {
				zn.toast.error('登录失败： ' + data.result);
			}
		}, function (err){
			zn.toast.error('登录失败： ' + err.message);
		});
	},
	render:function(){
		if(!this.state.base){
			return <zn.react.DataLoader />;
		}
		return (
			<div className="zn-plugin-admin-login">
				<img className="background-image" src={this.state.base.login_background_image} />
				<div className="section-head">
					<div className="warp">
						<div className="head-left">
							<img className="company-logo" src={this.state.base.company_logo} />
							<div className="company-title">{this.state.base.company_title}</div>
						</div>
						<div className="head-right">
							<ul className="link-nav">
								<li><a href={this.state.base.company_website}>官网</a></li>
								<li>下载</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="section-body rt-scroll-webkit">
					<div className="warp" style={{width: 640}}>
						<div className="intro">
							<div className="qr">
								<div style={{fontSize:20,margin: 10}}>手机客户端</div>
								{this.state.base.client_qr_image && <img className="qr-image" src={this.state.base.client_qr_image} />}
								<span>扫一扫立即下载</span>
							</div>
						</div>
						<div className="form-dialog">
							<form className="form">
								<div className="dialog-title">用户登录</div>
								<div className="form-item">
									<i className="fa fa-user" />
									<input name="name" type="input" placeholder="登录用户名" required={true} />
								</div>
								<div className="form-item">
									<i className="fa fa-lock" />
									<input name="password" type="password" placeholder="密码" required={true} />
								</div>
								<div className="form-tips">
									<label><input type="checkbox" />记住密码</label>
									<label>忘记密码</label>
								</div>
								<button onClick={this.__onLogin} className="btn-login">登 录</button>
							</form>
						</div>
					</div>
				</div>
				<div className="section-foot">
					<div className="warp">
						<div className="TM">{this.state.base.company_tm}</div>
					</div>
				</div>
			</div>
		);
	}
});

exports.global = true;
module.exports = exports;
