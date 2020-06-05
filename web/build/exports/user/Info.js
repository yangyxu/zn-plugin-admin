"use strict";

require('./Info.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    var _id = this.props.userId || this.props.request.search.userId,
        _isSelf = false;

    if (!_id) {
      _id = zn.react.session.json().id;
      _isSelf = true;
    }

    return {
      userId: _id,
      isSelf: _isSelf,
      info: null,
      formItems: [{
        title: '头像',
        name: 'avatar_img',
        type: 'ImageUploader'
      }, {
        title: '用户名',
        name: 'name',
        type: 'Label'
      }, {
        title: '密码',
        name: 'password',
        type: 'Input',
        attrs: {
          type: 'password'
        }
      }, {
        title: '代理人',
        type: zn.plugin.admin.UserSelector,
        mulitable: true,
        name: 'agents'
      }, {
        title: '邮箱',
        name: 'email',
        type: 'Input'
      }, {
        title: 'QQ',
        name: 'qq',
        type: 'Input'
      }, {
        title: '微信号',
        name: 'wechat',
        type: 'Input'
      }, {
        title: '手机号',
        name: 'phone',
        required: true,
        type: 'Input'
      }, {
        title: '地址',
        name: 'address',
        type: 'Input'
      }, {
        title: '备注',
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
  __loadUserInfo: function __loadUserInfo() {
    zn.http.post('/zn.plugin.admin/user/findUserById', {
      userId: this.state.userId
    }).then(function (data) {
      this.setState({
        info: data.result
      });
    }.bind(this));
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
  __update: function __update() {
    var _this = this;

    zn.dialog({
      title: '修改信息',
      content: /*#__PURE__*/React.createElement(zn.react.Form, {
        merge: "updates",
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: 'ZNPluginAdminUser',
          where: {
            id: this.state.userId
          }
        },
        value: zn.store.post('/zn.plugin.admin/model/selectOne', {
          model: 'ZNPluginAdminUser',
          where: {
            id: this.state.userId
          }
        }),
        onSubmitSuccess: function onSubmitSuccess() {
          zn.notification.success('修改成功');

          _this.__loadUserInfo();
        },
        items: this.state.formItems
      })
    });
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
      icon: "fa-newspaper-o",
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
    }, this.state.isSelf && /*#__PURE__*/React.createElement("span", {
      onClick: this.__update,
      className: "last-logintime"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-edit zr-padding-3"
    }), "\u4FEE\u6539\u4FE1\u606F"), /*#__PURE__*/React.createElement("div", {
      className: "name"
    }, this.state.info.name), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-phone"
    }), "\u7535\u8BDD\uFF1A", this.state.info.phone), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-qq"
    }), "QQ\u53F7\uFF1A", this.state.info.qq), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-weixin"
    }), "\u5FAE\u4FE1\u53F7\uFF1A", this.state.info.wechat), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-envelope"
    }), "\u90AE\u7BB1\uFF1A", this.state.info.email), this.state.isSelf && /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-users"
    }), "\u4EE3\u7406\u4EBA\uFF1A", this.state.info.agents_convert), this.state.info.zn_note && /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, this.state.info.zn_note))), zn.plugin.wechat && zn.plugin.wechat.ZNPluginAdminUserWechatInfo && /*#__PURE__*/React.createElement(zn.react.Card, {
      className: "wechat-info",
      title: "\u5FAE\u4FE1\u7ED1\u5B9A\u53CA\u67E5\u770B"
    }, /*#__PURE__*/React.createElement(zn.plugin.wechat.ZNPluginAdminUserWechatInfo, {
      openid: this.state.info.zn_plugin_wechat_open_id
    })), /*#__PURE__*/React.createElement(zn.react.Card, {
      title: "\u90E8\u95E8\u53CA\u89D2\u8272"
    }, /*#__PURE__*/React.createElement(zn.plugin.admin.RoleSelector, {
      disabled: true,
      value: this.state.info.role_ids
    }))));
  }
});