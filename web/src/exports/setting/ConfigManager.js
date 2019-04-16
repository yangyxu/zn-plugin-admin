require('./ConfigManager.less');
var React = require('react');
var Config = React.createClass({
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
	__onRemove: function (){
		zn.confirm('确定删除该参数？', '提示', function () {
			zn.preloader.open({ content:'正在删除中...' });
			zn.http.post('/zn.plugin.admin/config/deleteById', {id: this.props.id})
				.then(function (data){
					if(data.status==200){
						zn.notification.success('删除完成');
						this.props.onRemoveSuccess && this.props.onRemoveSuccess();
					}else {
						zn.notification.error(data.result);
					}
					zn.preloader.close();
				}.bind(this), function (){
					zn.notification.error('重启失败');
					zn.preloader.close();
				});
		}.bind(this));
	},
	__onEdit: function (){

	},
	__onSave: function (){
		zn.confirm('确定保存改参数值？', '提示', function () {
			zn.preloader.open({ content:'正在保存中...' });
			zn.http.post('/zn.plugin.admin/config/deleteById', {id: this.props.id})
				.then(function (data){
					if(data.status==200){
						zn.notification.success('保存完成');
						this.props.onRemoveSuccess && this.props.onRemoveSuccess();
					}else {
						zn.notification.error(data.result);
					}
					zn.preloader.close();
				}.bind(this), function (){
					zn.notification.error('保存失败');
					zn.preloader.close();
				});
		}.bind(this));
	},
	render: function (){
		var _Input = zn.react[this.props.input_type];
		return (
			<li className="api">
				<div className="info">
					<div className="i-header">
						<div className="head-left">
							{this.props.input_type && <span className="method">{this.props.input_type}</span>}
							<span>{this.props._key}</span>
							<i data-tooltip="复制链接" onClick={()=>zn.react.copyToClipboard(this.props._key)} className="fa fa-clipboard zr-padding-3" />
						</div>
						<div className="head-right">
							<span onClick={this.__onSave} className="method"><i className="fa fa-save zr-padding-3" />保存</span>
							<span onClick={this.__onEdit} className="method"><i className="fa fa-edit zr-padding-3" />编辑</span>
							<i onClick={this.__onRemove} className="fa fa-remove zr-padding-3" />
						</div>
					</div>
					<div className="i-body">
						<zn.react.FormItem type={_Input} title={this.props._title} value={this.props._value} />
					</div>
				</div>
			</li>
		);
	}
});

module.exports = React.createClass({
	getInitialState: function (){
		return {
			configKeys: [],
			key: null,
			configs: [],
			toolbarItems: [
				{ text: '配置查询', name: 'config.list', icon: 'fa-list', style: { marginRight: 5 } },
				{ text: '添加', name: 'config.add', icon: 'fa-plus', style: { marginRight: 5 } },
				{ text: '删除', name: 'config.delete', status: 'danger', icon: 'fa-trash', style: { marginRight: 5 } }
			]
		};
	},
	componentDidMount: function (){
		this.__loadConfigKeys();
	},
	__loadConfigKeys: function (){
		zn.http.get('/zn.plugin.admin/config/get_ids')
			.then(function (data){
				if(data.status==200){
					this.setState({
						configKeys: data.result
					});
				}else {
					zn.notification.error(data.result);
				}
			}.bind(this));
	},
	__onAppClick: function (key){
		key = key || this.state.key;
		zn.preloader.open({ content:'正在加载中...' });
		zn.http.get("/zn.plugin.admin/config/selectBy_id", { _id: key.value })
			.then(function (data){
				if(data.status==200){
					this.setState({
						key: key,
						configs: data.result
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
	__renderConfigKey: function (){
		return <ul className="apps">
			{
				this.state.configKeys.map(function (key, index){
					return <li key={index} className={"app " + (this.state.key == key ? 'curr': '')} onClick={()=>this.__onAppClick(key)}>
						<a>{key.text}</a>
					</li>;
				}.bind(this))
			}
		</ul>;
	},
	__addArgument: function (){
		zn.dialog({
			title: '添加参数',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				merge='values'
				exts={{ model: 'ZNPluginAdminConfig' }}
				hiddens={{ _id: this.state.key.value }}
				onSubmitSuccess={()=>this.__onAppClick()}
				items={[
					{ title: '_title', name: '_title', type: 'Input' },
					{ title: '_key', name: '_key', type: 'Input' },
					{ title: '_value', name: '_value', type: 'Input' },
					{ title: 'ref_id', name: 'ref_id', type: 'Input' },
					{ title: 'var_id', name: 'var_id', type: 'Input' },
					{ title: 'InputType', name: 'input_type', type: 'Menu', data: ['Input', 'ImageUploader', 'FileUploader', 'Textarea', 'RichEditor'] },
					{ title: 'DataType', name: 'data_type', type: 'Input' },
					{ title: 'RichValue', name: '_rich_value', type: 'Textarea' }
				]} />
		});
	},
	__renderConfigs: function (){
		return <div>
			{this.state.key && <div style={{padding: 5}}><zn.react.Button onClick={this.__addArgument} text="添加参数" icon="fa-plus" /></div>}
			<ul className="apis">
				{
					Object.keys(this.state.configs).map(function (key, index){
						return <Config key={index} {...this.state.configs[key]} onRemoveSuccess={()=>this.__onAppClick(this.state.key)} />;
					}.bind(this))
				}
			</ul>
		</div>;
	},
	__onToolbarClick: function (item){
		switch (item.name) {
			case 'config.list':
				zn.react.session.relativeJump('/znpluginadmin.setting.config');
				break;
			case 'config.add':
				zn.dialog({
					title: '新增配置',
					content: <zn.react.Form
						action='/zn.plugin.admin/model/insert'
						merge='values'
						exts={{ model: 'ZNPluginAdminConfig' }}
						onSubmitSuccess={()=>this.__loadConfigKeys()}
						items={[
							{ title: '_id', name: '_id', type: 'AutoComplete', data: zn.store.get('/zn.plugin.admin/config/get_ids'), required: true, error: '_id必填' },
							{ title: '_title', name: '_title', type: 'Input' },
							{ title: '_key', name: '_key', type: 'Input' },
							{ title: '_value', name: '_value', type: 'Input' },
							{ title: 'ref_id', name: 'ref_id', type: 'Input' },
							{ title: 'var_id', name: 'var_id', type: 'Input' },
							{ title: 'InputType', name: 'input_type', type: 'Menu', data: ['Input', 'ImageUploader', 'FileUploader', 'Textarea', 'RichEditor'] },
							{ title: 'DataType', name: 'data_type', type: 'Input' },
							{ title: 'RichValue', name: '_rich_value', type: 'Textarea' }
						]} />
				});
				break;
			case 'config.delete':
				zn.confirm('确定删除该配置么？', '提示', function () {
					zn.preloader.open({ content:'正在请求中...' });
					zn.http.post('/zn.plugin.admin/config/deleteBy_id', { _id: this.state.key._id })
						.then(function (data){
							if(data.status==200){
								zn.notification.success('删除完成');
								this.setState({ configs: {} });
								this.__loadConfigKeys();
							}else {
								zn.notification.error(data.result);
							}
							zn.preloader.close();
						}.bind(this), function (){
							zn.notification.error('删除失败');
							zn.preloader.close();
						});
				}.bind(this));
				break;
		}
	},
	render:function(){
		return (
			<zn.react.Page className="zn-plugin-admin-setting-config-manager" title="配置管理" toolbarItems={this.state.toolbarItems} onToolbarClick={this.__onToolbarClick} >
				<div className="zr-flex-layout zn-plugin-admin-master-slave-flex-layout row">
					<div className="layout-header" style={{minWidth: 200}}>
						{this.__renderConfigKey()}
					</div>
					<div className="layout-body">
						{this.__renderConfigs()}
					</div>
				</div>
			</zn.react.Page>
		);
	}
});
