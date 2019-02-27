"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

require('./TreeEditor.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      editable: true,
      model: 'ZNPluginAdminVar',
      pid: 0,
      fields: [{
        title: '显示值',
        name: 'zn_title',
        type: 'Textarea'
      }]
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/getByPid', {
        model: this.props.model,
        pid: this.props.pid
      }),
      formItems: this.props.fields,
      mainToolbarItems: [{
        tooltip: '添加主项',
        value: 'addMain',
        icon: 'fa-plus-square'
      }],
      subToolbarItems: [{
        tooltip: '添加子项',
        value: 'addChild',
        icon: 'fa-plus'
      }, {
        tooltip: '删除当前项',
        value: 'delete',
        icon: 'fa-remove'
      }, {
        tooltip: '编辑当前项',
        value: 'edit',
        icon: 'fa-edit'
      }, {
        tooltip: '上移当前项',
        value: 'up',
        icon: 'fa-angle-up'
      }, {
        tooltip: '下移当前项',
        value: 'down',
        icon: 'fa-angle-down'
      }, {
        tooltip: '移动到',
        value: 'moveTo',
        icon: 'fa-retweet'
      }]
    };
  },
  editTreeColumn: function editTreeColumn(data, treeColumn) {
    if (!data || !treeColumn) {
      return zn.toast.error('请先选择要编辑的记录'), false;
    }

    zn.dialog({
      title: '编辑',
      content: React.createElement(zn.react.Form, {
        merge: "updates",
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model,
          where: {
            id: data.id
          }
        },
        value: zn.store.post('/zn.plugin.admin/model/selectOne', {
          model: this.props.model,
          where: {
            id: data.id
          }
        }),
        items: this.state.formItems,
        onSubmitSuccess: function onSubmitSuccess() {
          return treeColumn.props.parent.refresh();
        }
      })
    });
  },
  addTreeColumn: function addTreeColumn(data, treeColumn) {
    var _where = {};

    for (var key in this._where) {
      _where[key] = this._where[key];
    }

    if (data) {
      _where['zn_tree_pid'] = data.id;
    }

    zn.dialog({
      title: data ? '添加子项: ' + data.zn_title : '添加主项',
      content: React.createElement(zn.react.Form, {
        merge: "values",
        action: "/zn.plugin.admin/model/insert",
        hiddens: _where,
        exts: {
          model: this.props.model
        },
        items: this.state.formItems,
        onSubmitSuccess: function () {
          if (treeColumn) {
            treeColumn.refresh();
          } else {
            this.state.data.refresh();
          }
        }.bind(this)
      })
    });
  },
  orderTreeColumn: function orderTreeColumn(order, data, treeColumn) {
    if (!data || !treeColumn) {
      return zn.toast.error('请先选择要排序的记录'), false;
    }

    zn.http.post('/zn.plugin.admin/model/orderTreeNode', {
      model: this.props.model,
      id: data.id,
      order: order
    }).then(function (data) {
      treeColumn.props.parent.refresh();
    }.bind(this), function (data) {
      zn.toast.error('操作出错: ' + data.result);
    });
  },
  deleteTreeColumn: function deleteTreeColumn(data, treeColumn) {
    if (!data || !treeColumn) {
      return zn.toast.error('请先选择要删除的记录'), false;
    }

    zn.confirm('确认删除该项吗？', '提示', function () {
      zn.http.post('/zn.plugin.admin/model/delete', {
        model: this.props.model,
        where: {
          id: data.id
        }
      }).then(function (data) {
        treeColumn.props.parent.refresh();
        zn.toast.success('删除成功！');
      }.bind(this), function (data) {
        zn.toast.error('删除出错: ' + data.result);
      });
    }.bind(this));
  },
  __onDataItemClick: function __onDataItemClick(curr, click, treeColumn) {
    if (curr.id == click.id) {
      return zn.notification.warning('目标节点不能跟原始节点一样'), false;
    } //zn.dialog.close();


    zn.preloader.open("正在提交中...");
    zn.http.post('/zn.plugin.admin/model/moveTreeNode', {
      model: this.props.model,
      source: curr.id,
      target: click.id
    }).then(function (data) {
      treeColumn.props.parent.refresh();
      zn.notification.success('移动成功！');
      zn.preloader.close();
    }.bind(this), function (data) {
      zn.notification.error('移动出错: ' + data.result);
      zn.preloader.close();
    });
  },
  moveTreeColumn: function moveTreeColumn(curr, treeColumn) {
    var _this = this;

    zn.dialog({
      title: "移动节点",
      content: React.createElement(zn.react.Tree, {
        data: this.state.data,
        onItemClick: function onItemClick(data) {
          return _this.__onDataItemClick(curr, data, treeColumn);
        },
        contentRender: this.__itemContentRender
      })
    });
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.value) {
      case 'addMain':
        this.addTreeColumn(null, null);
        break;

      case 'addChild':
        this.addTreeColumn(this.state.currData, this.state.treeColumn);
        break;

      case 'edit':
        this.editTreeColumn(this.state.currData, this.state.treeColumn);
        break;

      case 'up':
        this.orderTreeColumn('up', this.state.currData, this.state.treeColumn);
        break;

      case 'down':
        this.orderTreeColumn('down', this.state.currData, this.state.treeColumn);
        break;

      case 'delete':
        this.deleteTreeColumn(this.state.currData, this.state.treeColumn);
        break;

      case 'moveTo':
        this.moveTreeColumn(this.state.currData, this.state.treeColumn);
        break;
    }
  },
  __itemContentRender: function __itemContentRender(data, treeColumn) {
    var _result = this.props.contentRender && this.props.contentRender(data, treeColumn, this);

    if (_result) {
      return _result;
    } else {
      return React.createElement("div", {
        className: "item-content"
      }, data.icon && React.createElement(zn.react.Icon, {
        icon: data.icon
      }), React.createElement("span", {
        "data-tooltip": data.id
      }, data.zn_title));
    }
  },
  __onTreeItemClick: function __onTreeItemClick(data, treeColumn, tree, event) {
    this.state.currData = data;
    this.state.treeColumn = treeColumn;
    this.forceUpdate();
    this.props.onItemClick && this.props.onItemClick(data, treeColumn, tree, event);
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname("zn-plugin-admin-tree-editor", this.props.className)
    }, this.props.editable && React.createElement("div", {
      className: "tool-bars"
    }, this.state.mainToolbarItems.map(function (item) {
      var _this2 = this;

      return React.createElement("i", {
        onClick: function onClick() {
          return _this2.__onToolbarClick(item);
        },
        "data-tooltip": item.tooltip,
        className: "fa " + item.icon
      });
    }.bind(this)), React.createElement("i", {
      className: "separator"
    }), this.state.currData && this.state.subToolbarItems.map(function (item) {
      var _this3 = this;

      return React.createElement("i", {
        onClick: function onClick() {
          return _this3.__onToolbarClick(item);
        },
        "data-tooltip": item.tooltip,
        className: "fa " + item.icon
      });
    }.bind(this))), React.createElement(zn.react.Tree, _extends({}, this.props, {
      data: this.state.data,
      onItemClick: this.__onTreeItemClick,
      contentRender: this.__itemContentRender
    })));
  }
});