var React = require('react');

var API = React.createClass({
	getInitialState: function (){
		return {
			data: null
		};
	},
	__renderArgvForm: function (){
		if(this.props.method){
			var _items = [],
				_argv = this.props.argv || {};
			for(var key in _argv){
				_items.push({
					title: key,
					name: key,
					type: 'Input',
					required: true,
					value: _argv[key]
				});
			}

			if(_items.length){
				return <zn.react.Group title="请求参数" >
					<zn.react.Form items={_items} buttons={[
						{ text: '发送请求', type: 'submit', status: 'primary' }
					]} onSubmitBefore={this.__onFormSubmitBefore} />
				</zn.react.Group>;
			}else {
				return <zn.react.Button onClick={()=>this.__submit()} float="right" text="发送请求" />;
			}
		}else {
			return null;
		}
	},
	__renderData: function (){
		if(this.state.data){
			return <zn.react.Group title="返回结果" >
				<code style={{ padding: 5 }}>{JSON.stringify(this.state.data)}</code>
			</zn.react.Group>;
		}else {
			return null;
		}
	},
	__onFormSubmitBefore: function (data){
		return this.__submit(data), false;
	},
	__submit: function (data){
		zn.confirm('对【' + this.props.router + '】发起请求？', '提示', function () {
			var _method = this.props.method.toLowerCase()=='get'?'get':'post';
			zn.preloader.open({ content:'正在请求中...' });
			zn.http[_method](this.props.router, data || {})
				.then(function (data){
					if(data.status==200){
						this.setState({data: data});
					}else {
						zn.notification.error(data.result);
					}
					zn.preloader.close();
				}.bind(this), function (){
					zn.notification.error('提交失败');
					zn.preloader.close();
				});
		}.bind(this));
	},
	render: function (){
		return (
			<li className="api">
				<div className="info">
					<div className="i-header">
						{this.props.method && <span className="method">{this.props.method}</span>}
						<span>{this.props.router}</span>
						<i data-tooltip="复制链接" onClick={()=>zn.react.copyToClipboard(this.props.router)} className="fa fa-clipboard zr-padding-3" />
					</div>
					<div className="i-body">
						{this.__renderArgvForm()}
						{this.__renderData()}
					</div>
				</div>
			</li>
		);
	}
});

module.exports = React.createClass({
	getInitialState: function (){
		return {
			apps: [],
			apis: [],
			app: null,
			toolbarItems: [
				{ text: '更新代码', name: 'update.code', icon: 'fa-cloud-download', style: { marginRight: 5 } },
				{ text: '重启', name: 'restart', status: 'danger', icon: 'fa-play-circle', style: { marginRight: 5 } }
			]
		};
	},
	componentDidMount: function (){
		this.__loadApps();
	},
	__loadApps: function (){
		zn.http.get('/$/apps')
			.then(function (data){
				if(data.status==200){
					this.setState({
						apps: data.result
					});
				}else {
					zn.notification.error(data.result);
				}
			}.bind(this));
	},
	__onAppClick: function (app){
		zn.preloader.open({ content:'正在加载中...' });
		zn.http.get('/'+app+'/apis')
			.then(function (data){
				if(data.status==200){
					this.setState({
						app: app,
						apis: data.result
					});
				}else {
					zn.notification.error(data.result);
				}
				zn.preloader.close();
			}.bind(this), function (){
				zn.notification.error('服务器请求失败');
				zn.preloader.close();
			});
	},
	__renderApps: function (){
		return <ul className="apps">
			{
				this.state.apps.map(function (app, index){
					return <li key={index} className={"app " + (this.state.app == app ? 'curr': '')} onClick={()=>this.__onAppClick(app)}>
						<a>{app}</a>
					</li>;
				}.bind(this))
			}
		</ul>;
	},
	__renderApis: function (){
		return <ul className="apis">
			{
				this.state.apis.map(function (api, index){
					return <API key={index} {...api} />;
				}.bind(this))
			}
		</ul>;
	},
	__onToolbarClick: function (item){
		switch (item.name) {
			case 'update.code':
				zn.confirm('更新后台服务代码？', '提示', function () {
					zn.preloader.open({ content:'正在更新中...' });
					zn.http.get('/$/pull')
						.then(function (data){
							if(data.status==200){
								zn.notification.success('更新完成');
							}else {
								zn.notification.error(data.result);
							}
							zn.preloader.close();
						}.bind(this), function (){
							zn.notification.error('更新失败');
							zn.preloader.close();
						});
				}.bind(this));
				break;
			case 'restart':
				zn.confirm('重启后台服务？', '提示', function () {
					zn.preloader.open({ content:'正在请求中...' });
					zn.http.get('/$/redeploy')
						.then(function (data){
							if(data.status==200){
								zn.notification.success('重启完成');
							}else {
								zn.notification.error(data.result);
							}
							zn.preloader.close();
						}.bind(this), function (){
							zn.notification.error('重启失败');
							zn.preloader.close();
						});
				}.bind(this));
				break;
		}
	},
	render:function(){
		return (
			<zn.react.Page className="zn-plugin-admin-devtool-server-manager" title="服务器管理" toolbarItems={this.state.toolbarItems} onToolbarClick={this.__onToolbarClick} >
				<div className="zr-flex-layout zn-plugin-admin-master-slave-flex-layout row">
					<div className="layout-header" style={{minWidth: 200}}>
						{this.__renderApps()}
					</div>
					<div className="layout-body">
						{this.__renderApis()}
					</div>
				</div>
			</zn.react.Page>
		);
	}
});
