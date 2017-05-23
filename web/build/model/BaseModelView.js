var React = require('react');
module.exports = React.createClass({
	displayName: 'exports',

	getDefaultProps: function getDefaultProps() {
		return {
			model: ''
		};
	},
	getInitialState: function getInitialState() {
		return {
			data: Store.post('/znadmin/model/paging', {
				model: this.props.model,
				fields: '*'
			}),
			items: [],
			currItem: null,
			toolbarItems: [{ text: '添加项', name: 'addItem', icon: 'fa-plus', style: { marginRight: 0 } }, { text: '编辑项', name: 'updateItem', icon: 'fa-edit' }, { text: '删除项', name: 'deleteItem', icon: 'fa-remove' }]
		};
	},
	componentDidMount: function componentDidMount() {
		this.__loadTableHeaders();
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (nextProps.model != this.props.model) {
			this.props.model = nextProps.model;
			this.__loadTableHeaders(function () {
				this.state.data.ext({ model: nextProps.model }).refresh();
			}.bind(this));
		}
	},
	__loadTableHeaders: function __loadTableHeaders(callback) {
		Store.get('/znadmin/model/getModelProps?model=' + this.props.model).exec().then(function (data) {
			this.setState({
				items: data.result
			});
			callback && callback(data);
		}.bind(this));
	},
	__onTableRowClick: function __onTableRowClick(event, data, row, table) {
		this._currItem = data;
	},
	__addItemSuccess: function __addItemSuccess(pid) {
		Popup.close('dialog');
		Popup.message({
			content: '添加成功！',
			type: 'success'
		});
	},
	__addItem: function __addItem(pid) {
		var _this = this;

		Popup.dialog({
			title: '添加项',
			hStyle: { backgroundColor: '#0B72A5' },
			width: 480,
			content: React.createElement(UI.Form, {
				method: 'POST',
				layout: 'stacked',
				action: '/znadmin/model/addNode',
				exts: { model: this.props.model },
				merge: 'data',
				style: { margin: 25 },
				syncSubmit: false,
				onSubmitBefore: function onSubmitBefore(data, form) {},
				onSubmitSuccess: function onSubmitSuccess() {
					return _this.state.data.refresh();
				},
				btns: [{ text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
				items: [{ name: 'title', title: 'title', type: 'text', required: true }] })
		});
	},
	__updateItem: function __updateItem(data) {
		var _this2 = this;

		Popup.dialog({
			title: '修改项',
			hStyle: { backgroundColor: '#0B72A5' },
			width: 480,
			content: React.createElement(UI.Form, {
				method: 'POST',
				layout: 'stacked',
				action: '/znadmin/model/updateNode',
				exts: { model: this.props.model },
				merge: 'data',
				data: data,
				style: { margin: 25 },
				syncSubmit: false,
				onSubmitBefore: function onSubmitBefore(data, form) {},
				onSubmitSuccess: function onSubmitSuccess() {
					return _this2.state.data.refresh();
				},
				btns: [{ text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
				items: [{ name: 'title', title: 'title', type: 'text', required: true }] })
		});
	},
	__onToolbarClick: function __onToolbarClick(item) {
		if (item.name == 'addItem') {
			this.__addItem();
			return;
		}
		if (!this.state.currItem) {
			Popup.message({
				content: '必须选择主项',
				type: 'warning'
			});

			return false;
		}
		switch (item.name) {
			case 'updateItem':
				this.__updateItem(this.state.currItem);
				break;
			case 'deleteItem':
				Popup.confirm({
					content: '确认删除该项吗？',
					onConfirm: function () {
						Store.post('/znadmin/model/deleteNodes', {
							model: this.props.model,
							id: this.state.currItem.id
						}).exec().then(function (data) {
							this.state.data.refresh();
							Popup.message({
								content: '删除成功！',
								type: 'warn'
							});
						}.bind(this), function (data) {
							Popup.message({
								content: '删除出错: ' + data.result,
								type: 'danger'
							});
						});
					}.bind(this)
				});
				break;
		}
	},
	render: function render() {
		return React.createElement(
			UI.ActivityLayout,
			{ direction: 'v', begin: 3.5, barWidth: 0.3, unit: 'rem' },
			React.createElement(
				'div',
				null,
				React.createElement(UI.ButtonGroup, { float: 'right', items: this.state.toolbarItems, onClick: this.__onToolbarClick })
			),
			React.createElement(UI.PagerView, {
				view: 'Table',
				enableFilter: false,
				checkbox: 50,
				showHeader: true,
				data: this.state.data,
				items: this.state.items })
		);
	}
});