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

	zn.plugin.admin = __webpack_require__(2);
	zn.deepEachObject({}, function (value) {
	  return __webpack_require__(14)(value);
	});
	module.exports = zn.react.extendPath('/zn.plugin.admin', __webpack_require__(28));

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
				data: zn.store.post('/zn.plugin.admin/model/paging', {
					model: this.props.model
				}),
				currItem: null,
				toolbarItems: [{ text: '新建项目', name: 'addItem', icon: 'fa-plus' }, { text: '编辑项目', name: 'updateItem', icon: 'fa-edit' }, { text: '删除项目', name: 'deleteItem', icon: 'fa-remove' }]
			};
		},
		__onTableRowClick: function __onTableRowClick(event, data, row, table) {
			this.state.currItem = data;
		},
		__doSuccess: function __doSuccess() {
			zn.modal.close();
			zn.toast.success('操作成功！');
			this.state.data.refresh();
		},
		__addItem: function __addItem(pid) {
			zn.dialog({
				title: '添加项',
				content: React.createElement(zn.react.Form, {
					action: '/zn.plugin.admin/model/insert',
					exts: { model: this.props.model },
					merge: 'values',
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '新建项目', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: this.props.insertInputs })
			});
		},
		__updateItem: function __updateItem(data) {
			zn.dialog({
				title: '更新项目信息',
				content: React.createElement(zn.react.Form, {
					method: 'POST',
					layout: 'stacked',
					action: '/zn.plugin.admin/model/updates',
					exts: { model: this.props.model },
					merge: 'updates',
					data: data,
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
				zn.toast.warning('必须选择主项');
				return false;
			}
			switch (item.name) {
				case 'updateItem':
					this.__updateItem(this.state.currItem);
					break;
				case 'deleteItem':
					zn.confirm('确认删除该项吗？', '提示', function () {
						zn.http.post('/zn.plugin.admin/model/delete', {
							model: this.props.model,
							where: {
								id: this.state.currItem.id
							}
						}).then(function (data) {
							this.state.data.refresh();
							zn.toast.success('删除成功！');
						}.bind(this), function (data) {
							zn.toast.error('删除出错: ' + data.result);
						});
					}.bind(this));
					break;
			}
		},
		render: function render() {
			return React.createElement(
				zn.react.ActivityLayout,
				{ direction: 'top-bottoom', begin: 35, barWidth: 3 },
				React.createElement(zn.react.ButtonGroup, { float: 'right', items: this.state.toolbarItems, onClick: this.__onToolbarClick }),
				React.createElement(zn.react.PagerView, {
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
				data: zn.store.post('/zn.plugin.admin/model/paging', {
					model: this.props.model
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
					this.state.data.extend({ model: nextProps.model }).refresh();
				}.bind(this));
			}
		},
		__loadTableHeaders: function __loadTableHeaders(callback) {
			zn.http.get('/zn.plugin.admin/model/getModelProps?model=' + this.props.model).then(function (data) {
				this.setState({
					items: data.result
				});
				callback && callback(data);
			}.bind(this));
		},
		__onTableRowClick: function __onTableRowClick(event, data, row, table) {
			this._currItem = data;
		},
		__addItemSuccess: function __addItemSuccess() {
			zn.modal.close();
			zn.toast.success('添加成功！');
		},
		__addItem: function __addItem(pid) {
			var _this = this;

			zn.dialog({
				title: '添加项',
				content: React.createElement(zn.react.Form, {
					action: '/zn.plugin.admin/model/insert',
					exts: { model: this.props.model },
					merge: 'values',
					onSubmitSuccess: function onSubmitSuccess() {
						return _this.state.data.refresh();
					},
					btns: [{ text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: [{ name: 'title', title: 'title', type: 'text', required: true }] })
			});
		},
		__updateItem: function __updateItem(data) {
			var _this2 = this;

			zn.dialog({
				title: '修改项',
				content: React.createElement(zn.react.Form, {
					action: '/zn.plugin.admin/model/update',
					exts: { model: this.props.model },
					merge: 'updates',
					data: data,
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
				zn.toast.warning('必须选择主项');
				return false;
			}
			switch (item.name) {
				case 'updateItem':
					this.__updateItem(this.state.currItem);
					break;
				case 'deleteItem':
					zn.confirm('确认删除该项吗？', '提示', function () {
						zn.http.post('/zn.plugin.admin/model/delete', {
							model: this.props.model,
							where: {
								id: this.state.currItem.id
							}
						}).then(function (data) {
							this.state.data.refresh();
							zn.toast.success('删除成功！');
						}.bind(this), function (data) {
							zn.toast.error('删除出错: ' + data.result);
						});
					}.bind(this));
					break;
			}
		},
		render: function render() {
			return React.createElement(
				zn.react.ActivityLayout,
				{ direction: 'top-bottoom', begin: 35, barWidth: 3 },
				React.createElement(zn.react.ButtonGroup, { float: 'right', items: this.state.toolbarItems, onClick: this.__onToolbarClick }),
				React.createElement(zn.react.PagerView, {
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
				{ className: 'zn-plugin-admin-letter-selector' },
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
				data: zn.store.post('/zn.plugin.admin/model/paging', {
					model: this.props.model,
					where: this.props.where
				})
			};
		},
		__doSuccess: function __doSuccess() {
			zn.modal.close();
			zn.toast.success('操作成功！');
			this.state.data.refresh();
		},
		__addItem: function __addItem() {
			zn.dialog({
				title: '添加',
				content: React.createElement(zn.react.Form, {
					action: '/zn.plugin.admin/model/insert',
					exts: { model: this.props.model },
					hiddens: this.props.where,
					merge: 'values',
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: this.props.formItems })
			});
		},
		__removeItems: function __removeItems(data) {
			zn.confirm('确认删除该项吗？', '提醒', function () {
				zn.http.post('/zn.plugin.admin/model/delete', {
					model: this.props.model,
					where: { id: data.id }
				}).then(function (data) {
					this.state.data.refresh();
					zn.toast.warning('删除成功！');
				}.bind(this), function (data) {
					zn.toast.error('删除出错: ' + data.result);
				});
			}.bind(this));
		},
		__removeItem: function __removeItem() {
			if (this.state.masterId) {
				zn.confirm('确认删除该项吗？', '提醒', function () {
					zn.http.post('/zn.plugin.admin/model/delete', {
						model: this.props.model,
						where: { id: this.state.masterId }
					}).then(function (data) {
						this.state.data.refresh();
						zn.toast.warning('删除成功！');
					}.bind(this), function (data) {
						zn.toast.error('删除出错: ' + data.result);
					});
				}.bind(this));
			} else {
				zn.toast.warning('请先选择待删除数据项！');
			}
		},
		__updateItem: function __updateItem(data) {
			zn.dialog({
				title: '更新项目信息',
				content: React.createElement(zn.react.Form, {
					action: '/zn.plugin.admin/model/update',
					exts: { model: this.props.model },
					merge: 'updates',
					data: data,
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
				zn.react.Page,
				{
					toolbarItems: this.props.toolbarItems,
					onToolbarClick: this.__onToolbarClick,
					title: this.props.title },
				React.createElement(
					zn.react.ActivityLayout,
					{ direction: 'left-right', begin: this.props.leftWidth || 250 },
					React.createElement(zn.react.PagerView, {
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
				data: zn.store.post('/zn.plugin.admin/model/paging', {
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
			zn.modal.close();
			zn.toast.success('操作成功！');
			this.state.data.refresh();
		},
		__addItem: function __addItem(pid) {
			zn.dialog({
				title: '添加',
				content: React.createElement(zn.react.Form, {
					action: '/zn.plugin.admin/model/insert',
					exts: { model: this.props.model },
					hiddens: this.state.where,
					merge: 'values',
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', float: 'right', status: 'danger' }],
					items: this.props.formItems })
			});
		},
		__updateItem: function __updateItem(data) {
			zn.dialog({
				title: '修改信息',
				content: React.createElement(zn.react.Form, {
					action: '/zn.plugin.admin/model/update',
					exts: { model: this.props.model },
					merge: 'updates',
					value: data,
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
					zn.confirm('确认删除该项吗？', '提示', function () {
						zn.http.post('/zn.plugin.admin/model/delete', {
							model: this.props.model,
							where: 'in in (' + this._value.join(',') + ')'
						}).then(function (data) {
							this.state.data.refresh();
							zn.toast.error('删除成功！');
						}.bind(this), function (data) {
							zn.toast.error('删除出错: ' + data.result);
						});
					}.bind(this));
					break;
			}
		},
		render: function render() {
			var _this = this;

			return React.createElement(
				zn.react.Page,
				{
					title: this.props.title,
					toolbarItems: this.props.toolbarItems,
					onToolbarClick: this.__onToolbarClick },
				React.createElement(zn.react.PagerView, {
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
				zn_rights_users: ',',
				zn_rights_roles: ',',
				zn_rights_owner_id: 0,
				items: [{
					title: '是否启用权限', name: 'zn_rights_enabled', type: 'radio',
					data: [{ text: "禁用", value: 0 }, { text: '启用', value: 1 }]
				}, { title: '扩展', name: 'zn_tree_extend', type: 'textarea' }]
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
				zn.http.post('/zn.plugin.admin/model/selectOne', {
					model: this.props.model,
					where: { id: id }
				}).then(function (data) {
					this.setState(data.result);
				}.bind(this));
			}
		},
		__save: function __save() {
			if (!this.props.id) {
				zn.toast.warning('必须编辑项');
				return;
			}

			zn.http.post('/zn.plugin.admin/model/update', {
				updates: {
					zn_rights_users: this.state.users,
					zn_rights_roles: this.state.roles
				},
				model: this.props.model,
				where: { id: this.props.id }
			}).then(function (data) {
				if (data.result.changedRows) {
					zn.toast.success('保存成功');
				}
			});
		},
		__changeOwner: function __changeOwner() {},
		render: function render() {
			var _this = this;

			return React.createElement(
				'div',
				{ className: 'zn-plugin-admin-rights-setting', style: { padding: 5 } },
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
							this.state.zn_rights_owner_id
						),
						'\u3011'
					),
					this.props.id && React.createElement(zn.react.Button, { onClick: this.__save, text: '\u4FDD\u5B58', icon: 'fa-save', float: 'right', style: { margin: 5 } })
				),
				React.createElement(
					zn.react.Card,
					{ icon: 'fa-user', title: '\u7528\u6237' },
					React.createElement(UserSearcher, { value: this.state.zn_rights_users, onChange: function onChange(value) {
							return _this.state.zn_rights_users = value;
						} })
				),
				React.createElement(
					zn.react.Card,
					{ icon: 'fa-graduation-cap', title: '\u89D2\u8272' },
					React.createElement(RoleSearcher, { value: this.state.zn_rights_roles, onChange: function onChange(value) {
							return _this.state.zn_rights_roles = value;
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
			zn.http.post('/zn.plugin.admin/model/select', {
				model: 'ZNPluginAdminUser',
				where: where || {}
			}).then(function (data) {
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
							React.createElement('img', { className: 'avatar', src: zn.http.fixURL(user.avatar_img) }),
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
				{ className: 'zn-plugin-admin-user-searcher' },
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
				data: zn.store.post('/zn.plugin.admin/model/select', {
					model: 'ZNPluginAdminRole',
					where: {
						zn_tree_pid: 0
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
				(this.props.debug ? props.data.id + '、' : '') + props.data.zn_title
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
		"./exports/Login": 20,
		"./exports/Login.js": 20,
		"./exports/Login.less": 21,
		"./exports/Main": 23,
		"./exports/Main.js": 23,
		"./exports/Main.less": 26,
		"./exports/index": 28,
		"./exports/index.js": 28,
		"./exports/my/Info": 30,
		"./exports/my/Info.js": 30,
		"./exports/my/index": 31,
		"./exports/my/index.js": 31,
		"./exports/project/Project": 33,
		"./exports/project/Project.js": 33,
		"./exports/project/ProjectBug": 34,
		"./exports/project/ProjectBug.js": 34,
		"./exports/project/index": 35,
		"./exports/project/index.js": 35,
		"./exports/setting/Base": 37,
		"./exports/setting/Base.js": 37,
		"./exports/setting/Menu": 38,
		"./exports/setting/Menu.js": 38,
		"./exports/setting/Role": 39,
		"./exports/setting/Role.js": 39,
		"./exports/setting/UsersForRoles": 40,
		"./exports/setting/UsersForRoles.js": 40,
		"./exports/setting/Var": 41,
		"./exports/setting/Var.js": 41,
		"./exports/setting/index": 42,
		"./exports/setting/index.js": 42,
		"./exports/user/Info": 44,
		"./exports/user/Info.js": 44,
		"./exports/user/Info.less": 45,
		"./exports/user/List": 47,
		"./exports/user/List.js": 47,
		"./exports/user/LoginLog": 48,
		"./exports/user/LoginLog.js": 48,
		"./exports/user/index": 49,
		"./exports/user/index.js": 49,
		"./index": 1,
		"./index.js": 1,
		"./style/layout.less/MasterSlaveFlexLayout.less": 51,
		"./style/widget.less/UserItem.less": 53,
		"./widget/NavigationBar": 24,
		"./widget/NavigationBar.js": 24,
		"./widget/NavigationBar.less": 55,
		"./widget/UserSessionInfo": 25,
		"./widget/UserSessionInfo.js": 25,
		"./widget/UserSessionInfo.less": 57
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
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	var _exports = React.createClass({
		displayName: 'exports',

		getInitialState: function getInitialState() {
			return {
				base: null
			};
		},
		componentDidMount: function componentDidMount() {
			this.__loadBaseSetting();
		},
		__loadBaseSetting: function __loadBaseSetting() {
			zn.http.post("/zn.plugin.admin/config/selectBy_id", {
				_id: 'zn.plugin.admin.base',
				valueKey: '_value'
			}).then(function (data) {
				if (data.status == 200) {
					this.setState({
						base: data.result
					});
				} else {
					this.setState({
						base: {
							"company_title": "上海佑洋信息科技有限公司",
							"company_logo": "./images/logo.png",
							"company_website": "http://www.youyangit.com",
							"company_tm": "上海佑洋信息科技有限公司 @2016 - @2017",
							"main": "/znpluginadmin.dashboard",
							"main_background_image": "./images/login_background/starry_sky_12.jpg",
							"login_background_image": "./images/login_background/starry_sky_11.jpg"
						}
					});
				}
			}.bind(this), function (err) {
				zn.toast.error('获取基础信息失败： ' + err.message);
			});
		},
		__onLogin: function __onLogin(event) {
			event.preventDefault();
			var _form = event.target.form;
			var _name = _form['name'].value,
			    _password = _form['password'].value;
			if (!_name || _name.length < 2) {
				zn.alert('请输入长度不少于2位的用户名');
				_form['name'].focus();
				return false;
			}
			if (!_password || _password.length < 2) {
				zn.alert('请输入长度不少于2位的密码');
				_form['password'].focus();
				return false;
			}
			zn.http.post("/zn.plugin.admin/user/login", {
				name: _name,
				password: _password
			}).then(function (data) {
				if (data.status == 200) {
					zn.react.session.doMain(data.result);
				} else {
					zn.toast.error('登录失败： ' + data.result);
				}
			}, function (err) {
				zn.toast.error('登录失败： ' + err.message);
			});
		},
		render: function render() {
			if (!this.state.base) {
				return React.createElement(zn.react.DataLoader, null);
			}
			return React.createElement(
				'div',
				{ className: 'zn-plugin-admin-login' },
				React.createElement('img', { className: 'background-image', src: this.state.base.login_background_image }),
				React.createElement(
					'div',
					{ className: 'section-head' },
					React.createElement(
						'div',
						{ className: 'warp' },
						React.createElement(
							'div',
							{ className: 'head-left' },
							React.createElement('img', { className: 'company-logo', src: this.state.base.company_logo }),
							React.createElement(
								'div',
								{ className: 'company-title' },
								this.state.base.company_title
							)
						),
						React.createElement(
							'div',
							{ className: 'head-right' },
							React.createElement(
								'ul',
								{ className: 'link-nav' },
								React.createElement(
									'li',
									null,
									React.createElement(
										'a',
										{ href: this.state.base.company_website },
										'\u5B98\u7F51'
									)
								),
								React.createElement(
									'li',
									null,
									'\u4E0B\u8F7D'
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'section-body rt-scroll-webkit' },
					React.createElement(
						'div',
						{ className: 'warp', style: { width: 640 } },
						React.createElement(
							'div',
							{ className: 'intro' },
							React.createElement(
								'div',
								{ className: 'qr' },
								React.createElement(
									'div',
									{ style: { fontSize: 20, margin: 10 } },
									'\u624B\u673A\u5BA2\u6237\u7AEF'
								),
								this.state.base.client_qr_image && React.createElement('img', { className: 'qr-image', src: this.state.base.client_qr_image }),
								React.createElement(
									'span',
									null,
									'\u626B\u4E00\u626B\u7ACB\u5373\u4E0B\u8F7D'
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'form-dialog' },
							React.createElement(
								'form',
								{ className: 'form' },
								React.createElement(
									'div',
									{ className: 'dialog-title' },
									'\u7528\u6237\u767B\u5F55'
								),
								React.createElement(
									'div',
									{ className: 'form-item' },
									React.createElement('i', { className: 'fa fa-user' }),
									React.createElement('input', { name: 'name', type: 'input', placeholder: '\u767B\u5F55\u7528\u6237\u540D', required: true })
								),
								React.createElement(
									'div',
									{ className: 'form-item' },
									React.createElement('i', { className: 'fa fa-lock' }),
									React.createElement('input', { name: 'password', type: 'password', placeholder: '\u5BC6\u7801', required: true })
								),
								React.createElement(
									'div',
									{ className: 'form-tips' },
									React.createElement(
										'label',
										null,
										React.createElement('input', { type: 'checkbox' }),
										'\u8BB0\u4F4F\u5BC6\u7801'
									),
									React.createElement(
										'label',
										null,
										'\u5FD8\u8BB0\u5BC6\u7801'
									)
								),
								React.createElement(
									'button',
									{ onClick: this.__onLogin, className: 'btn-login' },
									'\u767B \u5F55'
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'section-foot' },
					React.createElement(
						'div',
						{ className: 'warp' },
						React.createElement(
							'div',
							{ className: 'TM' },
							this.state.base.company_tm
						)
					)
				)
			);
		}
	});

	_exports.global = true;
	module.exports = _exports;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	var NavigationBar = __webpack_require__(24);
	var UserSessionInfo = __webpack_require__(25);
	var _exports = React.createClass({
		displayName: '_exports',

		getInitialState: function getInitialState() {
			return {
				menus: [],
				base: null
			};
		},
		componentDidMount: function componentDidMount() {
			this.__loadBaseSetting();
			this.__loadUserRights();
		},
		__loadBaseSetting: function __loadBaseSetting() {
			zn.http.post("/zn.plugin.admin/config/selectBy_id", {
				_id: 'zn.plugin.admin.base',
				valueKey: '_value'
			}).then(function (data) {
				if (data.status == 200) {
					this.setState({
						base: data.result
					});
				} else {
					this.setState({
						base: {
							"company_title": "上海佑洋信息科技有限公司",
							"company_logo": "./images/logo.png",
							"company_website": "http://www.youyangit.com",
							"company_tm": "上海佑洋信息科技有限公司 @2016 - @2017",
							"main": "/znpluginadmin.dashboard",
							"main_background_image": "./images/login_background/starry_sky_12.jpg",
							"login_background_image": "./images/login_background/starry_sky_11.jpg"
						}
					});
				}
			}.bind(this), function (err) {
				zn.toast.error('获取基础信息失败： ' + err.message);
			});
		},
		__loadUserRights: function __loadUserRights() {
			zn.http.get('/zn.plugin.admin/user/getUserRightsMenus').then(function (data) {
				this.setState({
					menus: data.result
				});
			}.bind(this));
		},
		__onSessionClick: function __onSessionClick() {
			zn.modal.open(React.createElement(UserSessionInfo, null), {
				modalStyle: { overflow: 'hidden' },
				className: 'modal-right',
				isMode: true,
				removeSelf: false
			});
		},
		__onSignOut: function __onSignOut() {
			zn.confirm('确定要退出系统？', '提示', function () {
				zn.http.post('/zn.plugin.admin/user/logout').then(function () {
					zn.react.session.doHome();
				});
			});
		},
		render: function render() {
			if (!zn.react.session.validate()) {
				return false;
			}
			if (!this.state.base) {
				return React.createElement(zn.react.DataLoader, { content: '\u6B63\u5728\u52A0\u8F7D\u4E2D...', loader: 'timer' });
			}
			return React.createElement(
				'div',
				{ className: 'zn-plugin-admin-main' },
				React.createElement('img', { className: 'background-image', src: this.state.base.main_background_image }),
				React.createElement(
					'div',
					{ className: 'section-head' },
					React.createElement(
						'div',
						{ className: 'warp' },
						React.createElement(
							'div',
							{ className: 'head-left' },
							React.createElement('img', { className: 'company-logo', src: this.state.base.company_logo }),
							React.createElement(
								'div',
								{ className: 'company-title' },
								this.state.base.company_title
							)
						),
						React.createElement(
							'div',
							{ className: 'head-right' },
							React.createElement(
								'ul',
								{ className: 'link-nav' },
								React.createElement(
									'li',
									null,
									React.createElement(
										'a',
										{ href: this.state.base.company_website },
										'\u5B98\u7F51'
									)
								),
								React.createElement(
									'li',
									null,
									React.createElement(
										'a',
										{ href: this.state.base.company_website },
										'\u4E0B\u8F7D'
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'user-session', onClick: this.__onSessionClick },
								React.createElement(
									'figure',
									{ className: 'avatar' },
									React.createElement('img', { src: zn.http.fixURL(zn.react.session.json().avatar_img) || './images/DefaultAvatar.png' })
								),
								React.createElement(
									'span',
									{ className: 'name' },
									zn.react.session.json().name
								),
								React.createElement('i', { className: 'fa fa-angle-down' })
							),
							React.createElement(
								'div',
								{ className: 'icons' },
								React.createElement('i', { onClick: this.__onMessage, className: 'fa fa-comment-o', title: '\u6D88\u606F' }),
								React.createElement('i', { onClick: this.__onSetting, className: 'fa fa-gear', title: '\u8BBE\u7F6E' }),
								React.createElement('i', { onClick: this.__onSignOut, className: 'sign-out fa fa-sign-out', title: '\u6CE8\u9500' })
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'section-body' },
					React.createElement(
						'div',
						{ className: 'warp inner-content' },
						React.createElement(
							'div',
							{ className: 'navigation-view rt-scroll-webkit' },
							React.createElement(NavigationBar, { data: this.state.menus })
						),
						React.createElement(
							'div',
							{ className: 'page-view' },
							this.props.view && React.createElement(this.props.view, this.props.request.search)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'section-foot' },
					React.createElement(
						'div',
						{ className: 'warp' },
						React.createElement(
							'div',
							{ className: 'TM' },
							this.state.base.company_tm
						)
					)
				)
			);
		}
	});

	_exports.global = true;
	module.exports = _exports;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: "exports",

		getDefaultProps: function getDefaultProps() {
			return {};
		},
		getInitialState: function getInitialState() {
			return {};
		},
		componentDidMount: function componentDidMount() {},
		__renderItem: function __renderItem(item, index) {
			return React.createElement(
				"li",
				{ className: "menu-item" },
				React.createElement(
					"div",
					{ className: "item-title" },
					React.createElement("i", { className: "fa " + item.icon }),
					item.zn_title
				),
				!!item.children && !!item.children.length && this.__renderChildren(item.children)
			);
		},
		__renderChildren: function __renderChildren(children) {
			return React.createElement(
				"ul",
				{ className: "sub-menu-list" },
				children.map(function (item, index) {
					var _this = this;

					return React.createElement(
						"li",
						{ className: zn.react.session.isPath(item.url) ? 'active-item' : '', key: index, onClick: function onClick() {
								return _this.__onSubItemClick(item, index);
							} },
						React.createElement(
							"div",
							{ className: "item-title" },
							React.createElement("i", { className: "fa " + item.icon }),
							item.zn_title
						)
					);
				}.bind(this))
			);
		},
		__onSubItemClick: function __onSubItemClick(item, index) {
			if (item.url) {
				zn.react.session.relativeJump(item.url);
			}
		},
		render: function render() {
			return React.createElement(
				"div",
				{ className: "zn-plugin-admin-widget-navigation-bar" },
				React.createElement(
					"ul",
					{ className: "menu-list" },
					this.props.data.map(function (item, index) {
						return this.__renderItem(item, index);
					}.bind(this))
				)
			);
		}
	});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: "exports",

		getDefaultProps: function getDefaultProps() {
			return {};
		},
		getInitialState: function getInitialState() {
			return {};
		},
		componentDidMount: function componentDidMount() {},
		render: function render() {
			return React.createElement("div", { className: "zn-plugin-admin-widget-user-session-info" });
		}
	});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var _exports = {},
	    _subs = {},
	    _path = null,
	    _export = null;

	['my', 'project', 'setting', 'user'].forEach(function (path) {
	    _path = './' + path + '/index.js';
	    _export = __webpack_require__(29)(_path);
	    for (var key in _export) {
	        _subs[('/znpluginadmin.' + path + '.' + key).toLowerCase()] = _export[key];
	    }
	});

	['Login'].forEach(function (path) {
	    _path = './' + path;
	    _exports[('/' + path).toLowerCase()] = __webpack_require__(29)(_path);
	});

	_subs['/'] = __webpack_require__(23);
	_exports['/main'] = _subs;

	module.exports = _exports;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./Login": 20,
		"./Login.js": 20,
		"./Login.less": 21,
		"./Main": 23,
		"./Main.js": 23,
		"./Main.less": 26,
		"./index": 28,
		"./index.js": 28,
		"./my/Info": 30,
		"./my/Info.js": 30,
		"./my/index": 31,
		"./my/index.js": 31,
		"./project/Project": 33,
		"./project/Project.js": 33,
		"./project/ProjectBug": 34,
		"./project/ProjectBug.js": 34,
		"./project/index": 35,
		"./project/index.js": 35,
		"./setting/Base": 37,
		"./setting/Base.js": 37,
		"./setting/Menu": 38,
		"./setting/Menu.js": 38,
		"./setting/Role": 39,
		"./setting/Role.js": 39,
		"./setting/UsersForRoles": 40,
		"./setting/UsersForRoles.js": 40,
		"./setting/Var": 41,
		"./setting/Var.js": 41,
		"./setting/index": 42,
		"./setting/index.js": 42,
		"./user/Info": 44,
		"./user/Info.js": 44,
		"./user/Info.less": 45,
		"./user/List": 47,
		"./user/List.js": 47,
		"./user/LoginLog": 48,
		"./user/LoginLog.js": 48,
		"./user/index": 49,
		"./user/index.js": 49
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
	webpackContext.id = 29;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);

	module.exports = React.createClass({
		displayName: 'exports',

		getInitialState: function getInitialState() {
			return {
				userId: this.props.userId || zn.react.session.json().id,
				toolbarItems: this.props.userId ? [] : [{ icon: 'fa-edit', text: '修改个人信息', onClick: this.__onEdit }],
				info: null,
				formItems: [{ title: '头像', name: 'avatar_img', type: 'ImageUploader', action: '/zn.plugin.admin/uploadFiles' }, { title: '用户名', name: 'name', type: 'Input', required: true, error: '用户名必填项!' }, { title: '密码', name: 'password', type: 'Input', attrs: { type: 'password' }, required: true, error: '密码必填项!' }, { title: '邮箱', name: 'email', type: 'Input', required: true, error: '邮箱必填项!' }, { title: '手机号', name: 'phone', type: 'Input', required: true, error: '手机号必填项!' }, { title: '地址', name: 'address', type: 'Input' }, { title: '说明', name: 'zn_note', type: 'Textarea' }],
				data: zn.store.post('/zn.plugin.admin/model/select', { model: 'ZNPluginAdminRole', where: { zn_tree_pid: 0 } })
			};
		},
		componentDidMount: function componentDidMount() {
			this.__loadUserInfo();
		},
		__doSuccess: function __doSuccess() {
			zn.modal.close();
			zn.toast.success('修改成功');
			this.__loadUserInfo();
		},
		__onEdit: function __onEdit(data) {
			zn.dialog({
				title: '修改个人信息',
				content: React.createElement(zn.react.Form, {
					action: '/zn.plugin.admin/model/update',
					exts: { model: 'ZNPluginAdminUser', where: { id: this.state.info.id } },
					merge: 'updates',
					value: this.state.info,
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '修改', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: this.state.formItems })
			});
		},
		__loadUserInfo: function __loadUserInfo() {
			zn.http.post('/zn.plugin.admin/user/findUserById', {
				userId: this.state.userId
			}).then(function (data) {
				this.setState({
					info: data.result
				});
			}.bind(this));
		},
		__onTreeMenuItemCheckboxChange: function __onTreeMenuItemCheckboxChange(value) {
			zn.http.post('/zn.plugin.admin/user/updateUser', {
				data: {
					role_ids: value
				},
				userId: this.state.info.id
			}).then(function (data) {
				zn.toast.success('保存成功');
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
				props.data.id + '、' + props.data.zn_title
			);
		},
		render: function render() {
			return React.createElement(
				zn.react.Page,
				{ loading: !this.state.info, title: this.state.info ? this.state.info.name : '加载中...', icon: 'fa-newspaper-o', toolbarItems: this.state.toolbarItems },
				this.state.info && React.createElement(
					'div',
					{ className: 'user-info' },
					React.createElement(
						'div',
						{ className: 'info-form user-item' },
						React.createElement('img', { className: 'avatar', src: zn.http.fixURL(this.state.info.avatar_img) || './images/DefaultAvatar.png' }),
						React.createElement(
							'div',
							{ className: 'details' },
							React.createElement(
								'span',
								{ className: 'last-logintime' },
								'\u6700\u8FD1\u4E00\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A',
								this.state.info.last_login_time || '还未登陆'
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
								this.state.info.zn_create_time
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
								this.state.info.zn_note
							)
						)
					),
					React.createElement(
						zn.react.Card,
						{ title: '\u90E8\u95E8\u53CA\u89D2\u8272' },
						React.createElement(zn.react.TreeListView, {
							disabled: true,
							cascade: false,
							enableCheckbox: true,
							onItemCheckboxChange: this.__onTreeMenuItemCheckboxChange,
							value: this.state.info.roleIds,
							itemContentRender: this.__itemContentRender,
							ref: 'maintreemenu',
							activeAll: true,
							data: this.state.data })
					)
				)
			);
		}
	});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = zn.arrayValueToObject(['Info'], function (value, index) {
	    return __webpack_require__(32)("./" + value + '.js');
	});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./Info.js": 30,
		"./index.js": 31
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
	webpackContext.id = 32;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var TreeModelView = __webpack_require__(13);
	var ProjectBug = __webpack_require__(34);

	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: 'ZNPluginAdminProject',
				title: '项目管理',
				leftWidth: 20,
				pid: 0,
				fields: [{ title: '模块名称', type: 'Input', name: 'zn_title' }, { title: '版本号', type: 'Input', name: 'version' }, { title: '优先级', type: 'Select', name: 'priority', data: [{ text: '正常', value: 1 }, { text: '紧急', value: 2 }, { text: '非常紧急', value: 3 }] }, { title: '开始时间', name: 'begin_time', type: 'Timer' }, { title: '结束时间', name: 'end_time', type: 'Timer' }, { title: '文件', name: 'files', type: 'FileUploader', action: '/zn.plugin.admin/uploadFiles' }, { title: '功能表述', type: 'RichEditor', name: 'description' }, { title: '备注', type: 'Textarea', name: 'zn_note' }]
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
					item.data.zn_title
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				data: null,
				model: 'ZNPluginAdminProjectBug'
			};
		},
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			if (nextProps.data !== this.props.data) {
				this.state.data.extend({
					where: {
						project_id: nextProps.data.id
					}
				}).exec();
			}
		},
		getInitialState: function getInitialState() {
			var _where = {};
			if (this.props.data) {
				_where.project_id = this.props.data.id;
			}
			return {
				data: zn.store.post('/zn.plugin.admin/model/paging', {
					model: this.props.model,
					where: _where
				}),
				items: [{ title: '操作', width: 60, textAlign: 'center' }, { title: '问题', name: 'zn_title', width: 220, filter: { type: 'Input', opts: ['like'] } }, { title: '状态', name: 'state', width: 80, filter: { type: 'Menu', data: [{ text: '待处理', value: 0 }, { text: '处理中...', value: 2 }, { text: '已经解决', value: 3 }, { text: '已经确认', value: 3 }], opts: ['='] } }, { title: '优先级', name: 'priority', width: 80, filter: { type: 'Menu', data: [{ text: '正常', value: 1 }, { text: '紧急', value: 2 }, { text: '非常紧急', value: 3 }], opts: ['='] } }, { title: '开始时间', name: 'begin_time', width: 140 }, { title: '结束时间', name: 'end_time', width: 140 }, { title: '完成时间', name: 'finished_time', width: 140 }, { title: '提交时间', name: 'zn_create_time', width: 140 }, { title: '描述', name: 'zn_note' }],
				formItems: [{ title: '问题', name: 'zn_title', type: 'Textarea' }, { title: '版本号', type: 'Input', name: 'version' }, {
					title: '优先级',
					type: 'Select',
					name: 'priority',
					data: [{ text: '正常', value: 1 }, { text: '紧急', value: 2 }, { text: '非常紧急', value: 3 }]
				}, { title: '开始时间', name: 'begin_time', type: 'Timer' }, { title: '结束时间', name: 'end_time', type: 'Timer' }, { title: '附件', name: 'files', type: 'FileUploader', action: '/zn.plugin.admin/uploadFiles' }, { title: '问题描述', name: 'description', type: 'RichEditor' }, { title: '解决方案', name: 'solution', type: 'RichEditor' }],
				toolbarItems: [{ text: '添加', icon: 'fa-plus' }]
			};
		},
		__onRowActions: function __onRowActions(value, data) {
			var _data = this.state.data;
			var _self = this;
			switch (value.item.icon) {
				case 'fa-remove':
					zn.confirm('确定删除该数据吗？', '提示', function () {
						zn.http.post('/zn.plugin.admin/model/delete', {
							model: _self.props.model,
							where: { id: data.id }
						}).then(function (data) {
							zn.toast.success('删除成功！');
							_data.refresh();
						});
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
					return React.createElement(zn.react.ListView, {
						className: 'rt-flex',
						data: [{ text: '删除', icon: 'fa-remove' }, { text: '修改', icon: 'fa-edit' }],
						itemRender: function itemRender(item, index) {
							return React.createElement('i', { title: item.text, className: 'fa ' + item.icon, style: item.style });
						},
						onClick: function onClick(value) {
							return _this.__onRowActions(value, data);
						} });
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
			zn.dialog({
				title: '修改',
				content: React.createElement(zn.react.Form, {
					action: '/zn.plugin.admin/model/update',
					exts: { model: this.props.model, where: { id: data.id } },
					merge: 'updates',
					value: zn.store.post('/zn.plugin.admin/model/selectOne', { model: this.props.model, where: { id: data.id } }),
					onSubmitSuccess: this.__doSuccess,
					items: this.state.formItems })
			});
		},
		__doSuccess: function __doSuccess() {
			zn.modal.close();
			zn.toast.success('操作成功');
			this.state.data.refresh();
		},
		__addItem: function __addItem(pid) {
			if (!this.props.data) {
				zn.toast.warning('请先选择左边商品类型项');
				return false;
			}
			zn.dialog({
				title: '添加',
				content: React.createElement(zn.react.Form, {
					action: '/zn.plugin.admin/model/insert',
					exts: { model: this.props.model },
					hiddens: { project_id: this.props.data.id },
					merge: 'values',
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
				zn.react.Page,
				{ title: '\u95EE\u9898\u5217\u8868', icon: 'fa-list-ul', onToolbarClick: this.__onToolbarClick, toolbarItems: this.state.toolbarItems },
				React.createElement(zn.react.PagerView, {
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = zn.arrayValueToObject(['Project'], function (value, index) {
	    return __webpack_require__(36)("./" + value + '.js');
	});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./Project.js": 33,
		"./ProjectBug.js": 34,
		"./index.js": 35
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
	webpackContext.id = 36;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				_id: 'zn.plugin.admin.base',
				title: '参数设置'
			};
		},
		getInitialState: function getInitialState() {
			return {
				items: null
			};
		},
		componentDidMount: function componentDidMount() {
			this.__getData();
		},
		__getData: function __getData() {
			zn.http.post('/zn.plugin.admin/config/selectBy_id', {
				_id: this.props._id
			}).then(function (data) {
				var _items = [],
				    _item = null;
				zn.each(data.result, function (value, key) {
					_item = {
						name: key,
						title: value._title,
						type: value.input_type,
						value: value._value || value._rich_value
					};
					if (_item.type == 'ImageUploader') {
						_item.action = '/zn.plugin.admin/uploadFiles';
					}
					_items.push(_item);
				});
				this.setState({
					items: _items
				});
			}.bind(this));
		},
		render: function render() {
			return React.createElement(
				zn.react.Page,
				{ loading: !this.state.items, title: this.props.title },
				React.createElement(
					'div',
					{ style: { backgroundColor: '#FFF' } },
					this.state.items && React.createElement(zn.react.Form, {
						items: this.state.items,
						action: '/zn.plugin.admin/config/updateBy_id',
						merge: 'updates',
						exts: {
							_id: this.props._id
						}
					})
				)
			);
		}
	});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
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
				zn.react.ActivityLayout,
				{ direction: 'top-bottoom', begin: 40, barWidth: 3 },
				React.createElement(zn.react.ListView, {
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
				model: 'ZNPluginAdminMenu',
				title: '菜单管理',
				leftWidth: 30,
				pid: 0,
				fields: [{ title: '标题', type: 'Input', name: 'zn_title' }, { title: '类型', type: 'Radio', name: 'zn_tree_type', value: 0,
					data: [{ text: '分类', value: 0 }, { text: '功能菜单', value: 1 }]
				}, { title: '图标', type: 'Input', name: 'icon' }, { title: '链接', type: 'Input', name: 'url' }, { title: '路径', type: 'Input', name: 'path' }, { title: '扩展', type: 'Textarea', name: 'zn_tree_extend' }]
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);

	var TreeModelView = __webpack_require__(13);
	var UsersForRoles = __webpack_require__(40);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: 'ZNPluginAdminRole',
				pid: 0,
				title: '部门及角色管理',
				menuId: 0,
				fields: [{ title: '名称', type: 'Input', name: 'zn_title' }, { title: '类型', type: 'Radio', name: 'zn_tree_type', value: 1,
					data: [{ text: '分类', value: 0 }, { text: '部门', value: 1 }, { text: '角色', value: 2 }]
				}, { title: '说明', type: 'Textarea', name: 'zn_note' }]
			};
		},
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
						_data.id + '、' + _data.zn_title
					);
				case 1:
					return React.createElement(
						'span',
						null,
						React.createElement('i', { title: '\u8FD9\u662F\u90E8\u95E8', className: 'fa fa-sitemap', style: { margin: 5, color: '#d9534f' } }),
						_data.id + '、' + _data.zn_title
					);
				case 2:
					return React.createElement(
						'span',
						null,
						React.createElement('i', { title: '\u8FD9\u662F\u89D2\u8272', className: 'fa fa-graduation-cap', style: { margin: 5 } }),
						_data.id + '、' + _data.zn_title
					);
			}
		},
		render: function render() {
			return React.createElement(TreeModelView, _extends({}, this.props, { rightRender: this.__rightRender, itemContentRender: this.__itemContentRender }));
		}
	});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getInitialState: function getInitialState() {
			return {
				data: zn.store.post('/zn.plugin.admin/model/paging', {
					model: 'ZNPluginAdminUser'
				})
			};
		},
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			if (nextProps.roleId != this.props.roleId) {
				this.state.data.extend({
					where: "locate('," + nextProps.roleId + ",',role_ids) <> 0"
				}).exec();
			}
		},
		__onUserClick: function __onUserClick(event, item, index) {
			event.stopPropagation();
			zn.react.session.jump('/znpluginadmin.user.info', { userId: item.id });
		},
		__itemRender: function __itemRender(item, index) {
			var _this = this;

			return React.createElement(
				'div',
				{ className: 'user-item' },
				React.createElement('img', { className: 'avatar', src: zn.http.fixURL(item.avatar_img) }),
				React.createElement(
					'div',
					{ className: 'details' },
					React.createElement(
						'span',
						{ className: 'last-logintime' },
						item.last_login_time || '还未登陆'
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
						item.zn_create_time
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
			return React.createElement(zn.react.PagerView, {
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var TreeModelView = __webpack_require__(13);
	var RightsSetting = __webpack_require__(10);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: 'ZNPluginAdminVar',
				pid: 0,
				title: '资源管理',
				menuId: 0,
				fields: [{ title: '标题', type: 'Input', name: 'zn_title' }, { title: '类型', type: 'Radio', name: 'zn_tree_type', value: 0,
					data: [{ text: '分类', value: 0 }, { text: '按钮', value: 1 }, { text: '常量', value: 2 }, { text: '标签', value: 3 }, { text: '标签', value: 4 }]
				}, { title: '图标', type: 'Input', name: 'icon' }, { title: '图片', type: 'ImageUploader', name: 'img', action: '/zn.plugin.admin/uploadFiles' }, { title: '链接', type: 'Input', name: 'url' }, { title: '路径', type: 'Input', name: 'path' }, { title: '扩展', type: 'Textarea', name: 'zn_tree_extend' }]
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
						_data.id + '、' + _data.zn_title
					);
				case 2:
					return React.createElement(
						'span',
						null,
						React.createElement('i', { title: '\u8FD9\u662F\u9759\u6001\u5E38\u91CF', className: 'fa fa-text-width', style: { margin: 5, color: '#d9534f' } }),
						React.createElement('i', { className: 'fa ' + _data.icon, style: { marginRight: 5 } }),
						_data.id + '、' + _data.zn_title
					);
				case 3:
					return React.createElement(
						'span',
						null,
						React.createElement('i', { title: '\u8FD9\u662F\u6807\u7B7E\u7C7B\u522B', className: 'fa fa-tag', style: { margin: 5 } }),
						React.createElement('i', { className: 'fa ' + _data.icon, style: { marginRight: 5 } }),
						_data.id + '、' + _data.zn_title
					);
			}
		},
		render: function render() {
			return React.createElement(TreeModelView, _extends({}, this.props, { where: { menu_id: this.props.menuId }, itemContentRender: this.__itemContentRender, rightRender: this.__rightRender, leftWidth: 300 }));
		}
	});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = zn.arrayValueToObject(['Base', 'Menu', 'Role', 'Var', 'UsersForRoles'], function (value, index) {
	    return __webpack_require__(43)("./" + value + '.js');
	});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./Base.js": 37,
		"./Menu.js": 38,
		"./Role.js": 39,
		"./UsersForRoles.js": 40,
		"./Var.js": 41,
		"./index.js": 42
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
	webpackContext.id = 43;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);

	module.exports = React.createClass({
		displayName: 'exports',

		getInitialState: function getInitialState() {
			return {
				info: null,
				data: zn.store.post('/zn.plugin.admin/model/select', { model: 'ZNPluginAdminRole', where: { pid: 0 } })
			};
		},
		componentDidMount: function componentDidMount() {
			this.__loadUserInfo();
		},
		__loadUserInfo: function __loadUserInfo() {
			zn.http.post('/zn.plugin.admin/user/findUserById', {
				userId: this.props.userId
			}).then(function (data) {
				this.setState({
					info: data.result
				});
			}.bind(this));
		},
		__onTreeMenuItemCheckboxChange: function __onTreeMenuItemCheckboxChange(value) {
			zn.http.post('/zn.plugin.admin/user/updateUser', {
				data: { role_ids: value },
				userId: this.props.userId
			}).then(function (data) {
				zn.toast.success('保存成功!');
			});
		},
		__itemContentRender: function __itemContentRender(props) {
			var _icon = '';
			if (props.data.zn_tree_type == 1) {
				_icon = 'fa-sitemap';
			}
			if (props.data.zn_tree_type == 2) {
				_icon = 'fa-graduation-cap';
			}
			return React.createElement(
				'span',
				null,
				React.createElement('i', { style: { margin: 5 }, className: 'fa ' + _icon }),
				props.data.id + '、' + props.data.zn_title
			);
		},
		render: function render() {
			return React.createElement(
				zn.react.Page,
				{ loading: !this.state.info, title: this.state.info.name, icon: 'fa-newspaper-o', toolbarItems: this.state.toolbarItems },
				React.createElement(
					'div',
					{ className: 'zn-plugin-admin-user-info' },
					React.createElement(
						'div',
						{ className: 'info-form user-item' },
						React.createElement('img', { className: 'avatar', src: zn.http.fixURL(this.state.info.avatar_img) || './images/DefaultAvatar.png' }),
						React.createElement(
							'div',
							{ className: 'details' },
							React.createElement(
								'span',
								{ className: 'last-logintime' },
								'\u6700\u8FD1\u4E00\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A',
								this.state.info.last_login_time || '还未登陆'
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
								this.state.info.zn_create_time
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
								this.state.info.zn_note
							)
						)
					),
					React.createElement(
						zn.react.Card,
						{ title: '\u90E8\u95E8\u53CA\u89D2\u8272' },
						React.createElement(zn.react.TreeListView, {
							ref: 'maintreemenu',
							cascade: false,
							enableCheckbox: true,
							onItemCheckboxChange: this.__onTreeMenuItemCheckboxChange,
							value: this.state.info.roleIds,
							itemContentRender: this.__itemContentRender,
							activeAll: true,
							data: this.state.data })
					)
				)
			);
		}
	});

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
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
				items: [{ title: '用户名', name: 'name', width: 80 }, { title: '邮箱', name: 'email', width: 200 }, { title: '手机号', name: 'phone', width: 120 }, { title: '地址', name: 'address', width: 200 }, { title: '说明', name: 'zn_note' }],
				formItems: [{ title: '用户名', name: 'name', type: 'Input', required: true, error: '用户名必填项!' }, { title: '邮箱', name: 'email', type: 'Input' }, { title: '手机号', name: 'phone', type: 'Input' }, { title: '地址', name: 'address', type: 'Input' }, { title: '说明', name: 'zn_note', type: 'Textarea' }],
				toolbarItems: [{ text: '添加', name: 'add', icon: 'fa-plus', style: { marginRight: 5 } }, { text: '删除', name: 'remove', status: 'danger', icon: 'fa-remove', style: { marginRight: 5 } }]
			};
		},
		__doSuccess: function __doSuccess() {
			zn.modal.close();
			zn.toast.success('操作成功！');
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
					btns: [{ text: '新增用户', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
					items: this.state.formItems })
			});
		},
		__updateItem: function __updateItem(data) {
			zn.dialog({
				title: '更新用户信息',
				content: React.createElement(zn.react.Form, {
					action: '/zn.plugin.admin/model/update',
					exts: { model: this.props.model, where: { id: data.id } },
					merge: 'updates',
					data: data,
					onSubmitSuccess: this.__doSuccess,
					btns: [{ text: '更新', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight: 0 } }, { text: '取消', type: 'cancle', status: 'danger', float: 'right' }],
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
		__onEditItem: function __onEditItem(event, item) {
			event.stopPropagation();
			this.__updateItem(item);
		},
		__onTableColumnRender: function __onTableColumnRender(rowIndex, columnIndex, data, item, value) {
			switch (columnIndex) {
				case 1:
					return React.createElement(
						'a',
						{ href: '#' + zn.react.session.fixPath('/znpluginadmin.user.info') + '?userId=' + data.id },
						value
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
					onTableRowClick: this.__onTableRowClick,
					data: this.state.data,
					items: this.state.items })
			);
		}
	});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(5);
	module.exports = React.createClass({
		displayName: 'exports',

		getDefaultProps: function getDefaultProps() {
			return {
				model: 'ZNPluginAdminUserLog'
			};
		},
		getInitialState: function getInitialState() {
			return {
				data: zn.store.post('/zn.plugin.admin/model/paging', {
					model: this.props.model
				}),
				items: [{ title: '操作人', name: 'user_id_convert', width: 100 }, { title: '操作时间', name: 'zn_create_time', width: 180 }, { title: '类型', name: 'type', width: 80 }, { title: '说明', name: 'zn_note' }]
			};
		},
		render: function render() {
			return React.createElement(
				zn.react.Page,
				{
					toolbarItems: [{ text: '导出' }],
					onToolbarClick: this.__onToolbarClick,
					title: '\u7CFB\u7EDF\u8D26\u6237\u767B\u5F55\u65E5\u5FD7' },
				React.createElement(zn.react.PagerView, {
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = zn.arrayValueToObject(['Info', 'List', 'LoginLog'], function (value, index) {
	    return __webpack_require__(50)("./" + value + '.js');
	});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./Info.js": 44,
		"./List.js": 47,
		"./LoginLog.js": 48,
		"./index.js": 49
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
	webpackContext.id = 50;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */,
/* 57 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);