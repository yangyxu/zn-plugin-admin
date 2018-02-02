var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		var _id = this.props.userId || this.props.request.search.userId,
			_isSelf = false;
		if(!_id){
			_id = zn.react.session.json().id;
			_isSelf = true;
		}
		return {
			userId: _id,
			isSelf: _isSelf,
			info: null,
			formItems: [
				{ title: '头像', name: 'avatar_img', type: 'ImageUploader' },
				{ title: '用户名', name: 'name', type: 'Label' },
				{ title: '密码', name: 'password', type: 'Input', attrs: { type: 'password' } },
				{ title: '代理人', type: zn.plugin.admin.UserSelector, mulitable: true, name: 'agents' },
				{ title: '邮箱', name: 'email', type: 'Input' },
				{ title: 'QQ', name: 'qq', type: 'Input' },
				{ title: '微信号', name: 'wechat', type: 'Input' },
				{ title: '手机号', name: 'phone', required: true, type: 'Input' },
				{ title: '地址', name: 'address', type: 'Input' },
				{ title: '备注', name: 'zn_note', type: 'Textarea' }
			],
			data: zn.store.post('/zn.plugin.admin/model/select', { model: 'ZNPluginAdminRole', where: { zn_tree_pid: 0 } })
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
	__itemContentRender: function (props){
		var _icon = '';
		if(props.data.type==1){
			_icon = 'fa-sitemap';
		}
		if(props.data.type==2){
			_icon = 'fa-graduation-cap';
		}
		return <span><i style={{margin:5}} className={'fa ' + _icon} />{props.data.zn_title}</span>;
	},
	__update: function (){
		zn.dialog({
			title: '修改信息',
			content: <zn.react.Form
				merge="updates"
				action='/zn.plugin.admin/model/update'
				exts={{ model: 'ZNPluginAdminUser', where: { id: this.state.userId } }}
				value={zn.store.post('/zn.plugin.admin/model/selectOne', { model: 'ZNPluginAdminUser', where: {id: this.state.userId } })}
				onSubmitSuccess={this.__loadUserInfo}
				items={this.state.formItems} />
		});
	},
	render:function(){
		if(!this.state.info){
			return <zn.react.DataLoader content="正在加载中..." loader="timer" />;
		}
		console.log(zn.plugin.wechat.ZNPluginAdminUserWechatInfo);
		return (
			<zn.react.Page title={this.state.info.name} icon="fa-newspaper-o" toolbarItems={this.state.toolbarItems} >
				<div className="zn-plugin-admin-user-info">
					<div className="info-form user-item">
						<img className="avatar" src={zn.http.fixURL(this.state.info.avatar_img)||'./images/DefaultAvatar.png'} />
						<div className="details">
							{this.state.isSelf && <span onClick={this.__update} className="last-logintime"><i className="fa fa-edit zr-padding-3" />修改信息</span>}
							<div className="name">{this.state.info.name}</div>
							<div className="item"><i className="fa fa-phone" />电话：{this.state.info.phone}</div>
							<div className="item"><i className="fa fa-qq" />QQ号：{this.state.info.qq}</div>
							<div className="item"><i className="fa fa-weixin" />微信号：{this.state.info.wechat}</div>
							<div className="item"><i className="fa fa-envelope" />邮箱：{this.state.info.email}</div>
							{this.state.isSelf && <div className="item"><i className="fa fa-users" />代理人：{this.state.info.agents_convert}</div>}
							{this.state.info.zn_note && <div className="item">{this.state.info.zn_note}</div>}
						</div>
					</div>
					{
						(zn.plugin.wechat.ZNPluginAdminUserWechatInfo) && <zn.react.Card  className="wechat-info" title="已绑定微信">
							<zn.plugin.wechat.ZNPluginAdminUserWechatInfo openid={this.state.info.zn_plugin_wechat_open_id} />
						</zn.react.Card>
					}
					<zn.react.Card title="部门及角色">
						<zn.plugin.admin.RoleSelector disabled={true} value={this.state.info.role_ids} />
					</zn.react.Card>
				</div>
			</zn.react.Page>
		);
	}
});
