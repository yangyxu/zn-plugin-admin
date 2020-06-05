"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var TreeModelView = require('../../component/model/TreeModelView');

var ModelEditor = require('../../component/basic/ModelEditor');

var UsersForRoles = require('./UsersForRoles');

var Info = React.createClass({
  displayName: "Info",
  getInitialState: function getInitialState() {
    return {
      currIndex: 0
    };
  },
  __renderBody: function __renderBody() {
    switch (this.state.currIndex) {
      case 0:
        var _fields = this.props.fields.slice(0);

        if (this.props.data.data.type == 1) {
          _fields.splice(1, 0, {
            title: '负责人',
            type: "CheckboxGroup",
            data: zn.store.post('/zn.plugin.admin/model/select', {
              model: 'ZNPluginAdminUser',
              fields: ['id as value', 'name as text'],
              where: "locate('," + this.props.data.value + ",',role_ids) <> 0"
            }),
            name: 'owners'
          });
        }

        return /*#__PURE__*/React.createElement(ModelEditor, _extends({}, this.props, {
          fields: _fields
        }));

      case 1:
        return /*#__PURE__*/React.createElement(UsersForRoles, {
          roleId: this.props.data.value
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
        text: '用户列表',
        icon: 'fa-users'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "layout-body"
    }, this.__renderBody()));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminRole',
      pid: 0,
      title: '部门及角色管理',
      menuId: 0,
      fields: [{
        title: '名称',
        type: 'Input',
        name: 'zn_title'
      }, {
        title: '类型',
        type: 'Radio',
        name: 'type',
        value: 0,
        data: [{
          text: '分类',
          value: 0
        }, {
          text: '部门',
          value: 1
        }, {
          text: '角色',
          value: 2
        }]
      }, {
        title: '扩展',
        type: 'Textarea',
        name: 'zn_tree_extend'
      }, {
        title: '说明',
        type: 'Textarea',
        name: 'zn_note'
      }]
    };
  },
  __rightRender: function __rightRender(data) {
    if (!data.data.type) {
      return null;
    }

    return /*#__PURE__*/React.createElement(Info, _extends({}, this.props, {
      data: data
    }));
  },
  __itemContentRender: function __itemContentRender(item) {
    var _data = item;

    switch (_data.type) {
      case 0:
        return /*#__PURE__*/React.createElement("span", null, _data.zn_title);

      case 1:
        return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
          title: "\u8FD9\u662F\u90E8\u95E8",
          className: "fa fa-sitemap",
          style: {
            margin: 5,
            color: '#d9534f'
          }
        }), _data.zn_title);

      case 2:
        return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
          title: "\u8FD9\u662F\u89D2\u8272",
          className: "fa fa-graduation-cap",
          style: {
            margin: 5
          }
        }), _data.zn_title);
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(TreeModelView, _extends({}, this.props, {
      rightRender: this.__rightRender,
      itemContentRender: this.__itemContentRender
    }));
  }
});