'use strict';

var React = require('react');
module.exports = React.createClass({
	displayName: 'exports',

	getDefaultProps: function getDefaultProps() {
		return {
			masterId: 0,
			title: '',
			model: '',
			where: {},
			formItems: [],
			toolbarItems: []
		};
	},
	getInitialState: function getInitialState() {
		var _where = this.props.where;
		if (this.props.masterId) {
			_where.masterId = this.props.masterId;
		}
		return {
			where: _where,
			data: Store.post('/znadmin/model/paging', {
				model: this.props.model,
				where: _where
			})
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (nextProps.masterId !== this.props.masterId) {
			this.state.data._data.where = { masterId: nextProps.masterId };
			this.state.data.exec();
		}
	},
	__doSuccess: function __doSuccess() {
		Popup.close();
		Popup.message({
			content: '操作成功！',
			type: 'success'
		});
		this.state.data.refresh();
	},
	__addItem: function __addItem(pid) {
		Popup.dialog({
			title: '添加',
			width: 480,
			content: React.createElement(UI.Form, {
				method: 'POST',
				layout: 'stacked',
				action: '/znadmin/model/addNode',
				exts: { model: this.props.model },
				hiddens: this.state.where,
				merge: 'data',
				style: { margin: 25 },
				syncSubmit: false,
				onSubmitSuccess: this.__doSuccess,
				btns: [{ text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', float: 'right', status: 'danger' }],
				items: this.props.formItems })
		});
	},
	__updateItem: function __updateItem(data) {
		Popup.dialog({
			title: '修改信息',
			width: 480,
			content: React.createElement(UI.Form, {
				method: 'POST',
				layout: 'stacked',
				action: '/znadmin/model/updateNode',
				exts: { model: this.props.model },
				merge: 'data',
				value: data,
				style: { margin: 25 },
				syncSubmit: false,
				onSubmitSuccess: this.__doSuccess,
				btns: [{ text: '修改', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
				items: this.props.formItems })
		});
	},
	__onToolbarClick: function __onToolbarClick(item) {
		switch (item.name) {
			case 'addItem':
				return this.__addItem();
			case 'updateItem':
				return this.__updateItem(this.state.currItem);
			case 'deleteItems':
				Popup.confirm({
					content: '确认删除该项吗？',
					onConfirm: function () {
						Store.post('/znadmin/model/deleteNodes', {
							model: this.props.model,
							ids: this._value
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
		var _this = this;

		return React.createElement(
			UI.Page,
			{
				title: this.props.title,
				toolbarItems: this.props.toolbarItems,
				onToolbarClick: this.__onToolbarClick },
			React.createElement(UI.PagerView, {
				view: 'ListView',
				className: 'rt-list-view-border',
				ref: 'listview',
				textKey: 'name',
				valueKey: 'id',
				selectMode: 'checkbox',
				itemRender: this.props.itemRender,
				onClick: function onClick(value, rtitem) {
					return _this._value = value;
				},
				data: this.state.data })
		);
	}
});