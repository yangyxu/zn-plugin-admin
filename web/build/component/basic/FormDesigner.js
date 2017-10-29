var React = require('react');
module.exports = React.createClass({
	displayName: 'exports',

	getInitialState: function getInitialState() {
		return {
			primaryTable: null,
			primaryFormItems: [{ title: '名称', type: 'Input', name: 'zn_title' }, { title: '表名', type: 'Input', name: 'table_name' }, {
				title: '继承模型',
				type: 'CheckboxGroup',
				name: 'mixins',
				data: [{ text: '基础模型', value: 'zn.db.common.model.Base' }, { text: '树模型', value: 'zn.db.common.model.Tree' }, { text: '权限模型', value: 'zn.db.common.model.Rights' }]
			}, { title: '说明', type: 'Textarea', name: 'zn_note' }],
			tableFieldFormItems: [{ title: '字段类型', type: 'Input', name: 'field_type' }, { title: '字段函数', type: 'Input', name: 'field_convert' }, { title: '字段默认值', type: 'Input', name: 'field_default' },
			//{ title: '字段描述', type: 'Textarea', name: 'field_detail' },
			{ title: '表单名称(title)', type: 'Input', name: 'title' }, { title: '表单名(name)', type: 'Input', name: 'name' }, {
				title: '表单类型',
				type: 'Menu',
				name: 'type',
				data: ['Input', 'Select', 'Label', 'ImageUploader', 'FileUploader', 'Checkbox', 'CheckboxGroup', 'Radio', 'RadioGroup', 'Textarea', 'Richarea']
			}, { title: '资源ID(var_id)', type: 'Input', attrs: { type: 'number' }, name: 'var_id' }, { title: '宽度(width)', type: 'Input', attrs: { type: 'number' }, name: 'width' }, { title: '数据源(data)', type: 'Textarea', name: 'data' }, { title: '属性(props)', type: 'Textarea', name: 'props' }, { title: '说明', type: 'Textarea', name: 'zn_note' }],
			deputyTables: []
		};
	},
	componentDidMount: function componentDidMount() {
		this.__loadInfo(this.props.menuId);
	},
	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		if (prevProps.menuId != this.props.menuId) {
			this.__loadInfo(this.props.menuId);
		}
	},
	__parseData: function __parseData(data) {
		var _tables = data[0],
		    _fields = data[1],
		    _table_fields = {};
		this.state.primaryTable = null;
		this.state.deputyTables = [];
		_fields.forEach(function (field) {
			if (!_table_fields[field.table_id]) {
				_table_fields[field.table_id] = [];
			}
			_table_fields[field.table_id].push(field);
		});
		_tables.forEach(function (table) {
			table.fields = _table_fields[table.id] || [];
			if (table.parent_id) {
				this.state.deputyTables.push(table);
			} else {
				this.state.primaryTable = table;
			}
		}.bind(this));
		this.forceUpdate();
	},
	__loadInfo: function __loadInfo(menuId) {
		zn.http.post('/zn.plugin.admin/menu/getMenuForm', { menuId: menuId || this.props.menuId }).then(function (data) {
			if (data.status == 200) {
				this.__parseData(data.result);
			} else {
				zn.notification.error(data.result);
			}
		}.bind(this), function () {
			zn.notification.error('服务器错误：');
		});
	},
	__createTable: function __createTable(parent_id) {
		var _this = this;

		zn.dialog({
			title: '创建表',
			content: React.createElement(zn.react.Form, {
				merge: 'values',
				action: '/zn.plugin.admin/model/insert',
				exts: { model: 'ZNPluginAdminMenuTable' },
				hiddens: { menu_id: this.props.menuId, parent_id: parent_id || 0 },
				onSubmitSuccess: function onSubmitSuccess() {
					return _this.__loadInfo();
				},
				items: this.state.primaryFormItems })
		});
	},
	__editTable: function __editTable(table) {
		var _this2 = this;

		zn.dialog({
			title: '修改表信息',
			content: React.createElement(zn.react.Form, {
				merge: 'updates',
				action: '/zn.plugin.admin/model/update',
				exts: { model: 'ZNPluginAdminMenuTable', where: { id: table.id } },
				value: table,
				onSubmitSuccess: function onSubmitSuccess() {
					return _this2.__loadInfo();
				},
				items: this.state.primaryFormItems })
		});
	},
	__createField: function __createField(tableId) {
		var _this3 = this;

		zn.dialog({
			title: '创建字段',
			content: React.createElement(zn.react.Form, {
				merge: 'values',
				action: '/zn.plugin.admin/model/insert',
				exts: { model: 'ZNPluginAdminMenuTableField' },
				hiddens: { table_id: tableId, menu_id: this.props.menuId },
				onSubmitSuccess: function onSubmitSuccess() {
					return _this3.__loadInfo();
				},
				items: this.state.tableFieldFormItems })
		});
	},
	__editField: function __editField(field) {
		var _this4 = this;

		zn.dialog({
			title: '修改字段',
			content: React.createElement(zn.react.Form, {
				merge: 'updates',
				action: '/zn.plugin.admin/model/update',
				exts: { model: 'ZNPluginAdminMenuTableField', where: { id: field.id } },
				value: zn.store.post('/zn.plugin.admin/model/selectOne', { model: 'ZNPluginWorkflowIndexTableField', where: { id: field.id } }),
				onSubmitSuccess: function onSubmitSuccess() {
					return _this4.__loadInfo();
				},
				items: this.state.tableFieldFormItems })
		});
	},
	__deleteField: function __deleteField(field) {
		var _self = this;
		zn.confirm('确定删除该字段吗？', '提示', function () {
			zn.preloader.open({ title: '删除中...' });
			zn.http.post('/zn.plugin.admin/model/delete', {
				model: "ZNPluginAdminMenuTableField",
				where: {
					id: field.id
				}
			}).then(function (data) {
				if (data.status == 200) {
					zn.notification.success('删除成功');
					_self.__loadInfo();
				} else {
					zn.notification.error('删除失败：' + data.result);
				}
				zn.preloader.close();
			}, function () {
				zn.notification.error('服务器调用出错');
				zn.preloader.close();
			});
		}.bind(this));
	},
	__onGenerate: function __onGenerate(table) {
		var _self = this;
		zn.confirm('确定生成表(' + table.table_name + ')结构么？', '提示', function () {
			zn.preloader.open({ title: '生成中...' });
			zn.http.post('/zn.plugin.admin/menu/generateTable', {
				tableId: table.id
			}).then(function (data) {
				if (data.status == 200) {
					zn.notification.success('生成成功');
					_self.__loadInfo();
				} else {
					zn.notification.error('生成失败：' + data.result);
				}
				zn.preloader.close();
			}, function () {
				zn.notification.error('服务器调用出错');
				zn.preloader.close();
			});
		}.bind(this));
	},
	__onRegenerate: function __onRegenerate(table) {
		zn.confirm('重新生成表结构将会抹掉已存在数据, 确认操作？', '警告！！！', function () {
			this.__onGenerate(table);
		}.bind(this));
	},
	__renderTable: function __renderTable(table) {
		var _this5 = this;

		var _isPrimary = !table.parent_id;
		return React.createElement(
			'div',
			{ className: 'table' },
			React.createElement(
				'div',
				{ className: 'table-info' },
				React.createElement(
					'div',
					{ className: '' },
					React.createElement(
						'span',
						{ className: 'name' },
						(table.zn_title ? "【" + table.zn_title + "】" : '') + table.table_name,
						React.createElement('i', { onClick: function onClick() {
								return _this5.__editTable(table);
							}, 'data-tooltip': '\u4FEE\u6539\u8868\u4FE1\u606F', className: 'fa fa-edit' })
					),
					_isPrimary && React.createElement(
						'span',
						{ className: 'zr-tag' },
						'\u4E3B\u8868(Primary Table)'
					)
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'span',
						{ className: 'time' },
						table.zn_create_time
					)
				)
			),
			React.createElement(
				'ul',
				{ className: 'table-fields' },
				table.fields.map(function (field) {
					var _this6 = this;

					return React.createElement(
						'li',
						{ className: 'table-field' },
						React.createElement(
							'span',
							{ className: 'name' },
							'[ ',
							field.type,
							' ] ',
							field.title,
							'(',
							field.name,
							') '
						),
						React.createElement('i', { onClick: function onClick() {
								return _this6.__editField(field);
							}, 'data-tooltip': '\u7F16\u8F91\u5B57\u6BB5', className: 'fa fa-edit' }),
						React.createElement('i', { onClick: function onClick() {
								return _this6.__deleteField(field);
							}, 'data-tooltip': '\u5220\u9664\u5B57\u6BB5', className: 'fa fa-trash-o' })
					);
				}.bind(this))
			),
			React.createElement(
				'div',
				{ className: 'toolbar' },
				React.createElement(
					'div',
					null,
					React.createElement(zn.react.Button, { onClick: function onClick() {
							return _this5.__createField(table.id);
						}, text: '\u6DFB\u52A0\u5B57\u6BB5', className: 'plain' }),
					_isPrimary && React.createElement(zn.react.Button, { onClick: function onClick() {
							return _this5.__createTable(table.id);
						}, text: '\u6DFB\u52A0\u9644\u8868', className: 'plain' })
				),
				React.createElement(
					'div',
					null,
					!!table.has_generated ? React.createElement(
						'span',
						{ onClick: function onClick() {
								return _this5.__onRegenerate(table);
							}, 'data-tooltip': '\u91CD\u65B0\u751F\u6210\u6570\u636E\u8868, \u9700\u6CE8\u610F(\u5DF2\u6709\u6570\u636E\u5C06\u88AB\u62B9\u6389).', className: 'zr-tag hover primary' },
						React.createElement('i', { className: 'fa fa-check zr-padding-3' }),
						'\u5DF2\u751F\u6210'
					) : React.createElement(
						'span',
						{ onClick: function onClick() {
								return _this5.__onGenerate(table);
							}, 'data-tooltip': '\u751F\u6210\u6570\u636E\u8868', className: 'zr-tag hover orangle' },
						React.createElement('i', { className: 'fa fa-ban zr-padding-3' }),
						'\u672A\u751F\u6210'
					)
				)
			)
		);
	},
	__renderDeputyTables: function __renderDeputyTables() {
		var _len = this.state.deputyTables.length;
		return React.createElement(
			'div',
			{ className: 'deputy-tables' },
			React.createElement(
				'div',
				{ className: 'title' },
				React.createElement(
					'span',
					null,
					'\u9644\u8868(',
					_len,
					')'
				)
			),
			this.state.deputyTables.map(function (table) {
				return this.__renderTable(table);
			}.bind(this))
		);
	},
	render: function render() {
		var _this7 = this;

		return React.createElement(
			'div',
			{ className: 'zn-plugin-admin-form-designer' },
			this.state.primaryTable ? this.__renderTable(this.state.primaryTable) : React.createElement(
				'div',
				{ className: 'wf-button', onClick: function onClick() {
						return _this7.__createTable(0);
					} },
				'\u521B\u5EFA\u4E3B\u8868'
			),
			this.__renderDeputyTables()
		);
	}
});