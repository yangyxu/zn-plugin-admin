var React = require('react');
module.exports = React.createClass({
	displayName: 'exports',

	getDefaultProps: function getDefaultProps() {
		return {
			model: '',
			headers: [],
			insertInputs: [],
			updateInputs: []
		};
	},
	getInitialState: function getInitialState() {
		return {
			data: Store.post('/znadmin/model/paging', {
				model: this.props.model
			}),
			currItem: null,
			toolbarItems: [{ text: '新建项目', name: 'addItem', icon: 'fa-plus' }, { text: '编辑项目', name: 'updateItem', icon: 'fa-edit' }, { text: '删除项目', name: 'deleteItem', icon: 'fa-remove' }]
		};
	},
	componentDidMount: function componentDidMount() {},
	__onTableRowClick: function __onTableRowClick(event, data, row, table) {
		this._currItem = data;
	},
	__doSuccess: function __doSuccess() {
		Popup.close('dialog');
		Popup.message({
			content: '操作成功！',
			type: 'success'
		});
		this.state.data.refresh();
	},
	__addItem: function __addItem(pid) {
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
				onSubmitSuccess: this.__doSuccess,
				btns: [{ text: '新建项目', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
				items: this.props.insertInputs })
		});
	},
	__updateItem: function __updateItem(data) {
		Popup.dialog({
			title: '更新项目信息',
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
				onSubmitSuccess: this.__doSuccess,
				btns: [{ text: '更新', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
				items: this.props.updateInputs })
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
				onTableRowClick: this.__onTableRowClick,
				items: this.props.headers })
		);
	}
});