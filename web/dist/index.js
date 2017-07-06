/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	zn.react.znadmin = __webpack_require__(2);
	zn.deepEachObject({}, function (value) {
	  return __webpack_require__(14)(value);
	});
	module.exports = zn.react.extendPath('/znadmin/', __webpack_require__(34));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = zn.arrayValueToObject(['LetterSelector', 'RightsSetting', 'RoleSearcher', 'UserSearcher', 'BaseModelView', 'TreeModelView', 'BaseBusinessView', 'MasterSlave', 'Slave'], function (value, index) {
	    return __webpack_require__(3)("./" + value + '.js');
	});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./BaseBusinessView.js": 4,
		"./BaseModelView.js": 6,
		"./LetterSelector.js": 7,
		"./MasterSlave.js": 8,
		"./RightsSetting.js": 10,
		"./RoleSearcher.js": 12,
		"./Slave.js": 9,
		"./TreeModelView.js": 13,
		"./UserSearcher.js": 11,
		"./index.js": 2
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
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
				React.createElement(UI.ButtonGroup, { float: 'right', items: this.state.toolbarItems, onClick: this.__onToolbarClick }),
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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	var CHARS = zn.char.getUppercaseLetters();

	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				value: ',',
				mulitable: true
			};
		},
		getInitialState: function getInitialState() {
			return {
				value: this.props.value,
				tag: null,
				user: null,
				users: []
			};
		},
		__onLetterClick: function __onLetterClick(item) {
			var _id = item + ',';
			if (this.state.value.indexOf(',' + _id) == -1) {
				this.state.value = this.state.value + _id;
			} else {
				this.state.value = this.state.value.replace(',' + _id, ',');
			}
			this.setValue(this.state.value);
		},
		setValue: function setValue(value) {
			this.setState({
				value: value
			});

			this.props.onChange && this.props.onChange(value);
		},
		__onCheck: function __onCheck(event, value) {
			if (value) {
				this.setValue(',' + CHARS.join(',') + ',');
			} else {
				this.setValue(',');
			}
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'rt-letter-selector' },
				React.createElement(
					'ul',
					{ className: 'tags' },
					CHARS.map(function (item, index) {
						var _this = this;

						return React.createElement(
							'li',
							{ key: index, className: 'tag ' + (this.state.value.indexOf(item) != -1 ? 'selected' : ''), onClick: function onClick() {
									return _this.__onLetterClick(item);
								} },
							item
						);
					}.bind(this)),
					this.props.mulitable && React.createElement(
						'li',
						null,
						React.createElement(zn.react.Checkbox, { text: '\u5168\u9009', onChange: this.__onCheck })
					)
				)
			);
		}
	});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var Slave = __webpack_require__(9);

	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				title: '',
				model: '',
				where: {},
				formItems: [],
				toolbarItems: [],
				slave: {
					title: '',
					model: '',
					where: {},
					formItems: [],
					toolbarItems: []
				}
			};
		},
		getInitialState: function getInitialState() {
			return {
				masterId: null,
				data: Store.post('/znadmin/model/paging', {
					model: this.props.model,
					where: this.props.where
				})
			};
		},
		componentDidMount: function componentDidMount() {},
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
				title: '添加',
				hStyle: { backgroundColor: '#0B72A5' },
				width: 480,
				content: React.createElement(UI.Form, {
					method: 'POST',
					layout: 'stacked',
					action: '/znadmin/model/addNode',
					exts: { model: this.props.model },
					hiddens: this.props.where,
					merge: 'data',
					style: { margin: 25 },
					syncSubmit: false,
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: this.props.formItems })
			});
		},
		__removeItems: function __removeItems() {
			Popup.confirm({
				content: '确认删除该项吗？',
				onConfirm: function () {
					Store.post('/znadmin/model/deleteNode', {
						model: this.props.model,
						id: data.id
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
		},
		__removeItem: function __removeItem() {
			if (this.state.masterId) {
				Popup.confirm({
					content: '确认删除该项吗？',
					onConfirm: function () {
						Store.post('/znadmin/model/deleteNode', {
							model: this.props.model,
							id: this.state.masterId
						}).exec().then(function (data) {
							this.state.data.refresh();
							Toast.success('删除成功！');
						}.bind(this), function (data) {
							Toast.error('删除出错: ' + data.result);
						});
					}.bind(this)
				});
			} else {
				Toast.warning('请先选择待删除数据项！');
			}
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
					exts: {
						model: this.props.model
					},
					merge: 'data',
					data: data,
					style: { margin: 25 },
					syncSubmit: false,
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '更新', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: this.props.formItems })
			});
		},
		__onToolbarClick: function __onToolbarClick(props) {
			switch (props.name) {
				case 'addItem':
					this.__addItem();
					break;
				case 'removeItem':
					this.__removeItem();
					break;
				case 'removeItems':
					this.__removeItems();
					break;
			}
		},
		__onPagerListViewClick: function __onPagerListViewClick(value, rtitem, rtlist, event) {
			this.setState({ masterId: value });
		},
		render: function render() {
			return React.createElement(
				UI.Page,
				{
					toolbarItems: this.props.toolbarItems,
					onToolbarClick: this.__onToolbarClick,
					title: this.props.title },
				React.createElement(
					UI.ActivityLayout,
					{ direction: 'h', begin: this.props.leftWidth || 250, unit: 'px' },
					React.createElement(UI.PagerView, {
						view: 'ListView',
						className: 'rt-list-view-border',
						textKey: 'name',
						valueKey: 'id',
						selectMode: 'radio',
						fireIndex: 0,
						onItemClick: this.__onPagerListViewClick,
						itemRender: this.props.itemRender,
						itemClassName: this.props.itemClassName,
						data: this.state.data }),
					!!this.state.masterId ? React.createElement(Slave, _extends({}, this.props.slave, { masterId: this.state.masterId })) : React.createElement(
						'div',
						null,
						'\u8BF7\u9009\u62E9\u4E3B\u8868\u6570\u636E\u8BB0\u5F55'
					)
				)
			);
		}
	});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	var UserSearcher = __webpack_require__(11);
	var RoleSearcher = __webpack_require__(12);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: null,
				id: null
			};
		},
		getInitialState: function getInitialState() {
			return {
				users: ',',
				roles: ',',
				observers: ',',
				ownerId: 0,
				items: [{
					title: '是否启用权限', name: 'ifEnabledRights', type: 'radio',
					data: [{ text: "禁用", value: 0 }, { text: '启用', value: 1 }]
				}, { title: '扩展', name: 'ext', type: 'textarea' }]
			};
		},
		componentDidMount: function componentDidMount() {
			this.__load(this.props.id);
		},
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			if (nextProps.id != this.props.id) {
				this.__load(nextProps.id);
			}
		},
		__load: function __load(id) {
			if (id) {
				Store.post('/znadmin/model/selectOne', {
					fields: '*',
					model: this.props.model,
					where: { id: id }
				}).exec().then(function (data) {
					this.setState(data.result);
				}.bind(this));
			}
		},
		__save: function __save() {
			if (!this.props.id) {
				Toast.warning('必须编辑项');
				return;
			}
			var _data = {
				users: this.state.users,
				roles: this.state.roles
			};

			Store.post('/znadmin/model/updateNode', { data: _data, model: this.props.model, where: { id: this.props.id } }).exec().then(function (data) {
				if (data.result.changedRows) {
					Toast.success('保存成功');
				}
			}.bind(this));
		},
		__changeOwner: function __changeOwner() {},
		render: function render() {
			var _this = this;

			return React.createElement(
				'div',
				{ className: 'rt-rights-setting', style: { padding: 5 } },
				React.createElement(
					'div',
					{ className: 'title', style: { lineHeight: '4rem' } },
					React.createElement('i', { className: 'fa fa-yelp', style: { margin: 5 } }),
					React.createElement(
						'span',
						null,
						'\u6743\u9650\u8BBE\u7F6E\u3010\u62E5\u6709\u8005\uFF1A',
						React.createElement(
							'a',
							{ onClick: this.__changeOwner },
							this.state.ownerId
						),
						'\u3011'
					),
					this.props.id && React.createElement(UI.Button, { onClick: this.__save, text: '\u4FDD\u5B58', icon: 'fa-save', float: 'right', style: { margin: 5 } })
				),
				React.createElement(
					UI.Card,
					{ icon: 'fa-user', title: '\u7528\u6237' },
					React.createElement(UserSearcher, { value: this.state.users, onChange: function onChange(value) {
							return _this.state.users = value;
						} })
				),
				React.createElement(
					UI.Card,
					{ icon: 'fa-graduation-cap', title: '\u89D2\u8272' },
					React.createElement(RoleSearcher, { value: this.state.roles, onChange: function onChange(value) {
							return _this.state.roles = value;
						} })
				)
			);
		}
	});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	var LetterSelector = __webpack_require__(7);
	var RoleSearcher = __webpack_require__(12);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				mulitable: false
			};
		},
		getInitialState: function getInitialState() {
			return {
				currIndex: 0,
				search: '',
				value: ',',
				users: []
			};
		},
		componentDidMount: function componentDidMount() {
			this.__loadUsers();
		},
		__onLetterChange: function __onLetterChange(value) {
			/*
	  this.__loadUsers({
	  	firstChar: value
	  });*/
		},
		__onRoleChange: function __onRoleChange(value) {
			/*
	  this.__loadUsers({
	  	role: value
	  });*/
		},
		__loadUsers: function __loadUsers(where) {
			Store.post('/znadmin/model/select', {
				model: 'AdminUser',
				where: where || {}
			}).exec().then(function (data) {
				this.setState({
					users: data.result
				});
			}.bind(this));
		},
		__onSearch: function __onSearch(value) {
			this.setState({
				search: value
			});
		},
		__onUserClick: function __onUserClick(user) {
			var _id = user.id + ',';
			if (this.props.mulitable) {
				if (this.state.value.indexOf(',' + _id) == -1) {
					this.state.value = this.state.value + _id;
				} else {
					this.state.value = this.state.value.replace(',' + _id, ',');
				}
			} else {
				if (this.state.value == user.id) {
					this.state.value = null;
				} else {
					this.state.value = user.id;
				}
			}

			this.setValue(this.state.value);
		},
		__onUserCheckAll: function __onUserCheckAll(event, value) {
			if (value) {
				this.setValue(',' + this._users.join(',') + ',');
			} else {
				this.setValue(',');
			}
		},
		__renderUsers: function __renderUsers() {
			var _value = this.state.value,
			    _search = this.state.search;
			this._users = [];
			return React.createElement(
				'div',
				{ className: 'user-view' },
				React.createElement(zn.react.Search, { onSearch: this.__onSearch }),
				React.createElement(
					'ul',
					{ className: 'users' },
					this.state.users.map(function (user, index) {
						var _this = this;

						var _selected = false,
						    _userId = user.id,
						    _name = user.name;
						if (_search && _name.indexOf(_search) == -1) {
							return null;
						} else {
							if (_search) {
								_name = _name.replace(_search, '<span style="color:red">' + _search + '</span>');
							}
						}
						this._users.push(_userId);

						if (this.props.mulitable) {
							_selected = _value.indexOf(',' + _userId + ',') != -1;
						} else {
							_selected = _value === _userId;
						}
						return React.createElement(
							'li',
							{ key: index, className: 'user ' + (_selected ? 'selected' : ''), onClick: function onClick() {
									return _this.__onUserClick(user);
								} },
							React.createElement('img', { className: 'avatar', src: Store.fixURL(user.avatarImg) }),
							React.createElement('span', { className: 'name', dangerouslySetInnerHTML: { __html: _name } })
						);
					}.bind(this)),
					this.props.mulitable && React.createElement(
						'li',
						null,
						React.createElement(zn.react.Checkbox, { text: '\u5168\u9009', onChange: this.__onUserCheckAll })
					)
				)
			);
		},
		setValue: function setValue(value) {
			this.setState({
				value: value
			});
			this.props.onChange && this.props.onChange(value);
		},
		getValue: function getValue() {
			return this.state.value;
		},
		__renderView: function __renderView() {
			switch (this.state.currIndex) {
				case 0:
					return React.createElement(LetterSelector, { onChange: this.__onLetterChange });
				case 1:
					return React.createElement(RoleSearcher, { onChange: this.__onRoleChange });
			}
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'rt-user-searcher' },
				React.createElement(
					'ul',
					{ className: 'type-tab' },
					[{ text: '首字母', icon: 'fa-font' }, { text: '所属部门', icon: 'fa-sitemap' }].map(function (item, index) {
						var _this2 = this;

						return React.createElement(
							'li',
							{ className: this.state.currIndex === index ? 'curr' : '', key: index, onClick: function onClick() {
									return _this2.setState({ currIndex: index });
								} },
							React.createElement('i', { style: { marginRight: 5 }, className: 'fa ' + item.icon }),
							React.createElement(
								'span',
								null,
								item.text
							)
						);
					}.bind(this))
				),
				this.__renderView(),
				this.__renderUsers()
			);
		}
	});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				value: ',',
				disabled: false,
				cascade: false,
				activeAll: false,
				enableCheckbox: true
			};
		},
		getInitialState: function getInitialState() {
			return {
				value: this.props.value,
				data: Store.post('/znadmin/model/select', {
					model: 'zn_admin_role', where: {
						pid: 0
					}
				})
			};
		},
		componentDidUpdate: function componentDidUpdate(prevProps) {
			if (prevProps.value != this.props.value) {
				this.setState({
					value: this.props.value
				});
			}
		},
		__onTreeMenuItemCheckboxChange: function __onTreeMenuItemCheckboxChange(value) {
			this.state.value = value;
			this.props.onChange && this.props.onChange(value);
		},
		setValue: function setValue(value) {
			this.setState({
				value: value
			});
			this.props.onChange && this.props.onChange(value);
		},
		getValue: function getValue() {
			return this.state.value;
		},
		__itemContentRender: function __itemContentRender(props) {
			var _icon = '';
			switch (props.data.type) {
				case 1:
					_icon = 'fa-sitemap';
					break;
				case 2:
					_icon = 'fa-graduation-cap';
					break;
			}

			return React.createElement(
				'span',
				null,
				_icon && React.createElement('i', { style: { margin: 5 }, className: 'fa ' + _icon }),
				(this.props.debug ? props.data.id + '、' : '') + props.data.title
			);
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'rt-user-selector' },
				React.createElement(zn.react.TreeListView, _extends({}, this.props, {
					value: this.state.value,
					data: this.state.data,
					onItemCheckboxChange: this.__onTreeMenuItemCheckboxChange,
					itemContentRender: this.__itemContentRender }))
			);
		}
	});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	var RightsSetting = __webpack_require__(10);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: 'zn_admin_var',
				pid: 0
			};
		},
		getInitialState: function getInitialState() {
			var _where = this.props.where;
			if (_where) {
				_where.pid = this.props.pid;
			} else {
				_where = { pid: this.props.pid };
			}
			this._where = _where;
			return {
				data: Store.post('/znadmin/model/select', { model: this.props.model, where: _where, order: { treeOrder: 'asc' } }),
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
				Store.get('/znadmin/model/getModelProps?model=' + this.props.model).exec().then(function (data) {
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
			Popup.close('dialog');
			Popup.message({
				content: '添加成功！',
				type: 'success'
			});

			var _treemenu = this.refs.maintreemenu;
			if (pid && this.state.currItem) {
				_treemenu = this.state.currItem.props.parent;
			}
			_treemenu.refresh();
		},
		__editItemSuccess: function __editItemSuccess() {
			Popup.close('dialog');
			this.state.currItem.props.parent.refresh();
		},
		__editItem: function __editItem() {
			var _this = this;

			if (!this.state.currItem) {
				Popup.message({
					content: '必须编辑项',
					type: 'warning'
				});
				return;
			}
			Popup.dialog({
				title: '编辑',
				hStyle: { backgroundColor: '#0B72A5' },
				width: 780,
				content: React.createElement(UI.Form, {
					method: 'POST',
					layout: 'stacked',
					style: { margin: 25 },
					action: '/znadmin/model/updateNode',
					exts: { model: this.props.model, where: { id: this.state.currItem.props.data.id } },
					merge: 'data',
					value: Store.post('/znadmin/model/selectOne', { model: this.props.model, where: { id: this.state.currItem.props.data.id } }),
					syncSubmit: false,
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
			_where['pid'] = pid;
			Popup.dialog({
				title: '添加项',
				hStyle: { backgroundColor: '#0B72A5' },
				width: 780,
				content: React.createElement(UI.Form, {
					method: 'POST',
					layout: 'stacked',
					action: '/znadmin/model/addNode',
					hiddens: _where,
					exts: { model: this.props.model },
					merge: 'data',
					style: { margin: 25 },
					syncSubmit: false,
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
				Popup.message({
					content: '必须选择主项',
					type: 'warning'
				});

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
					Popup.confirm({
						content: '确认删除该项吗？',
						onConfirm: function () {
							Store.post('/znadmin/model/deleteNode', {
								model: this.props.model,
								id: _id
							}).exec().then(function (data) {
								this.state.currItem.props.parent.refresh();
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
					props.data.id + '、' + props.data.title
				);
			}
		},
		render: function render() {
			return React.createElement(
				UI.Page,
				{
					toolbarItems: this.state.toolbarItems,
					onToolbarClick: this.__onToolbarClick,
					title: this.props.title },
				React.createElement(
					UI.ActivityLayout,
					{ direction: 'h', begin: this.props.leftWidth || 35, barWidth: 0.3, unit: 'rem' },
					React.createElement(UI.TreeListView, { itemContentRender: this.__itemContentRender, ref: 'maintreemenu', activeAll: this.props.activeAll, onClick: this.__onClick, data: this.state.data }),
					this.__renderRight()
				)
			);
		}
	});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./component/BaseBusinessView": 4,
		"./component/BaseBusinessView.js": 4,
		"./component/BaseModelView": 6,
		"./component/BaseModelView.js": 6,
		"./component/LetterSelector": 7,
		"./component/LetterSelector.js": 7,
		"./component/LetterSelector.less": 15,
		"./component/MasterSlave": 8,
		"./component/MasterSlave.js": 8,
		"./component/RightsSetting": 10,
		"./component/RightsSetting.js": 10,
		"./component/RoleSearcher": 12,
		"./component/RoleSearcher.js": 12,
		"./component/Slave": 9,
		"./component/Slave.js": 9,
		"./component/TreeModelView": 13,
		"./component/TreeModelView.js": 13,
		"./component/UserSearcher": 11,
		"./component/UserSearcher.js": 11,
		"./component/UserSearcher.less": 18,
		"./component/index": 2,
		"./component/index.js": 2,
		"./index": 1,
		"./index.js": 1,
		"./less/UserItem.less": 20,
		"./page/Menu": 22,
		"./page/Menu.js": 22,
		"./page/MyInfo": 24,
		"./page/MyInfo.js": 24,
		"./page/Project": 25,
		"./page/Project.js": 25,
		"./page/ProjectBug": 26,
		"./page/ProjectBug.js": 26,
		"./page/Role": 27,
		"./page/Role.js": 27,
		"./page/User": 29,
		"./page/User.js": 29,
		"./page/UserInfo": 30,
		"./page/UserInfo.js": 30,
		"./page/UserInfo.less": 31,
		"./page/UserLog": 33,
		"./page/UserLog.js": 33,
		"./page/UsersForRoles": 28,
		"./page/UsersForRoles.js": 28,
		"./page/Var": 23,
		"./page/Var.js": 23,
		"./page/index": 34,
		"./page/index.js": 34,
		"./view/web/Dashboard": 36,
		"./view/web/Dashboard.js": 36,
		"./view/web/Index": 37,
		"./view/web/Index.js": 37,
		"./view/web/Index.less": 38,
		"./view/web/Login": 40,
		"./view/web/Login.js": 40,
		"./view/web/Login.less": 41,
		"./view/web/Main": 43,
		"./view/web/Main.js": 43,
		"./view/web/Main.less": 44,
		"./view/web/exports": 46,
		"./view/web/exports.js": 46
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 14;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var Var = __webpack_require__(23);
	var TreeModelView = __webpack_require__(13);
	var RightsSetting = __webpack_require__(10);
	var VarPanel = React.createClass({
		displayName: 'VarPanel',

		getInitialState: function getInitialState() {
			return {
				typeIndex: 0
			};
		},
		__onListViewItemClick: function __onListViewItemClick(event, item, index) {
			this.setState({ typeIndex: index });
		},
		__renderBody: function __renderBody() {
			var _treeModel = this.props.treeModel;

			return React.createElement(RightsSetting, { model: _treeModel.props.model, id: _treeModel.state.currItem ? _treeModel.state.currItem.props.data.id : null });
			/*
	  switch (this.state.typeIndex) {
	  	case 0:
	  		return <RightsSetting model={_treeModel.props.model} id={_treeModel.state.currItem?_treeModel.state.currItem.props.data.id:null}  />;
	  	case 1:
	  		if(_treeModel.state.currItem){
	  			return <Var menuId={_treeModel.state.currItem.props.data.id} pid={2} />
	  		}else {
	  			return <div style={{textAlign:'center'}}>请先选中菜单</div>;
	  		}
	  }*/
		},
		render: function render() {
			return this.__renderBody();
			return React.createElement(
				UI.ActivityLayout,
				{ direction: 'v', begin: 4, barWidth: 0.3, unit: 'rem' },
				React.createElement(UI.ListView, {
					className: 'rt-list-view-tab',
					fireIndex: 0,
					onClick: this.__onListViewItemClick,
					itemRender: function itemRender(item, index) {
						return React.createElement(
							'span',
							null,
							React.createElement('i', { style: { marginRight: 5 }, className: 'fa ' + item.icon }),
							item.text
						);
					},
					data: [{ text: '权限设置', icon: 'fa-yelp' }, { text: '资源管理', icon: 'fa-table' }] }),
				this.__renderBody()
			);
		}
	});

	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: 'zn_admin_menu',
				title: '菜单管理',
				leftWidth: 30,
				pid: 0,
				fields: [{ title: '标题', type: 'Input', name: 'title' }, { title: '类型', type: 'Radio', name: 'type', value: 0,
					data: [{ text: '分类', value: 0 }, { text: '功能菜单', value: 1 }]
				}, { title: '图标', type: 'Input', name: 'icon' }, { title: '链接', type: 'Input', name: 'url' }, { title: '路径', type: 'Input', name: 'path' }, { title: '扩展', type: 'Textarea', name: 'ext' }]
			};
		},
		__rightRender: function __rightRender(treeModel) {
			return React.createElement(VarPanel, { treeModel: treeModel });
		},
		render: function render() {
			return React.createElement(TreeModelView, _extends({}, this.props, { rightRender: this.__rightRender }));
		}
	});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var TreeModelView = __webpack_require__(13);
	var RightsSetting = __webpack_require__(10);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: 'zn_admin_var',
				pid: 0,
				title: '资源管理',
				menuId: 0,
				fields: [{ title: '标题', type: 'Input', name: 'title' }, { title: '类型', type: 'Radio', name: 'type', value: 0,
					data: [{ text: '分类', value: 0 }, { text: '按钮', value: 1 }, { text: '常量', value: 2 }, { text: '标签', value: 3 }, { text: '标签', value: 4 }]
				}, { title: '图标', type: 'Input', name: 'icon' }, { title: '图片', type: 'ImageUploader', name: 'img', action: '/znadmin/uploadFiles' }, { title: '链接', type: 'Input', name: 'url' }, { title: '路径', type: 'Input', name: 'path' }, { title: '扩展', type: 'Textarea', name: 'ext' }]
			};
		},
		__rightRender: function __rightRender(treeModel) {
			if (!treeModel.state.currItem) {
				return null;
			}
			var _id = treeModel.state.currItem.props.data.id;
			return React.createElement(
				'div',
				null,
				React.createElement(RightsSetting, { model: this.props.model, id: treeModel.state.currItem ? treeModel.state.currItem.props.data.id : null })
			);
		},
		__itemContentRender: function __itemContentRender(item) {
			var _data = item.data;
			switch (_data.type) {
				case 1:
					return React.createElement(
						'span',
						null,
						React.createElement('i', { title: '\u8FD9\u662F\u64CD\u4F5C\u6309\u94AE', className: 'fa fa-hand-o-up', style: { margin: 5, color: '#0B72A5' } }),
						React.createElement('i', { className: 'fa ' + _data.icon, style: { marginRight: 5 } }),
						_data.id + '、' + _data.title
					);
				case 2:
					return React.createElement(
						'span',
						null,
						React.createElement('i', { title: '\u8FD9\u662F\u9759\u6001\u5E38\u91CF', className: 'fa fa-text-width', style: { margin: 5, color: '#d9534f' } }),
						React.createElement('i', { className: 'fa ' + _data.icon, style: { marginRight: 5 } }),
						_data.id + '、' + _data.title
					);
				case 3:
					return React.createElement(
						'span',
						null,
						React.createElement('i', { title: '\u8FD9\u662F\u6807\u7B7E\u7C7B\u522B', className: 'fa fa-tag', style: { margin: 5 } }),
						React.createElement('i', { className: 'fa ' + _data.icon, style: { marginRight: 5 } }),
						_data.id + '、' + _data.title
					);
			}
		},
		render: function render() {
			return React.createElement(TreeModelView, _extends({}, this.props, { where: { menuId: this.props.menuId }, itemContentRender: this.__itemContentRender, rightRender: this.__rightRender, leftWidth: 30 }));
		}
	});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);

	module.exports = React.createClass({
		displayName: 'exports',

		getInitialState: function getInitialState() {
			return {
				userId: this.props.userId || Session.json().id,
				toolbarItems: this.props.userId ? [] : [{ icon: 'fa-edit', text: '修改个人信息', onClick: this.__onEdit }],
				info: null,
				formItems: [{ title: '头像', name: 'avatarImg', type: 'ImageUploader', action: '/klproject/uploadFiles' }, { title: '用户名', name: 'name', type: 'Input', required: true, error: '用户名必填项!' }, { title: '密码', name: 'pwd', type: 'Input', attrs: { type: 'password' }, required: true, error: '密码必填项!' }, { title: '邮箱', name: 'email', type: 'Input', required: true, error: '邮箱必填项!' }, { title: '手机号', name: 'phone', type: 'Input', required: true, error: '手机号必填项!' }, { title: '地址', name: 'address', type: 'Input' }, { title: '说明', name: 'note', type: 'Textarea' }],
				data: Store.post('/znadmin/model/select', { model: 'zn_admin_role', where: { pid: 0 } })
			};
		},
		componentDidMount: function componentDidMount() {
			this.__loadUserInfo();
		},
		__doSuccess: function __doSuccess() {
			Popup.close('dialog');
			Toast.success('修改成功');
			Store.post('/znadmin/user/findUserById', { userId: this.state.userId }).exec().then(function (data) {
				this.setState({
					info: data.result
				});
			}.bind(this));
		},
		__onEdit: function __onEdit(data) {
			Popup.dialog({
				title: '修改个人信息',
				hStyle: { backgroundColor: '#0B72A5' },
				width: 480,
				content: React.createElement(UI.Form, {
					method: 'POST',
					layout: 'stacked',
					action: '/znadmin/model/updateNode',
					exts: { model: 'zn_admin_user', where: { id: this.state.info.id } },
					merge: 'data',
					value: this.state.info,
					style: { margin: 25 },
					syncSubmit: false,
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '修改', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: this.state.formItems })
			});
		},
		__loadUserInfo: function __loadUserInfo() {
			Store.post('/znadmin/user/findUserById', { userId: this.state.userId }).exec().then(function (data) {
				this.setState({
					info: data.result
				});
			}.bind(this));
		},
		__onTreeMenuItemCheckboxChange: function __onTreeMenuItemCheckboxChange(value) {
			Store.post('/znadmin/user/updateUser', { data: { roleIds: value }, userId: this.state.info.id }).exec().then(function (data) {
				Toast.success('保存成功');
			});
		},
		__itemContentRender: function __itemContentRender(props) {
			var _icon = '';
			if (props.data.type == 1) {
				_icon = 'fa-sitemap';
			}
			if (props.data.type == 2) {
				_icon = 'fa-graduation-cap';
			}

			return React.createElement(
				'span',
				null,
				React.createElement('i', { style: { margin: 5 }, className: 'fa ' + _icon }),
				props.data.id + '、' + props.data.title
			);
		},
		render: function render() {
			if (!this.state.info) {
				return null;
			}
			return React.createElement(
				UI.Page,
				{ title: this.state.info.name, icon: 'fa-newspaper-o', toolbarItems: this.state.toolbarItems },
				React.createElement(
					'div',
					{ className: 'user-info' },
					React.createElement(
						'div',
						{ className: 'info-form user-item' },
						React.createElement('img', { className: 'avatar', src: Store.fixURL(this.state.info.avatarImg) || './images/DefaultAvatar.png' }),
						React.createElement(
							'div',
							{ className: 'details' },
							React.createElement(
								'span',
								{ className: 'last-logintime' },
								'\u6700\u8FD1\u4E00\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A',
								this.state.info.lastLoginTime || '还未登陆'
							),
							React.createElement(
								'div',
								{ className: 'name' },
								this.state.info.name
							),
							React.createElement(
								'div',
								null,
								React.createElement('i', { className: 'fa fa-clock-o' }),
								'\u521B\u5EFA\u65F6\u95F4\uFF1A',
								this.state.info.createTime
							),
							React.createElement(
								'div',
								null,
								React.createElement('i', { className: 'fa fa-envelope' }),
								'\u90AE\u7BB1\uFF1A',
								this.state.info.email
							),
							React.createElement(
								'div',
								null,
								React.createElement('i', { className: 'fa fa-phone' }),
								'\u624B\u673A\u53F7\uFF1A',
								this.state.info.phone
							),
							React.createElement(
								'div',
								null,
								this.state.info.note
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'rt-panel c-default' },
						React.createElement(
							'div',
							{ className: 'p-head' },
							'\u90E8\u95E8\u53CA\u89D2\u8272'
						),
						React.createElement(
							'div',
							{ className: 'p-body' },
							React.createElement(UI.TreeListView, { disabled: true, cascade: false, enableCheckbox: true, onItemCheckboxChange: this.__onTreeMenuItemCheckboxChange, value: this.state.info.roleIds, itemContentRender: this.__itemContentRender, ref: 'maintreemenu', activeAll: true, data: this.state.data })
						)
					)
				)
			);
		}
	});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var TreeModelView = __webpack_require__(13);
	var ProjectBug = __webpack_require__(26);

	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: 'zn_admin_project',
				title: '项目管理',
				leftWidth: 20,
				pid: 0,
				fields: [{ title: '模块名称', type: 'Input', name: 'title' }, { title: '版本号', type: 'Input', name: 'version' }, { title: '优先级', type: 'Select', name: 'priority', data: [{ text: '正常', value: 1 }, { text: '紧急', value: 2 }, { text: '非常紧急', value: 3 }] }, { title: '开始时间', name: 'beginTime', type: 'Timer' }, { title: '结束时间', name: 'endTime', type: 'Timer' }, { title: '文件', name: 'files', type: 'FileUploader', action: '/znadmin/uploadFiles' }, { title: '功能表述', type: 'RichEditor', name: 'description' }, { title: '备注', type: 'Textarea', name: 'note' }]
			};
		},
		__rightRender: function __rightRender(tree) {
			var _currItem = tree.state.currItem;
			return React.createElement(ProjectBug, { data: _currItem ? _currItem.props.data : null });
		},
		__itemContentRender: function __itemContentRender(item) {
			//console.log(item);
			return React.createElement(
				'div',
				{ style: { display: 'inline-flex', lineHeight: '25px' } },
				React.createElement(
					'span',
					{ className: 'title' },
					item.data.title
				),
				React.createElement(
					'span',
					{ className: 'version' },
					'(',
					item.data.version,
					')'
				)
			);
		},
		render: function render() {
			return React.createElement(TreeModelView, _extends({ itemContentRender: this.__itemContentRender }, this.props, { rightRender: this.__rightRender }));
		}
	});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				data: null,
				model: 'zn_admin_project_bug'
			};
		},
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			if (nextProps.data !== this.props.data) {
				this.state.data._data.where = {
					projectId: nextProps.data.id
				};
				this.state.data.exec();
			}
		},
		getInitialState: function getInitialState() {
			var _where = {};
			if (this.props.data) {
				_where.projectId = this.props.data.id;
			}
			return {
				data: Store.post('/znadmin/model/paging', {
					model: this.props.model,
					where: _where
				}),
				items: [{ title: '操作', width: 60, textAlign: 'center' }, { title: '问题', name: 'title', width: 220, filter: { type: 'Input', opts: ['like'] } }, { title: '状态', name: 'state', width: 80, filter: { type: 'Menu', data: [{ text: '待处理', value: 0 }, { text: '处理中...', value: 2 }, { text: '已经解决', value: 3 }, { text: '已经确认', value: 3 }], opts: ['='] } }, { title: '优先级', name: 'priority', width: 80, filter: { type: 'Menu', data: [{ text: '正常', value: 1 }, { text: '紧急', value: 2 }, { text: '非常紧急', value: 3 }], opts: ['='] } }, { title: '开始时间', name: 'beginTime', width: 140 }, { title: '结束时间', name: 'endTime', width: 140 }, { title: '完成时间', name: 'finishTime', width: 140 }, { title: '提交时间', name: 'createTime', width: 140 }, { title: '描述', name: 'note' }],
				formItems: [{ title: '问题', name: 'title', type: 'Textarea' }, { title: '版本号', type: 'Input', name: 'version' }, {
					title: '优先级',
					type: 'Select',
					name: 'priority',
					data: [{ text: '正常', value: 1 }, { text: '紧急', value: 2 }, { text: '非常紧急', value: 3 }]
				}, { title: '开始时间', name: 'beginTime', type: 'Timer' }, { title: '结束时间', name: 'endTime', type: 'Timer' }, { title: '附件', name: 'files', type: 'FileUploader', action: '/znadmin/uploadFiles' }, { title: '问题描述', name: 'description', type: 'RichEditor' }, { title: '解决方案', name: 'solution', type: 'RichEditor' }],
				toolbarItems: [{ text: '添加', icon: 'fa-plus' }]
			};
		},
		__onRowActions: function __onRowActions(rtitem, data) {
			var _data = this.state.data;
			var _self = this;
			switch (rtitem.props.icon) {
				case 'fa-remove':
					Alert.show({
						width: 280,
						title: '提示',
						content: '确定删除该数据吗？',
						onConfirm: function onConfirm() {
							Store.post('/znadmin/model/deleteNode', {
								model: _self.props.model,
								id: data.id
							}).exec().then(function (data) {
								Toast.success('删除成功！');
								_data.refresh();
							});
						}
					});
					break;
				case 'fa-edit':
					this.__updateItem(data);
					break;
			}
		},
		__onView: function __onView() {},
		__onTableColumnRender: function __onTableColumnRender(rowIndex, columnIndex, data, item, value) {
			var _this = this;

			switch (columnIndex) {
				case 0:
					return React.createElement(UI.ListView, {
						className: 'rt-flex',
						data: [{ text: '删除', icon: 'fa-remove' }, { text: '修改', icon: 'fa-edit' }],
						itemRender: function itemRender(item, index) {
							return React.createElement('i', { title: item.text, className: 'fa ' + item.icon, style: item.style });
						},
						onClick: function onClick(value, rtitem) {
							return _this.__onRowActions(rtitem, data);
						}
					});
				case 1:
					return React.createElement(
						'a',
						{ style: { textDecoration: 'underline' }, onClick: function onClick() {
								return _this.__onView(data);
							} },
						value
					);
				case 2:
					switch (+value) {
						case 0:
							return React.createElement(
								'span',
								null,
								'\u7B49\u5F85\u5904\u7406'
							);
						case 1:
							return React.createElement(
								'span',
								{ style: { color: 'yellow' } },
								'\u5904\u7406\u4E2D'
							);
						case 2:
							return React.createElement(
								'span',
								{ style: { color: 'red' } },
								'\u5DF2\u7ECF\u89E3\u51B3'
							);
						case 3:
							return React.createElement(
								'span',
								{ style: { color: 'red' } },
								'\u5DF2\u7ECF\u786E\u8BA4'
							);
					}
					return null;
				case 3:
					switch (+value) {
						case 1:
							return React.createElement(
								'span',
								null,
								'\u6B63\u5E38'
							);
						case 2:
							return React.createElement(
								'span',
								{ style: { color: '#F44336' } },
								'\u7D27\u6025'
							);
						case 3:
							return React.createElement(
								'span',
								{ style: { color: 'red' } },
								'\u975E\u5E38\u7D27\u6025'
							);
					}
					return null;
			}
		},
		__updateItem: function __updateItem(data) {
			Popup.dialog({
				title: '修改',
				hStyle: { backgroundColor: '#0B72A5' },
				width: 780,
				content: React.createElement(UI.Form, {
					method: 'POST',
					layout: 'stacked',
					action: '/znadmin/model/updateNode',
					exts: { model: this.props.model, where: { id: data.id } },
					merge: 'data',
					value: Store.post('/znadmin/model/selectOne', { model: this.props.model, where: { id: data.id } }),
					style: { margin: 25 },
					syncSubmit: false,
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '修改', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: this.state.formItems })
			});
		},
		__doSuccess: function __doSuccess() {
			Popup.close('dialog');
			Toast.success('操作成功');
			this.state.data.refresh();
		},
		__addItem: function __addItem(pid) {
			if (!this.props.data) {
				Toast.warning('请先选择左边商品类型项');
				return false;
			}
			Popup.dialog({
				title: '添加',
				width: 780,
				content: React.createElement(UI.Form, {
					method: 'POST',
					layout: 'stacked',
					action: '/znadmin/model/addNode',
					exts: { model: this.props.model },
					hiddens: { projectId: this.props.data.id },
					merge: 'data',
					style: { margin: 25 },
					syncSubmit: false,
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: this.state.formItems })
			});
		},
		__onToolbarClick: function __onToolbarClick(rtitem) {
			switch (rtitem.icon) {
				case 'fa-plus':
					this.__addItem();
					break;
			}
		},
		render: function render() {
			return React.createElement(
				UI.Page,
				{ title: '\u95EE\u9898\u5217\u8868', icon: 'fa-list-ul',
					onToolbarClick: this.__onToolbarClick,
					toolbarItems: this.state.toolbarItems },
				React.createElement(UI.PagerView, {
					view: 'Table',
					checkbox: 0,
					enableFilter: true,
					showHeader: true,
					data: this.state.data,
					columnRender: this.__onTableColumnRender,
					onTableRowClick: this.__onTableRowClick,
					items: this.state.items })
			);
		}
	});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var TreeModelView = __webpack_require__(13);
	var UsersForRoles = __webpack_require__(28);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: 'zn_admin_role',
				pid: 0,
				title: '部门及角色管理',
				menuId: 0,
				fields: [{ title: '名称', type: 'Input', name: 'title' }, { title: '类型', type: 'Radio', name: 'type', value: 1,
					data: [{ text: '分类', value: 0 }, { text: '部门', value: 1 }, { text: '角色', value: 2 }]
				}, { title: '说明', type: 'Textarea', name: 'note' }]
			};
		},
		componentDidMount: function componentDidMount() {},
		__rightRender: function __rightRender(treeMenu) {
			return React.createElement(UsersForRoles, { roleId: treeMenu.state.currItem ? treeMenu.state.currItem.props.data.id : null });
		},
		__itemContentRender: function __itemContentRender(item) {
			var _data = item.data;
			switch (_data.type) {
				case 0:
					return React.createElement(
						'span',
						null,
						_data.id + '、' + _data.title
					);
				case 1:
					return React.createElement(
						'span',
						null,
						React.createElement('i', { title: '\u8FD9\u662F\u90E8\u95E8', className: 'fa fa-sitemap', style: { margin: 5, color: '#d9534f' } }),
						_data.id + '、' + _data.title
					);
				case 2:
					return React.createElement(
						'span',
						null,
						React.createElement('i', { title: '\u8FD9\u662F\u89D2\u8272', className: 'fa fa-graduation-cap', style: { margin: 5 } }),
						_data.id + '、' + _data.title
					);
			}
		},
		render: function render() {
			return React.createElement(TreeModelView, _extends({}, this.props, { rightRender: this.__rightRender, itemContentRender: this.__itemContentRender }));
		}
	});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getInitialState: function getInitialState() {
			return {
				data: Store.post('/znadmin/model/paging', {
					model: 'zn_admin_user'
				})
			};
		},
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			if (nextProps.roleId != this.props.roleId) {
				this.state.data._data.where = {
					"0&<>": "locate('," + nextProps.roleId + ",',roleIds)"
				};
				this.state.data.exec();
			}
		},
		__onUserClick: function __onUserClick(event, item, index) {
			event.stopPropagation();
			Session.jump('/main/znadmin/UserInfo', { userId: item.id });
		},
		__itemRender: function __itemRender(item, index) {
			var _this = this;

			return React.createElement(
				'div',
				{ className: 'user-item' },
				React.createElement('img', { className: 'avatar', src: Store.fixURL(item.avatarImg || '') }),
				React.createElement(
					'div',
					{ className: 'details' },
					React.createElement(
						'span',
						{ className: 'last-logintime' },
						item.lastLoginTime || '还未登陆'
					),
					React.createElement(
						'div',
						{ className: 'name', onClick: function onClick(event) {
								return _this.__onUserClick(event, item, index);
							} },
						item.name
					),
					React.createElement(
						'div',
						null,
						React.createElement('i', { className: 'fa fa-clock-o' }),
						'\u521B\u5EFA\u65F6\u95F4\uFF1A',
						item.createTime
					),
					React.createElement(
						'div',
						null,
						React.createElement('i', { className: 'fa fa-envelope' }),
						'\u90AE\u7BB1\uFF1A',
						item.email
					),
					React.createElement(
						'div',
						null,
						React.createElement('i', { className: 'fa fa-phone' }),
						'\u624B\u673A\u53F7\uFF1A',
						item.phone
					)
				)
			);
		},
		render: function render() {
			return React.createElement(UI.PagerView, {
				view: 'ListView',
				className: 'rt-list-view-border',
				textKey: 'name',
				valueKey: 'id',
				selectMode: 'none',
				itemRender: this.__itemRender,
				data: this.state.data });
		}
	});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: 'zn_admin_user'
			};
		},
		getInitialState: function getInitialState() {
			return {
				data: Store.post('/znadmin/model/paging', {
					model: this.props.model
				}),
				items: [{ title: '用户名', name: 'name', width: 80 }, { title: '邮箱', name: 'email', width: 200 }, { title: '手机号', name: 'phone', width: 120 }, { title: '地址', name: 'address', width: 200 }, { title: '说明', name: 'note' }],
				formItems: [{ title: '用户名', name: 'name', type: 'Input', required: true, error: '用户名必填项!' }, { title: '邮箱', name: 'email', type: 'Input' }, { title: '手机号', name: 'phone', type: 'Input' }, { title: '地址', name: 'address', type: 'Input' }, { title: '说明', name: 'note', type: 'Textarea' }],
				toolbarItems: [{ text: '添加', name: 'add', icon: 'fa-plus', style: { marginRight: 5 } }, { text: '删除', name: 'remove', status: 'danger', icon: 'fa-remove', style: { marginRight: 5 } }]
			};
		},
		__doSuccess: function __doSuccess() {
			Popup.close('dialog');
			Toast.success('操作成功！');
			this.state.data.refresh();
		},
		__addItem: function __addItem() {
			Popup.dialog({
				title: '新增用户',
				hStyle: { backgroundColor: '#0B72A5' },
				width: 480,
				content: React.createElement(UI.Form, {
					method: 'POST',
					layout: 'stacked',
					action: '/znadmin/model/addNode',
					merge: 'data',
					exts: { model: this.props.model },
					style: { margin: 25 },
					syncSubmit: false,
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '新增用户', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: this.state.formItems })
			});
		},
		__updateItem: function __updateItem(data) {
			Popup.dialog({
				title: '更新用户信息',
				hStyle: { backgroundColor: '#0B72A5' },
				width: 480,
				content: React.createElement(UI.Form, {
					method: 'POST',
					layout: 'stacked',
					action: '/znadmin/model/updateNode',
					exts: { model: this.props.model, where: { id: data.id } },
					merge: 'data',
					data: data,
					style: { margin: 25 },
					syncSubmit: false,
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '更新', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: this.state.formItems })
			});
		},
		__removeItems: function __removeItems() {
			var _self = this,
			    _values = this.refs.table.getValue();
			if (_values && _values.length) {
				Popup.confirm({
					content: '确认删除这' + _values.length + '个用户吗？',
					onConfirm: function () {
						Store.post('/znadmin/model/deleteNodes', { model: this.props.model, ids: _values }).exec().then(function () {
							Toast.success('删除成功');
							_self.state.data.refresh();
						}, function (data) {
							Toast.warning('删除失败: ' + data.result);
						});
					}.bind(this)
				});
			} else {
				Toast.warning('请先选择要删除的用户');
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
		__onEditItem: function __onEditItem(event, item) {
			event.stopPropagation();
			this.__updateItem(item);
		},
		__itemRender: function __itemRender(item, index) {
			var _this = this;

			return React.createElement(
				'div',
				{ className: 'user-item' },
				React.createElement('img', { className: 'avatar', src: './images/DefaultAvatar.png' }),
				React.createElement(
					'div',
					{ className: 'details' },
					React.createElement(
						'span',
						{ className: 'last-logintime' },
						item.lastLoginTime || '还未登陆'
					),
					React.createElement(
						'div',
						{ className: 'name', onClick: function onClick(event) {
								return _this.__onUserClick(event, item, index);
							} },
						item.name,
						React.createElement('i', { style: { margin: 5, color: '#971818' }, className: 'fa fa-edit', onClick: function onClick(event) {
								return _this.__onEditItem(event, item);
							} })
					),
					React.createElement(
						'div',
						null,
						React.createElement('i', { className: 'fa fa-clock-o' }),
						'\u521B\u5EFA\u65F6\u95F4\uFF1A',
						item.createTime
					),
					React.createElement(
						'div',
						null,
						React.createElement('i', { className: 'fa fa-envelope' }),
						'\u90AE\u7BB1\uFF1A',
						item.email
					),
					React.createElement(
						'div',
						null,
						React.createElement('i', { className: 'fa fa-phone' }),
						'\u624B\u673A\u53F7\uFF1A',
						item.phone
					)
				)
			);
		},
		__onTableColumnRender: function __onTableColumnRender(rowIndex, columnIndex, data, item, value) {
			switch (columnIndex) {
				case 1:
					return React.createElement(
						'a',
						{ href: '#/main/znadmin/UserInfo?userId=' + data.id },
						value
					);
			}
		},
		render: function render() {
			return React.createElement(
				UI.Page,
				{
					toolbarItems: this.state.toolbarItems,
					onToolbarClick: this.__onToolbarClick,
					title: '\u7CFB\u7EDF\u8D26\u6237\u7BA1\u7406' },
				React.createElement(UI.PagerView, {
					ref: 'table',
					view: 'Table',
					enableFilter: true,
					checkbox: 50,
					showHeader: true,
					columnRender: this.__onTableColumnRender,
					onTableRowClick: this.__onTableRowClick,
					data: this.state.data,
					items: this.state.items })
			);
		}
	});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);

	module.exports = React.createClass({
		displayName: 'exports',

		getInitialState: function getInitialState() {
			return {
				userId: this.props.userId,
				info: null,
				data: Store.post('/znadmin/model/select', { model: 'zn_admin_role', where: { pid: 0 } })
			};
		},
		componentDidMount: function componentDidMount() {
			this.__loadUserInfo();
		},
		__loadUserInfo: function __loadUserInfo() {
			Store.post('/znadmin/user/findUserById', { userId: this.state.userId }).exec().then(function (data) {
				this.setState({
					info: data.result
				});
			}.bind(this));
		},
		__onTreeMenuItemCheckboxChange: function __onTreeMenuItemCheckboxChange(value) {
			Store.post('/znadmin/user/updateUser', { data: { roleIds: value }, userId: this.state.info.id }).exec().then(function (data) {
				Popup.message({
					content: '保存成功!',
					type: 'success'
				});
			});
		},
		__itemContentRender: function __itemContentRender(props) {
			var _icon = '';
			if (props.data.type == 1) {
				_icon = 'fa-sitemap';
			}
			if (props.data.type == 2) {
				_icon = 'fa-graduation-cap';
			}
			return React.createElement(
				'span',
				null,
				React.createElement('i', { style: { margin: 5 }, className: 'fa ' + _icon }),
				props.data.id + '、' + props.data.title
			);
		},
		render: function render() {
			if (!this.state.info) {
				return null;
			}
			return React.createElement(
				UI.Page,
				{ title: this.state.info.name, icon: 'fa-newspaper-o', toolbarItems: this.state.toolbarItems },
				React.createElement(
					'div',
					{ className: 'user-info' },
					React.createElement(
						'div',
						{ className: 'info-form user-item' },
						React.createElement('img', { className: 'avatar', src: './images/DefaultAvatar.png' }),
						React.createElement(
							'div',
							{ className: 'details' },
							React.createElement(
								'span',
								{ className: 'last-logintime' },
								'\u6700\u8FD1\u4E00\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A',
								this.state.info.lastLoginTime || '还未登陆'
							),
							React.createElement(
								'div',
								{ className: 'name' },
								this.state.info.name
							),
							React.createElement(
								'div',
								null,
								React.createElement('i', { className: 'fa fa-clock-o' }),
								'\u521B\u5EFA\u65F6\u95F4\uFF1A',
								this.state.info.createTime
							),
							React.createElement(
								'div',
								null,
								React.createElement('i', { className: 'fa fa-envelope' }),
								'\u90AE\u7BB1\uFF1A',
								this.state.info.email
							),
							React.createElement(
								'div',
								null,
								React.createElement('i', { className: 'fa fa-phone' }),
								'\u624B\u673A\u53F7\uFF1A',
								this.state.info.phone
							),
							React.createElement(
								'div',
								null,
								this.state.info.note
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'rt-panel c-default' },
						React.createElement(
							'div',
							{ className: 'p-head' },
							'\u90E8\u95E8\u53CA\u89D2\u8272'
						),
						React.createElement(
							'div',
							{ className: 'p-body' },
							React.createElement(UI.TreeListView, { cascade: false, enableCheckbox: true, onItemCheckboxChange: this.__onTreeMenuItemCheckboxChange, value: this.state.info.roleIds, itemContentRender: this.__itemContentRender, ref: 'maintreemenu', activeAll: true, data: this.state.data })
						)
					)
				)
			);
		}
	});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: 'zn_admin_user_log'
			};
		},
		getInitialState: function getInitialState() {
			return {
				data: Store.post('/znadmin/model/paging', {
					model: this.props.model
				}),
				items: [{ title: '操作人', name: 'userId_convert', width: 100 }, { title: '操作时间', name: 'createTime', width: 180 }, { title: '类型', name: 'actionType', width: 80 }, { title: '说明', name: 'note' }]
			};
		},
		__onToolbarClick: function __onToolbarClick() {},
		render: function render() {
			return React.createElement(
				UI.Page,
				{
					toolbarItems: [{ text: '导出' }],
					onToolbarClick: this.__onToolbarClick,
					title: '\u7CFB\u7EDF\u8D26\u6237\u767B\u5F55\u65E5\u5FD7' },
				React.createElement(UI.PagerView, {
					view: 'Table',
					enableFilter: false,
					checkbox: 0,
					showHeader: true,
					data: this.state.data,
					items: this.state.items })
			);
		}
	});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = zn.arrayValueToObject(['Menu', 'MyInfo', 'Project', 'Role', 'User', 'UserInfo', 'UserLog', 'UsersForRoles', 'Var'], function (value, index) {
	    return __webpack_require__(35)("./" + value + '.js');
	});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./Menu.js": 22,
		"./MyInfo.js": 24,
		"./Project.js": 25,
		"./ProjectBug.js": 26,
		"./Role.js": 27,
		"./User.js": 29,
		"./UserInfo.js": 30,
		"./UserLog.js": 33,
		"./UsersForRoles.js": 28,
		"./Var.js": 23,
		"./index.js": 34
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 35;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);

	module.exports = React.createClass({
		displayName: 'exports',

		getInitialState: function getInitialState() {
			return {
				userId: Session.json().id || 1,
				toolbarItems: [],
				info: null,
				kylinInfo: null,
				data: Store.post('/znadmin/model/select', { model: 'zn_admin_role', where: { pid: 0 } })
			};
		},
		componentDidMount: function componentDidMount() {},
		render: function render() {
			if (!this.state.info) {
				return null;
			}
			return React.createElement(
				UI.Page,
				{ title: '控制面板', icon: 'fa-newspaper-o', toolbarItems: this.state.toolbarItems },
				React.createElement(
					'div',
					{ className: 'user-info' },
					React.createElement(
						'div',
						{ className: 'info-form user-item' },
						React.createElement('img', { className: 'avatar', src: './images/DefaultAvatar.png' }),
						React.createElement(
							'div',
							{ className: 'details' },
							React.createElement(
								'span',
								{ className: 'last-logintime' },
								'\u6700\u8FD1\u4E00\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A',
								this.state.info.lastLoginTime || '2016-8-21 14:38:20'
							),
							React.createElement(
								'div',
								{ className: 'name' },
								this.state.info.name
							),
							React.createElement(
								'div',
								null,
								React.createElement('i', { className: 'fa fa-clock-o' }),
								'\u521B\u5EFA\u65F6\u95F4\uFF1A',
								this.state.info.createTime
							),
							React.createElement(
								'div',
								null,
								React.createElement('i', { className: 'fa fa-envelope' }),
								'\u90AE\u7BB1\uFF1A',
								this.state.info.email
							),
							React.createElement(
								'div',
								null,
								React.createElement('i', { className: 'fa fa-phone' }),
								'\u624B\u673A\u53F7\uFF1A',
								this.state.info.phone
							),
							React.createElement(
								'div',
								null,
								this.state.info.note
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'rt-panel c-default' },
						React.createElement(
							'div',
							{ className: 'p-head' },
							'\u90E8\u95E8\u53CA\u89D2\u8272'
						),
						React.createElement(
							'div',
							{ className: 'p-body' },
							React.createElement(UI.TreeMenu, { cascade: false, enableCheckbox: true, onItemCheckboxChange: this.__onTreeMenuItemCheckboxChange, value: this.state.info.roleIds, itemContentRender: this.__itemContentRender, ref: 'maintreemenu', activeAll: true, data: this.state.data })
						)
					)
				)
			);
		}
	});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getInitialState: function getInitialState() {
			return {
				action: 'login'
			};
		},
		__doSuccess: function __doSuccess(data, xhr) {
			var _user = data.result;
			//document.cookie = _user['@session'];
			Session.clear().set(_user).jump('/main/znadmin/MyInfo');
		},
		renderForm: function renderForm() {
			var _this = this;

			switch (this.state.action) {
				case 'login':
					return React.createElement(
						'div',
						null,
						React.createElement(UI.Form, {
							method: 'POST',
							layout: 'stacked',
							action: '/znadmin/user/login',
							style: { margin: 25 },
							btns: [{
								text: '登录',
								type: 'submit',
								float: 'none',
								textAlign: 'center',
								style: { marginTop: 25, fontSize: 16, fontWeight: 600, height: 40, lineHeight: '30px' }
							}],
							onSubmitSuccess: this.__doSuccess,
							onSubmitError: function onSubmitError(data) {
								return Popup.message({ content: "登录失败: " + data.result, type: 'warning' });
							},
							items: [{ title: '用户名', placeholder: '用户名', name: 'name', type: 'Input', required: true, error: '用户名是必填项' }, { title: '密码', placeholder: '密码 (不少于6位)', name: 'password', type: 'Input', attrs: { type: 'password' }, required: true, error: '密码是必填项且不能少于6位' }] }),
						React.createElement(
							'div',
							null,
							React.createElement(
								'a',
								{ onClick: function onClick() {
										return _this.setState({ action: 'forget' });
									}, style: { float: 'right', marginRight: 25, color: '#0B72A5', cursor: 'pointer' } },
								'\u5FD8\u8BB0\u5BC6\u7801?'
							)
						)
					);
				case 'forget':
					return React.createElement(
						'div',
						null,
						React.createElement(UI.Form, {
							method: 'POST',
							layout: 'stacked',
							style: { margin: 25 },
							btns: [{
								text: '提交',
								type: 'submit',
								float: 'none',
								textAlign: 'center',
								style: { marginTop: 25, fontSize: 16, fontWeight: 600, height: 40, lineHeight: '30px' }
							}],
							onSubmitSuccess: this.__doSuccess,
							onSubmitError: function onSubmitError(data) {
								return Popup.message({ content: "注册失败: " + data.result, type: 'warning' });
							},
							items: [{ title: '邮箱', placeholder: '邮箱 (注册使用邮箱)', name: 'email', type: 'Input', required: true, error: '邮箱是必填项' }] }),
						React.createElement(
							'div',
							null,
							React.createElement(
								'a',
								{ onClick: function onClick() {
										return _this.setState({ action: 'login' });
									}, style: { float: 'left', marginLeft: 25, color: '#0B72A5', cursor: 'pointer' } },
								'<<登录'
							)
						)
					);
			}
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'v-login admin' },
				React.createElement('img', { className: 'bg-img', src: './images/bg/4.jpg' }),
				React.createElement(
					'div',
					{ className: 'main animated slideInDown' },
					React.createElement(
						'div',
						{ className: 'head' },
						'\u4E0A\u6D77\u817E\u9E9F\u6570\u636E\u7BA1\u7406\u4E2D\u5FC3'
					),
					React.createElement(
						'div',
						{ className: 'logo' },
						React.createElement('img', { className: 'logo-img', src: './images/logo.jpg' })
					),
					React.createElement(
						'div',
						{ className: 'form' },
						this.renderForm()
					),
					React.createElement(
						'div',
						{ className: 'foot' },
						'\u4E0A\u6D77\u817E\u9E9F\u6587\u5316\u4F20\u5A92\u6709\u9650\u516C\u53F8 @2016'
					)
				)
			);
		}
	});

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getInitialState: function getInitialState() {
			return {
				action: 'login'
			};
		},
		__doSuccess: function __doSuccess(data, xhr) {
			var _user = data.result;
			Session.clear().set(_user).jump('/main/znadmin/MyInfo');
		},
		renderForm: function renderForm() {
			var _this = this;

			switch (this.state.action) {
				case 'login':
					return React.createElement(
						'div',
						null,
						React.createElement(UI.Form, {
							method: 'POST',
							layout: 'stacked',
							action: '/znadmin/user/login',
							style: { margin: 25 },
							btns: [{
								text: '登录',
								type: 'submit',
								float: 'none',
								textAlign: 'center',
								style: { marginTop: 25, fontSize: 16, fontWeight: 600, height: 40, lineHeight: '30px' }
							}],
							onSubmitSuccess: this.__doSuccess,
							onSubmitError: function onSubmitError(data) {
								return Popup.message({ content: "登录失败: " + data.result, type: 'warning' });
							},
							items: [{ title: '用户名', placeholder: '用户名', name: 'name', type: 'Input', required: true, error: '用户名是必填项' }, { title: '密码', placeholder: '密码 (不少于6位)', name: 'password', type: 'Input', attrs: { type: 'password' }, required: true, error: '密码是必填项且不能少于6位' }] }),
						React.createElement(
							'div',
							null,
							React.createElement(
								'a',
								{ onClick: function onClick() {
										return _this.setState({ action: 'forget' });
									}, style: { float: 'right', marginRight: 25, color: '#0B72A5', cursor: 'pointer' } },
								'\u5FD8\u8BB0\u5BC6\u7801?'
							)
						)
					);
				case 'forget':
					return React.createElement(
						'div',
						null,
						React.createElement(UI.Form, {
							method: 'POST',
							layout: 'stacked',
							style: { margin: 25 },
							btns: [{
								text: '提交',
								type: 'submit',
								float: 'none',
								textAlign: 'center',
								style: { marginTop: 25, fontSize: 16, fontWeight: 600, height: 40, lineHeight: '30px' }
							}],
							onSubmitSuccess: this.__doSuccess,
							onSubmitError: function onSubmitError(data) {
								return Popup.message({ content: "注册失败: " + data.result, type: 'warning' });
							},
							items: [{ title: '邮箱', placeholder: '邮箱 (注册使用邮箱)', name: 'email', type: 'Input', required: true, error: '邮箱是必填项' }] }),
						React.createElement(
							'div',
							null,
							React.createElement(
								'a',
								{ onClick: function onClick() {
										return _this.setState({ action: 'login' });
									}, style: { float: 'left', marginLeft: 25, color: '#0B72A5', cursor: 'pointer' } },
								'<<登录'
							)
						)
					);
			}
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'v-login admin' },
				React.createElement('img', { className: 'bg-img', src: './images/bg/4.jpg' }),
				React.createElement(
					'div',
					{ className: 'main animated slideInDown' },
					React.createElement(
						'div',
						{ className: 'head' },
						'\u4E0A\u6D77\u817E\u9E9F\u6570\u636E\u7BA1\u7406\u4E2D\u5FC3'
					),
					React.createElement(
						'div',
						{ className: 'logo' },
						React.createElement('img', { className: 'logo-img', src: './images/logo.jpg' })
					),
					React.createElement(
						'div',
						{ className: 'form' },
						this.renderForm()
					),
					React.createElement(
						'div',
						{ className: 'foot' },
						'\u4E0A\u6D77\u817E\u9E9F\u6587\u5316\u4F20\u5A92\u6709\u9650\u516C\u53F8 @2016'
					)
				)
			);
		}
	});

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getInitialState: function getInitialState() {
			return {
				data: Store.post('/znadmin/model/select', { model: 'zn_admin_menu', ifEnabledRights: true, where: { pid: 2 } })
			};
		},
		__onMenuItemClick: function __onMenuItemClick(item) {
			var _data = item.props.data;
			if (_data.url) {
				Session.jump(_data.url);
			}
		},
		__itemContentRender: function __itemContentRender(item, index) {
			return React.createElement(
				'span',
				null,
				React.createElement('i', { className: 'fa ' + item.data.icon, style: { width: 16, margin: 10 } }),
				item.data.title
			);
		},
		__onListItemClick: function __onListItemClick(props, rtitem) {
			switch (rtitem.props.text) {
				case '我的信息':
					Session.jump('/main/znadmin/MyInfo');
					break;
				case '退出':
					Session.doHome();
					break;
			}
			Popover.close('_click');
		},
		render: function render() {
			if (!Session.json()) {
				Session.jump('/index');
			} else {
				if (!this.props.request || this.props.request.name == '') {
					Session.jump('/main/znadmin/MyInfo');
				}
			}

			var _title = Session.json().name || Session.json().email;
			return React.createElement(
				UI.FixedLayout,
				{
					style: { position: 'fixed' },
					hStyle: { borderBottom: '1px solid #3d3d3d' },
					direction: 'v',
					unit: 'rem',
					end: 3,
					begin: 8 },
				React.createElement(
					'div',
					{ className: 'main-top admin' },
					React.createElement('div', { className: 'rt-fl' }),
					React.createElement(
						'div',
						{ className: 'right' },
						React.createElement(
							UI.Dropdown,
							null,
							React.createElement(
								'div',
								{ className: 'info' },
								React.createElement('img', { className: 'avatar', src: Store.fixURL(Session.json().avatarImg) || "./images/DefaultAvatar.png", style: { width: 32, height: 32, position: 'relative', top: 10, marginRight: 5 } }),
								React.createElement(
									'span',
									null,
									_title,
									React.createElement('i', { style: { margin: 5 }, className: 'fa fa-angle-down' })
								)
							),
							React.createElement(UI.ListView, { selectMode: 'none', data: [{ text: '我的信息' }, { text: '退出' }], onItemClick: this.__onListItemClick, style: { backgroundColor: '#FFF' } })
						)
					)
				),
				React.createElement(
					UI.ActivityLayout,
					{
						begin: 20,
						unit: 'rem',
						hStyle: { borderRight: '1px solid #e9e9e9' },
						fStyle: { right: 10, left: '21rem' },
						direction: 'h' },
					React.createElement(UI.TreeListView, { itemContentRender: this.__itemContentRender, activeAll: true, onClick: this.__onMenuItemClick, data: this.state.data }),
					this.props.view && React.createElement(this.props.view, this.props.request.search)
				),
				React.createElement(
					'div',
					{ className: 'main-foot' },
					'\u4E0A\u6D77\u817E\u9E9F\u6587\u5316\u4F20\u5A92\u6709\u9650\u516C\u53F8 @2016 - @2017'
				)
			);
		}
	});

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = zn.arrayValueToObject(['Menu', 'MyInfo', 'Project', 'Role', 'User', 'UserInfo', 'UserLog', 'UsersForRoles', 'Var'], function (value, index) {
	    return __webpack_require__(47)("./" + value + '.js');
	});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./Dashboard.js": 36,
		"./Index.js": 37,
		"./Login.js": 40,
		"./Main.js": 43,
		"./exports.js": 46
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 47;


/***/ })
/******/ ]);