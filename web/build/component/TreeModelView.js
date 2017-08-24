var React = require('react');
var RightsSetting = require('./RightsSetting');
module.exports = React.createClass({
	displayName: 'exports',

	getDefaultProps: function getDefaultProps() {
		return {
			model: 'ZNPluginAdminVar',
			pid: 0
		};
	},
	getInitialState: function getInitialState() {
		var _where = this.props.where;
		if (_where) {
			_where.zn_tree_pid = this.props.pid;
		} else {
			_where = { zn_tree_pid: this.props.pid };
		}
		this._where = _where;
		return {
			data: zn.store.post('/zn.plugin.admin/model/select', {
				model: this.props.model,
				where: _where,
				order: { zn_tree_order: 'asc' }
			}),
			items: this.props.fields || [],
			currItem: null,
			toolbarItems: [{ title: '添加主项', name: 'addMainItem', icon: 'fa-plus-square' }, { title: '添加子项', name: 'addChildItem', icon: 'fa-plus' }, { title: '删除当前项', name: 'deleteCurrItem', icon: 'fa-remove' }, { title: '编辑当前项', name: 'editCurrItem', icon: 'fa-edit' }, { title: '上移当前项', name: 'upCurrItem', icon: 'fa-angle-up' }, { title: '下移当前项', name: 'downCurrItem', icon: 'fa-angle-down' }]
		};
	},
	componentDidMount: function componentDidMount() {
		this.__loadTableHeaders();
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (nextProps.model != this.props.model) {
			this.props.model = nextProps.model;
			this.__loadTableHeaders(function () {
				this.state.data.extend({
					model: nextProps.model
				}).refresh();
			}.bind(this));
		}
	},
	__loadTableHeaders: function __loadTableHeaders(callback) {
		if (!this.state.items.length) {
			zn.store.get('/zn.plugin.admin/model/getModelProps?model=' + this.props.model).then(function (data) {
				this.setState({
					items: data.result
				});
				callback && callback(data);
			}.bind(this));
		}
	},
	__onClick: function __onClick(item, event) {
		this.state.currItem = item;
		this.setState({
			currItem: item
		});
		this.props.onItemClick && this.props.onItemClick(item, event);
	},
	__addItemSuccess: function __addItemSuccess(pid) {
		zn.modal.close();
		zn.toast.success('添加成功！');

		var _treemenu = this.refs.maintreemenu;
		if (pid && this.state.currItem) {
			_treemenu = this.state.currItem.props.parent;
		}
		_treemenu.refresh();
	},
	__editItemSuccess: function __editItemSuccess() {
		zn.modal.close();
		this.state.currItem.props.parent.refresh();
	},
	__editItem: function __editItem() {
		var _this = this;

		if (!this.state.currItem) {
			zn.toast.warning('必须编辑项');
			return;
		}
		zn.dialog({
			title: '编辑',
			content: React.createElement(zn.react.Form, {
				action: '/zn.plugin.admin/model/update',
				exts: { model: this.props.model, where: { id: this.state.currItem.props.data.id } },
				merge: 'updates',
				value: zn.store.post('/zn.plugin.admin/model/selectOne', { model: this.props.model, where: { id: this.state.currItem.props.data.id } }),
				onSubmitBefore: function onSubmitBefore(data, form) {
					_this._data = data;
				},
				onSubmitSuccess: this.__editItemSuccess,
				btns: [{ text: '修改', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight: 0 } }],
				items: this.state.items })
		});
	},
	__addItem: function __addItem(pid) {
		var _this2 = this;

		var _where = {};
		for (var key in this._where) {
			_where[key] = this._where[key];
		}
		_where['zn_tree_pid'] = pid;
		zn.dialog({
			title: '添加项',
			content: React.createElement(zn.react.Form, {
				action: '/zn.plugin.admin/model/insert',
				hiddens: _where,
				exts: { model: this.props.model },
				merge: 'values',
				onSubmitBefore: function onSubmitBefore(data, form) {
					_this2._data = data;
				},
				onSubmitSuccess: function onSubmitSuccess() {
					return _this2.__addItemSuccess(pid);
				},
				btns: [{ text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
				items: this.state.items })
		});
	},
	__onToolbarClick: function __onToolbarClick(item) {
		if (item.name == 'addMainItem') {
			this.__addItem();
			return;
		}
		if (!this.state.currItem) {
			zn.toast.warning('必须选择主项');
			return false;
		}
		var _id = this.state.currItem.props.data.id;
		switch (item.name) {
			case 'addChildItem':
				this.__addItem(_id);
				break;
			case 'editCurrItem':
				this.__editItem();
				break;
			case 'upCurrItem':
				this.__upItem();
				break;
			case 'downCurrItem':
				this.__downItem();
				break;
			case 'deleteCurrItem':
				zn.confirm('确认删除该项吗？', '提示', function () {
					zn.store.post('/zn.plugin.admin/model/delete', {
						model: this.props.model,
						where: { id: _id }
					}).then(function (data) {
						this.state.currItem.props.parent.refresh();
						zn.toast.success('删除成功！');
					}.bind(this), function (data) {
						zn.toast.error('删除出错: ' + data.result);
					});
				}.bind(this));
				break;
		}
	},
	__renderRight: function __renderRight() {
		var _result = this.props.rightRender && this.props.rightRender(this);
		if (_result) {
			return _result;
		} else {
			return React.createElement(RightsSetting, { model: this.props.model, id: this.state.currItem ? this.state.currItem.props.data.id : null });
		}
	},
	__itemContentRender: function __itemContentRender(props) {
		var _result = this.props.itemContentRender && this.props.itemContentRender(props);
		if (_result) {
			return _result;
		} else {
			return React.createElement(
				'span',
				null,
				React.createElement('i', { style: { margin: 5 }, className: 'fa ' + props.data.icon }),
				props.data.id + '、' + props.data.zn_title
			);
		}
	},
	render: function render() {
		return React.createElement(
			zn.react.Page,
			{
				toolbarItems: this.state.toolbarItems,
				onToolbarClick: this.__onToolbarClick,
				title: this.props.title },
			React.createElement(
				'div',
				{ className: 'rt-flex-layout zn-plugin-admin-master-slave-flex-layout row' },
				React.createElement(
					'div',
					{ className: 'layout-header', style: { width: 250 } },
					React.createElement(zn.react.TreeListView, {
						ref: 'maintreemenu',
						itemContentRender: this.__itemContentRender,
						activeAll: this.props.activeAll,
						onClick: this.__onClick,
						data: this.state.data })
				),
				React.createElement(
					'div',
					{ className: 'layout-body' },
					this.__renderRight()
				)
			)
		);
	}
});