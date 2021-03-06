"use strict";

require('./Info.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      userId: this.props.userId || zn.react.session.json().id,
      toolbarItems: this.props.userId ? [] : [{
        icon: 'fa-edit',
        text: '修改个人信息',
        onClick: this.__onEdit
      }],
      info: null,
      formItems: [{
        title: '头像',
        name: 'avatar_img',
        type: 'ImageUploader',
        action: '/zn.plugin.admin/uploadFiles'
      }, {
        title: '用户名',
        name: 'name',
        type: 'Input',
        required: true,
        error: '用户名必填项!'
      }, {
        title: '密码',
        name: 'password',
        type: 'Input',
        attrs: {
          type: 'password'
        },
        required: true,
        error: '密码必填项!'
      }, {
        title: '邮箱',
        name: 'email',
        type: 'Input',
        required: true,
        error: '邮箱必填项!'
      }, {
        title: '手机号',
        name: 'phone',
        type: 'Input',
        required: true,
        error: '手机号必填项!'
      }, {
        title: '地址',
        name: 'address',
        type: 'Input'
      }, {
        title: '说明',
        name: 'zn_note',
        type: 'Textarea'
      }],
      data: zn.store.post('/zn.plugin.admin/model/select', {
        model: 'ZNPluginAdminRole',
        where: {
          zn_tree_pid: 0
        }
      })
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadUserInfo();
  },
  __doSuccess: function __doSuccess() {
    this.__loadUserInfo();
  },
  __onEdit: function __onEdit(data) {
    zn.dialog({
      title: '修改个人信息',
      content: /*#__PURE__*/React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: 'ZNPluginAdminUser',
          where: {
            id: this.state.info.id
          }
        },
        merge: "updates",
        value: this.state.info,
        onSubmitSuccess: this.__doSuccess,
        items: this.state.formItems
      })
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

    return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      style: {
        margin: 5
      },
      className: 'fa ' + _icon
    }), props.data.id + '、' + props.data.zn_title);
  },
  render: function render() {
    if (!this.state.info) {
      return /*#__PURE__*/React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
        loader: "timer"
      });
    }

    return /*#__PURE__*/React.createElement(zn.react.Page, {
      title: this.state.info.name,
      toolbarItems: this.state.toolbarItems
    }, /*#__PURE__*/React.createElement("div", {
      className: "user-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "info-form user-item"
    }, /*#__PURE__*/React.createElement("img", {
      className: "avatar",
      src: zn.http.fixURL(this.state.info.avatar_img) || './images/DefaultAvatar.png'
    }), /*#__PURE__*/React.createElement("div", {
      className: "details"
    }, /*#__PURE__*/React.createElement("span", {
      className: "last-logintime"
    }, "\u6700\u8FD1\u4E00\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A", this.state.info.last_login_time || '还未登陆'), /*#__PURE__*/React.createElement("div", {
      className: "name"
    }, this.state.info.name), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-clock-o"
    }), "\u521B\u5EFA\u65F6\u95F4\uFF1A", this.state.info.zn_create_time), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-envelope"
    }), "\u90AE\u7BB1\uFF1A", this.state.info.email), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-phone"
    }), "\u624B\u673A\u53F7\uFF1A", this.state.info.phone), /*#__PURE__*/React.createElement("div", null, this.state.info.zn_note))), /*#__PURE__*/React.createElement(zn.react.Card, {
      title: "\u90E8\u95E8\u53CA\u89D2\u8272"
    }, /*#__PURE__*/React.createElement(zn.react.TreeListView, {
      disabled: true,
      cascade: false,
      enableCheckbox: true,
      onItemCheckboxChange: this.__onTreeMenuItemCheckboxChange,
      value: this.state.info.roleIds,
      itemContentRender: this.__itemContentRender,
      ref: "maintreemenu",
      activeAll: true,
      data: this.state.data
    }))));
  }
});