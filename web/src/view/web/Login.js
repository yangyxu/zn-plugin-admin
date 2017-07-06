var React = require('react');
module.exports = React.createClass({
	getInitialState:function(){
		return {
			action: 'login'
		}
	},
	__doSuccess: function (data, xhr){
		var _user = data.result;
		Session.clear().set(_user).jump('/main/znadmin/MyInfo');
	},
	renderForm: function (){
		switch (this.state.action) {
			case 'login':
				return <div>
					<UI.Form
						method="POST"
						layout="stacked"
						action="/znadmin/user/login"
						style={{ margin: 25 }}
						btns={[
							{
								text: '登录',
								type: 'submit',
								float: 'none',
								textAlign: 'center',
								style: { marginTop: 25, fontSize: 16, fontWeight: 600, height: 40, lineHeight: '30px' }
							}
						]}
						onSubmitSuccess={this.__doSuccess}
						onSubmitError={(data)=>Popup.message({content: "登录失败: " + data.result, type: 'warning'})}
						items={[
							{ title: '用户名', placeholder: '用户名', name:'name', type:'Input', required: true, error: '用户名是必填项' },
							{ title: '密码', placeholder: '密码 (不少于6位)', name:'password', type:'Input', attrs: { type: 'password' }, required: true, error: '密码是必填项且不能少于6位' }
						]}  />
					<div><a onClick={()=>this.setState({action: 'forget'})} style={{float:'right', marginRight: 25, color: '#0B72A5', cursor: 'pointer' }}>忘记密码?</a></div>
				</div>;
			case 'forget':
				return <div>
					<UI.Form
						method="POST"
						layout="stacked"
						style={{ margin: 25 }}
						btns={[
							{
								text: '提交',
								type: 'submit',
								float: 'none',
								textAlign: 'center',
								style: { marginTop: 25, fontSize: 16, fontWeight: 600, height: 40, lineHeight: '30px' }
							}
						]}
						onSubmitSuccess={this.__doSuccess}
						onSubmitError={(data)=>Popup.message({content: "注册失败: " + data.result, type: 'warning'})}
						items={[
							{ title: '邮箱', placeholder: '邮箱 (注册使用邮箱)', name:'email', type:'Input', required: true, error: '邮箱是必填项' }
						]}  />
					<div><a onClick={()=>this.setState({action: 'login'})} style={{float:'left', marginLeft: 25, color: '#0B72A5', cursor: 'pointer'}}>{'<<登录'}</a></div>
				</div>;
		}
	},
	render:function(){
		return (
			<div className="v-login admin">
				<img className="bg-img" src="./images/bg/4.jpg" />
				<div className="main animated slideInDown">

					<div className="head">上海腾麟数据管理中心</div>
					<div className="logo"><img className="logo-img" src="./images/logo.jpg" /></div>
					<div className="form">
						{this.renderForm()}
					</div>
					<div className="foot">上海腾麟文化传媒有限公司 @2016</div>
				</div>
			</div>
		);
	}
});
