var React = require('react');
var QRCode = require('qrcode.react');
var exports = React.createClass({
	getInitialState: function (){
		return {
			base: null,
			user: null
		};
	},
	componentDidMount: function (){
		this.__loadBaseSetting();
		this.__emailActive();
	},
	__emailActive: function (){
		var _znid = this.props.request.search.znid;
		if(!_znid){
			return zn.notification.error('无效的激活链接');
		}
		zn.http.post("/zn.plugin.admin/user/emailActive", {
			znid: _znid,
			url: encodeURIComponent(window.location.origin + window.location.pathname)
		}).then(function (data){
			if(data.status == 200){
				this.setState({user: data.result})
			}else {
				zn.notification.error(data.result);
			}
		}.bind(this), function (err){
			zn.notification.error('网络请求失败');
		});
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
			zn.notification.error('获取基础信息失败');
		});
	},
	render:function(){
		if(!this.state.base){
			return <zn.react.DataLoader content="正在加载基础信息..." loader="timer" />;
		}
		return (
			<div className="zn-plugin-admin-user-active">
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
					<div className="warp" style={{width: 640, backgroundColor: '#FFF', padding: 20}}>
					{
						this.state.user ? <div style={{display:'flex', flexDirection: 'column', width: '100%'}}>
							<div style={{padding: 10}}>hi {this.state.user.name}</div>
							{
								this.state.user.actived ? <div style={{padding: 10}}>
									您账号已经激活, 请勿重复操作。
								</div> : <div style={{padding: 10}}>
									恭喜您, 您的账号成功激活，系统已把登录信息发送到您激活邮箱({this.state.user.email})。
								</div>
							}
							<zn.react.Button onClick={()=>zn.react.session.jump('/zn.plugin.admin/login')} style={{margin: 10}} text="点击登录" />
						</div> : <div>
							<zn.react.DataLoader content="验证中..." loader="timer" />
						</div>
					}
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
