"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var TreeModelView = require('../../component/model/TreeModelView');

var ModelEditor = require('../../component/basic/ModelEditor');

var FormDesigner = require('../../component/basic/FormDesigner');

var MenuInfo = React.createClass({
  displayName: "MenuInfo",
  getInitialState: function getInitialState() {
    return {
      currIndex: 0
    };
  },
  __renderBody: function __renderBody() {
    switch (this.state.currIndex) {
      case 0:
        return /*#__PURE__*/React.createElement(ModelEditor, this.props);

      case 1:
        return /*#__PURE__*/React.createElement("div", {
          style: {
            textAlign: 'center'
          }
        }, "\u8FD8\u5728\u5F00\u53D1\u4E2D...");

      case 2:
        return /*#__PURE__*/React.createElement(FormDesigner, {
          menuId: this.props.data.value
        });
    }
  },
  render: function render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      className: "zr-flex-layout"
    }, /*#__PURE__*/React.createElement(zn.react.ListView, {
      className: "layout-header zr-tab-ios",
      style: {
        margin: 5
      },
      selectMode: "radio",
      textKey: "text",
      valueKey: "index",
      onClick: function onClick(value) {
        return _this.setState({
          currIndex: value.item.index
        });
      },
      value: this.state.currIndex,
      data: [{
        index: 0,
        text: '基本信息',
        icon: 'fa-list-alt'
      }, {
        index: 1,
        text: '资源管理',
        icon: 'fa-table'
      }, {
        index: 2,
        text: '表单定义',
        icon: 'fa-server'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "layout-body"
    }, this.__renderBody()));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      model: 'ZNPluginAdminMenu',
      title: '菜单管理',
      leftWidth: 30,
      pid: 0,
      fields: [{
        title: '标题',
        type: 'Input',
        name: 'zn_title'
      }, {
        title: '类型',
        type: 'Radio',
        name: 'zn_tree_type',
        value: 0,
        data: [{
          text: '分类',
          value: 0
        }, {
          text: '功能菜单',
          value: 1
        }]
      }, {
        title: '链接',
        type: 'Menu',
        data: Object.keys(zn.react.app._relativeRouters),
        name: 'url'
      }, {
        title: '路径',
        type: 'Input',
        name: 'path'
      }, {
        title: '图标',
        type: 'RichSelector',
        selector: zn.plugin.admin.FontAwesomeIcons,
        textRender: function textRender(text) {
          return /*#__PURE__*/React.createElement("i", {
            className: "fa " + text
          });
        },
        name: 'icon'
      }, {
        title: '是否启用权限',
        type: 'Radio',
        name: 'zn_rights_enabled',
        value: 0,
        data: [{
          text: '禁止',
          value: 0
        }, {
          text: '启用',
          value: 1
        }]
      }, //{ title: '拥有者', type: zn.plugin.admin.UserSelector, mulitable: false, name: 'zn_rights_owner_id' },
      {
        title: '操作用户',
        type: zn.plugin.admin.UserSelector,
        mulitable: true,
        name: 'zn_rights_users'
      }, //{ title: '查看用户', type: zn.plugin.admin.UserSelector, mulitable: true, name: 'zn_rights_observe_users' },
      {
        title: '操作角色',
        type: zn.plugin.admin.RoleSelector,
        name: 'zn_rights_roles'
      }, //{ title: '查看角色', type: zn.plugin.admin.RoleSelector, name: 'zn_rights_observe_roles' },
      {
        title: '扩展',
        type: 'Textarea',
        name: 'zn_tree_extend'
      }]
    };
  },
  __rightRender: function __rightRender(data) {
    if (!data.data.zn_tree_type) {
      return null;
    }

    return /*#__PURE__*/React.createElement(MenuInfo, _extends({}, this.state, {
      data: data
    }));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(TreeModelView, _extends({}, this.state, {
      rightRender: this.__rightRender
    }));
  }
});