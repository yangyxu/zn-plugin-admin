var React = require('react');
module.exports = React.createClass({
	displayName: 'exports',

	getDefaultProps: function getDefaultProps() {
		return {
			model: 'ZNPluginAdminUser'
		};
	},
	getInitialState: function getInitialState() {
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model
			}),
			items: [{ title: '用户名', name: 'name', width: 120, filter: { type: 'Input', opts: ['like'] } }, { title: '邮箱', name: 'email', width: 140, filter: { type: 'Input', opts: ['like'] } }, { title: 'QQ', name: 'qq', width: 120, filter: { type: 'Input', opts: ['like'] } }, { title: '微信号', name: 'wechat', width: 120, filter: { type: 'Input', opts: ['like'] } }, { title: '手机号', name: 'phone', width: 120, filter: { type: 'Input', opts: ['like'] } }, { title: '角色', name: 'role_ids_convert', width: 120 }, { title: '代理人', name: 'agents_convert', width: 120 }, { title: '地址', name: 'address', width: 200, filter: { type: 'Input', opts: ['like'] } }, { title: '说明', name: 'zn_note', filter: { type: 'Input', opts: ['like'] } }],
			formItems: [{ title: '头像', name: 'avatar_img', type: 'ImageUploader' }, { title: '用户名', name: 'name', type: 'Input', required: true, error: '用户名必填项!' }, { title: '邮箱', name: 'email', type: 'Input' }, { title: 'QQ', name: 'qq', type: 'Input' }, { title: '微信号', name: 'wechat', type: 'Input' }, { title: '手机号', name: 'phone', required: true, type: 'Input' }, { title: '地址', name: 'address', type: 'Input' }, { title: '说明', name: 'zn_note', type: 'Textarea' }],
			toolbarItems: [{ text: '添加', name: 'add', icon: 'fa-plus', style: { marginRight: 5 } }, { text: '删除', name: 'remove', status: 'danger', icon: 'fa-remove', style: { marginRight: 5 } }]
		};
	},
	__doSuccess: function __doSuccess() {
		this.state.data.refresh();
	},
	__addItem: function __addItem() {
		zn.dialog({
			title: '新增用户',
			content: React.createElement(zn.react.Form, {
				action: '/zn.plugin.admin/model/insert',
				merge: 'values',
				exts: { model: this.props.model },
				onSubmitSuccess: this.__doSuccess,
				items: this.state.formItems })
		});
	},
	__updateItem: function __updateItem(data) {
		zn.dialog({
			title: '更新用户信息',
			content: React.createElement(zn.react.Form, {
				merge: 'updates',
				action: '/zn.plugin.admin/model/update',
				exts: { model: this.props.model, where: { id: data.id } },
				value: zn.store.post('/zn.plugin.admin/model/selectOne', { model: this.props.model, where: { id: data.id } }),
				onSubmitSuccess: this.__doSuccess,
				items: this.state.formItems })
		});
	},
	__removeItems: function __removeItems() {
		var _self = this,
		    _values = this.refs.table.getValue();
		if (_values && _values.length) {
			zn.confirm('确认删除这' + _values.length + '个用户吗？', '提示', function () {
				zn.http.post('/zn.plugin.admin/model/delete', {
					model: this.props.model,
					where: "id in (" + _values.join(',') + ")"
				}).then(function () {
					zn.toast.success('删除成功');
					_self.state.data.refresh();
				}, function (data) {
					zn.toast.error('删除失败: ' + data.result);
				});
			}.bind(this));
		} else {
			zn.toast.warning('请先选择要删除的用户');
		}
	},
	__onToolbarClick: function __onToolbarClick(item) {
		switch (item.name) {
			case 'add':
				this.__addItem();
				break;
			case 'remove':
				this.__removeItems();
				break;
		}
	},
	__onTableColumnRender: function __onTableColumnRender(rowIndex, columnIndex, data, item, value) {
		var _this = this;

		switch (columnIndex) {
			case 1:
				return React.createElement(
					'div',
					{ style: { display: 'flex', alignItems: 'center' } },
					React.createElement('i', { onClick: function onClick() {
							return _this.__updateItem(data);
						}, className: 'fa fa-edit zr-padding-3' }),
					data.avatar_img && React.createElement('img', { className: 'avatar', style: { width: 16, height: 16, margin: 5, borderRadius: 16 }, src: data.avatar_img }),
					React.createElement(
						'a',
						{ href: '#' + zn.react.session.fixPath('/znpluginadmin.user.infoedit') + '?userId=' + data.id },
						value
					)
				);
		}
	},
	render: function render() {
		return React.createElement(
			zn.react.Page,
			{ title: '\u7CFB\u7EDF\u8D26\u6237\u7BA1\u7406', toolbarItems: this.state.toolbarItems, onToolbarClick: this.__onToolbarClick },
			React.createElement(zn.react.PagerView, {
				ref: 'table',
				view: 'Table',
				enableFilter: true,
				checkbox: 50,
				showHeader: true,
				columnRender: this.__onTableColumnRender,
				data: this.state.data,
				items: this.state.items })
		);
	}
});