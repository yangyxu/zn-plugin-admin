"use strict";

require('./InfoEdit.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      userId: this.props.userId || this.props.request.search.userId,
      info: null,
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
  __loadUserInfo: function __loadUserInfo() {
    zn.http.post('/zn.plugin.admin/user/findUserById', {
      userId: this.state.userId
    }).then(function (data) {
      this.setState({
        info: data.result
      });
    }.bind(this));
  },
  __onRoleChange: function __onRoleChange(obj) {
    zn.http.post('/zn.plugin.admin/user/updateUser', {
      data: {
        role_ids: obj.value
      },
      userId: this.state.userId
    }).then(function (data) {
      if (data.status == 200) {
        zn.toast.success('保存成功!');
      } else {
        zn.toast.error(data.result);
      }
    }, function () {
      zn.toast.error("服务器调用错误.");
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
    }), props.data.zn_title);
  },
  __onLoginTimeClick: function __onLoginTimeClick() {
    zn.react.session.relativeJump('/znpluginadmin.user.loginlog?userId=' + this.state.info.id);
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
      className: "zn-plugin-admin-user-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "info-form user-item"
    }, /*#__PURE__*/React.createElement("img", {
      className: "avatar",
      src: zn.http.fixURL(this.state.info.avatar_img) || './images/DefaultAvatar.png'
    }), /*#__PURE__*/React.createElement("div", {
      className: "details"
    }, /*#__PURE__*/React.createElement("span", {
      "data-tooltip": "\u67E5\u770B\u767B\u5F55\u65E5\u5FD7\u8BB0\u5F55",
      onClick: this.__onLoginTimeClick,
      className: "last-logintime"
    }, "\u6700\u8FD1\u4E00\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A", this.state.info.last_login_time || '还未登陆'), /*#__PURE__*/React.createElement("div", {
      className: "name"
    }, this.state.info.name), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-clock-o"
    }), "\u6CE8\u518C\u65F6\u95F4\uFF1A", this.state.info.zn_create_time), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-envelope"
    }), "\u90AE\u7BB1\uFF1A", this.state.info.email), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-phone"
    }), "\u624B\u673A\u53F7\uFF1A", this.state.info.phone), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-wechat"
    }), "\u5FAE\u4FE1\u53F7\uFF1A", this.state.info.wechat), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-qq"
    }), "QQ\u53F7\uFF1A", this.state.info.qq), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, this.state.info.zn_note))), /*#__PURE__*/React.createElement(zn.react.Card, {
      title: "\u90E8\u95E8\u53CA\u89D2\u8272"
    }, /*#__PURE__*/React.createElement(zn.plugin.admin.RoleSelector, {
      value: this.state.info.role_ids,
      onChange: this.__onRoleChange
    }))));
  }
});