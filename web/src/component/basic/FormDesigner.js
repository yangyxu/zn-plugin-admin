var React = require('react');
module.exports = React.createClass({
	getInitialState: function () {
		return {
			primaryTable: null,
			primaryFormItems: [
				{ title: '名称', type: 'Input', name: 'zn_title' },
				{ title: '表名', type: 'Input', name: 'table_name' },
				{
					title: '继承模型',
					type: 'CheckboxGroup',
					name: 'mixins',
					data: [
						{ text: '基础模型', value: 'zn.db.common.model.Base' },
						{ text: '树模型', value: 'zn.db.common.model.Tree' },
						{ text: '权限模型', value: 'zn.db.common.model.Rights' }
					]
				},
				{ title: '说明', type: 'Textarea', name: 'zn_note' }
			],
			tableFieldFormItems: [
				{ title: '字段类型', type: 'Input', name: 'field_type' },
				{ title: '字段函数', type: 'Input', name: 'field_convert' },
				{ title: '字段默认值', type: 'Input', name: 'field_default' },
				//{ title: '字段描述', type: 'Textarea', name: 'field_detail' },
				{ title: '表单名称(title)', type: 'Input', name: 'title' },
				{ title: '表单名(name)', type: 'Input', name: 'name' },
				{
					title: '表单类型',
					type: 'Menu',
					name: 'type',
					data: [
						'Input',
						'Select',
						'Label',
						'ImageUploader',
						'FileUploader',
						'Checkbox',
						'CheckboxGroup',
						'Radio',
						'RadioGroup',
						'Textarea',
						'Richarea'
					]
				},
				{ title: '资源ID(var_id)', type: 'Input', attrs: { type: 'number' }, name: 'var_id' },
				{ title: '宽度(width)', type: 'Input', attrs: { type: 'number' }, name: 'width' },
				{ title: '数据源(data)', type: 'Textarea', name: 'data' },
				{ title: '属性(props)', type: 'Textarea', name: 'props' },
				{ title: '说明', type: 'Textarea', name: 'zn_note' }
			],
			deputyTables: []
		};
	},
	componentDidMount: function (){
		this.__loadInfo(this.props.menuId);
	},
	componentDidUpdate: function (prevProps, prevState){
		if(prevProps.menuId!=this.props.menuId){
			this.__loadInfo(this.props.menuId);
		}
	},
	__parseData: function (data){
		var _tables = data[0],
		 	_fields = data[1],
			_table_fields = {};
		this.state.primaryTable = null;
		this.state.deputyTables = [];
		_fields.forEach(function (field){
			if(!_table_fields[field.table_id]){
				_table_fields[field.table_id] = [];
			}
			_table_fields[field.table_id].push(field);
		});
		_tables.forEach(function (table){
			table.fields = _table_fields[table.id] || [];
			if(table.parent_id){
				this.state.deputyTables.push(table);
			}else {
				this.state.primaryTable = table;
			}
		}.bind(this));
		this.forceUpdate();
	},
	__loadInfo: function (menuId){
		zn.http.post('/zn.plugin.admin/menu/getMenuForm', { menuId: menuId || this.props.menuId })
			.then(function (data){
				if(data.status == 200){
					this.__parseData(data.result);
				}else {
					zn.notification.error(data.result);
				}
			}.bind(this), function (){
				zn.notification.error('服务器错误：');
			});
	},
	__createTable: function (parent_id){
		zn.dialog({
			title: '创建表',
			content: <zn.react.Form
				merge="values"
				action="/zn.plugin.admin/model/insert"
				exts={{ model: 'ZNPluginAdminMenuTable' }}
				hiddens={{ menu_id: this.props.menuId, parent_id: parent_id || 0 }}
				onSubmitSuccess={()=>this.__loadInfo()}
				items={this.state.primaryFormItems}/>
		});
	},
	__editTable: function (table){
		zn.dialog({
			title: '修改表信息',
			content: <zn.react.Form
				merge="updates"
				action="/zn.plugin.admin/model/update"
				exts={{ model: 'ZNPluginAdminMenuTable', where: { id: table.id } }}
				value={table}
				onSubmitSuccess={()=>this.__loadInfo()}
				items={this.state.primaryFormItems}/>
		});
	},
	__createField: function (tableId){
		zn.dialog({
			title: '创建字段',
			content: <zn.react.Form
				merge="values"
				action="/zn.plugin.admin/model/insert"
				exts={{ model: 'ZNPluginAdminMenuTableField' }}
				hiddens={{ table_id: tableId, menu_id: this.props.menuId }}
				onSubmitSuccess={()=>this.__loadInfo()}
				items={this.state.tableFieldFormItems}/>
		});
	},
	__editField: function (field){
		zn.dialog({
			title: '修改字段',
			content: <zn.react.Form
				merge="updates"
				action="/zn.plugin.admin/model/update"
				exts={{ model: 'ZNPluginAdminMenuTableField', where: { id: field.id } }}
				value={zn.store.post('/zn.plugin.admin/model/selectOne', { model: 'ZNPluginWorkflowIndexTableField', where: { id: field.id } })}
				onSubmitSuccess={()=>this.__loadInfo()}
				items={this.state.tableFieldFormItems}/>
		});
	},
	__deleteField: function (field){
		var _self = this;
		zn.confirm('确定删除该字段吗？', '提示', function (){
			zn.preloader.open({ title: '删除中...' });
			zn.http.post('/zn.plugin.admin/model/delete', {
				model: "ZNPluginAdminMenuTableField",
				where: {
					id: field.id
				}
			}).then(function (data){
				if(data.status==200){
					zn.notification.success('删除成功');
					_self.__loadInfo();
				}else {
					zn.notification.error('删除失败：' + data.result);
				}
				zn.preloader.close();
			}, function (){
				zn.notification.error('服务器调用出错');
				zn.preloader.close();
			});
		}.bind(this));
	},
	__onGenerate: function (table){
		var _self = this;
		zn.confirm('确定生成表('+table.table_name+')结构么？', '提示', function (){
			zn.preloader.open({ title: '生成中...' });
			zn.http.post('/zn.plugin.admin/menu/generateTable', {
				tableId: table.id
			}).then(function (data){
				if(data.status==200){
					zn.notification.success('生成成功');
					_self.__loadInfo();
				}else {
					zn.notification.error('生成失败：' + data.result);
				}
				zn.preloader.close();
			}, function (){
				zn.notification.error('服务器调用出错');
				zn.preloader.close();
			});
		}.bind(this));
	},
	__onRegenerate: function (table){
		zn.confirm('重新生成表结构将会抹掉已存在数据, 确认操作？', '警告！！！', function (){
			this.__onGenerate(table);
		}.bind(this));
	},
	__renderTable: function (table){
		var _isPrimary = !table.parent_id;
		return (
			<div className="table">
				<div className="table-info">
					<div className="">
						<span className="name">{(table.zn_title?("【" + table.zn_title + "】"):'') + table.table_name}<i onClick={()=>this.__editTable(table)} data-tooltip="修改表信息" className="fa fa-edit" /></span>
						{_isPrimary&&<span className="zr-tag">主表(Primary Table)</span>}
					</div>
					<div>
						<span className="time">{table.zn_create_time}</span>
					</div>
				</div>
				<ul className="table-fields">
					{
						table.fields.map(function (field){
							return <li className="table-field">
								<span className="name">[ {field.type} ] {field.title}({field.name}) </span>
								<i onClick={()=>this.__editField(field)} data-tooltip="编辑字段" className="fa fa-edit" />
								<i onClick={()=>this.__deleteField(field)} data-tooltip="删除字段" className="fa fa-trash-o" />
							</li>;
						}.bind(this))
					}
				</ul>
				<div className="toolbar">
					<div>
						<zn.react.Button onClick={()=>this.__createField(table.id)} text="添加字段" className="plain" />
						{_isPrimary && <zn.react.Button onClick={()=>this.__createTable(table.id)} text="添加附表" className="plain" />}
					</div>
					<div>
						{!!table.has_generated ? <span onClick={()=>this.__onRegenerate(table)} data-tooltip="重新生成数据表, 需注意(已有数据将被抹掉)." className="zr-tag hover primary"><i className="fa fa-check zr-padding-3" />已生成</span> : <span onClick={()=>this.__onGenerate(table)} data-tooltip="生成数据表" className="zr-tag hover orangle"><i className="fa fa-ban zr-padding-3" />未生成</span>}
					</div>
				</div>
			</div>
		);
	},
	__renderDeputyTables: function () {
		var _len = this.state.deputyTables.length;
		return (
			<div className="deputy-tables">
				<div className="title"><span>附表({_len})</span></div>
				{
					this.state.deputyTables.map(function (table){
						return this.__renderTable(table);
					}.bind(this))
				}
			</div>
		);
	},
	render:function(){
		return (
			<div className="zn-plugin-admin-form-designer" >
				{this.state.primaryTable ? this.__renderTable(this.state.primaryTable) : <div className="wf-button" onClick={()=>this.__createTable(0)}>创建主表</div>}
				{this.__renderDeputyTables()}
			</div>
		);
	}
});
