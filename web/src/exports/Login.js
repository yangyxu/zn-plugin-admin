var React = require('react');
var QRCode = require('qrcode.react');
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
				var _base = data.result;
				var _base = data.result;
				if(_base.main_background_image.indexOf('/')==0){
					_base.company_logo = zn.http.fixURL(_base.company_logo);
					_base.login_background_image = zn.http.fixURL(_base.login_background_image);
					_base.main_background_image = zn.http.fixURL(_base.main_background_image);
				}
				window.document.title = _base.company_title;
				this.setState({
					base: _base
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
			zn.notification.error('获取基础信息失败： ' + err.message);
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
				zn.notification.error('登录失败： ' + data.result);
			}
		}, function (err){
			zn.notification.error('登录失败： ' + err.message);
		});
	},
	render:function(){
		if(!this.state.base){
			return <zn.react.DataLoader content="正在加载基础信息..." loader="timer" />;
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
				<div className="section-body zr-scroll-webkit">
					<div className="warp" style={{width: 640}}>
						<div className="intro">
							{
								this.state.base.client_qr_image && <div className="qr">
									<div style={{fontSize:20,margin: 10}}>手机客户端</div>
									<img className="qr-image" src={this.state.base.client_qr_image} />
									<span>扫一扫立即下载</span>
								</div>
							}
							{
								zn.plugin.wechat && <div className="qr">
									<div style={{fontSize:20,margin: 10}}>微信扫一扫</div>
									<QRCode value={window.location.origin + window.location.pathname + "#/znpluginwechat.adminuserloginwithqrcode"} />
									<span>登录/注册</span>
								</div>
							}
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
						<div className="TM"><a href="http://www.youyangit.com"><img src="./images/youyangit-logo.png" />上海佑洋信息科技有限公司</a> 提供技术支持</div>
					</div>
				</div>
			</div>
		);
	}
});

exports.global = true;
module.exports = exports;
