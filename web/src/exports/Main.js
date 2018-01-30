var React = require('react');
var NavigationBar = require('../component/basic/NavigationBar');
var UserSessionInfo = require('../component/basic/UserSessionInfo');
var _exports = React.createClass({
	getInitialState:function(){
		return {
			menus: [],
			base: null
		};
	},
	componentDidMount: function (){
		this.__loadBaseSetting();
		this.__loadUserRights();
	},
	__loadBaseSetting: function (){
		zn.http.post("/zn.plugin.admin/config/selectBy_id", {
			_id: 'zn.plugin.admin.base',
			valueKey: '_value'
		}).then(function (data){
			if(data.status == 200){
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
			zn.toast.error('获取基础信息失败： ' + err.message);
		});
	},
	__loadUserRights: function (){
		zn.http.get('/zn.plugin.admin/user/getUserRightsMenus').then(function (data){
			if(data.status == 200){
				this.setState({
					menus: data.result
				});
			}else {
				zn.notification.error('Session失效请重新登录, 谢谢！');
				zn.react.session.doHome();
			}
		}.bind(this));
	},
	__onSessionClick: function (){
		zn.modal.open(<UserSessionInfo />, {
			modalStyle: {overflow:'hidden'},
			className: 'modal-right',
			isMode: true,
			removeSelf: false
		});
	},
	__onSignOut: function (){
		zn.confirm('确定要退出系统？', '提示', function (){
			zn.http.post('/zn.plugin.admin/user/logout').then(function (){
				zn.react.session.doHome();
			});
		});
	},
	__onMenuClick: function (){
		zn.modal.open(<NavigationBar onMenuItemClick={()=>zn.modal.close()} style={{backgroundColor: '#000', overflow:'auto'}} data={this.state.menus} />, {
			modalStyle: {overflow:'auto'},
			className: 'modal-left',
			isMode: true,
			removeSelf: false
		});
	},
	__onCompanyClick: function (){
		zn.react.session.relativeJump('/znpluginadmin.my.dashboard');
	},
	__onUserClick: function (user){
		zn.preloader.open({content:'账号切换中...'});
		zn.http.post("/zn.plugin.admin/user/exchange", {
			uid: user.value
		}).then(function (data){
			if(data.status == 200){
				zn.react.session.doMain(data.result);
				window.location.reload();
			}else {
				zn.notification.error('登录失败： ' + data.result);
			}
			zn.preloader.close();
		}, function (err){
			zn.notification.error('登录失败： ' + err.message);
			zn.preloader.close();
		});
	},
	__onExchangeAccount: function (){
		zn.dialog({
			title: '账号快速切换',
			content: <zn.plugin.admin.UserSelector
				onUserClick={this.__onUserClick} />
		});
	},
	render:function(){
		if(!zn.react.session.validate()){ return false; }
		if(!this.state.base){
			return <zn.react.DataLoader content="正在加载中..." loader="timer" />;
		}

		return (
			<div className="zn-plugin-admin-main">
				<img className="background-image" src={this.state.base.main_background_image} />
				<div className="section-head">
					<div className="warp">
						<div className="head-left">
							<div className="wap">
								<i onClick={this.__onMenuClick} className="fa fa-bars" />
								<img className="company-logo" title="跳转主页面" onClick={this.__onCompanyClick} src={this.state.base.company_logo} />
							</div>
							<div className="web" title="跳转主页面" onClick={this.__onCompanyClick}>
								<img className="company-logo" src={this.state.base.company_logo} />
								<div className="company-title">{this.state.base.company_title}</div>
							</div>
						</div>
						<div className="head-right">
							<ul className="link-nav">
								{
									/*
									<li><a href={this.state.base.company_website}>官网</a></li>
									<li><a href={this.state.base.company_website}>下载</a></li>
									*/
								}
								{
									zn.DEBUG && <li onClick={this.__onExchangeAccount}><span><i className="fa fa-exchange zr-padding-3" />账号快速切换</span></li>
								}
							</ul>
							<div className="user-session" >
								<figure className="avatar" onClick={()=>zn.react.session.relativeJump('/znpluginadmin.user.info')}>
									<img data-tooltip="查看我的个人信息" src={zn.http.fixURL(zn.react.session.json().avatar_img)||'./images/DefaultAvatar.png'} />
								</figure>
								<span className="name">{zn.react.session.json().name}</span>
								<i className="fa fa-angle-down" onClick={this.__onSessionClick} />
							</div>
							<div className="icons">
								<i onClick={this.__onMessage} className="fa fa-comment-o" title="消息" />
								<i onClick={this.__onSetting} className="fa fa-gear" title="设置" />
								<i onClick={this.__onSignOut} className="sign-out fa fa-sign-out" title="注销" />
							</div>
						</div>
					</div>
				</div>
				<div className="section-body">
					<div className="warp inner-content">
						<div className="navigation-view zr-scroll-webkit">
							<NavigationBar data={this.state.menus} />
						</div>
						<div className="page-view">
							{this.props.view && <this.props.view request={this.props.request} />}
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

_exports.global = true;
module.exports =_exports;
