var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		if(!zn.react.session.json()){
			zn.react.session.doLogin();
		}
		return {
			userId: zn.react.session.json().id,
			info: null,
		}
	},
	componentDidMount: function (){
		this.__loadUserInfo();
	},
	__loadUserInfo: function (){
		zn.http.post('/zn.plugin.admin/user/findUserById', {
			userId: this.state.userId
		}).then(function (data){
			this.setState({
				info: data.result
			});
		}.bind(this));
	},
	render:function(){
		if(!this.state.info){
			return <zn.react.DataLoader content="正在加载中..." loader="timer" />;
		}
		return (
			<div className="zn-plugin-admin-my-dashboard" >
				<div>
					<span>我的工作台</span>
				</div>
				<div>

				</div>
			</div>
		);
	}
});
