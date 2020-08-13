"use strict";

require('./Login.less');

var React = require('react');

var _exports = React.createClass({
  displayName: "exports",
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
        var _base = data.result;
        var _base = data.result;

        if (_base.main_background_image.indexOf('/') == 0) {
          _base.company_logo = zn.http.fixURL(_base.company_logo);
          _base.login_background_image = zn.http.fixURL(_base.login_background_image);
          _base.main_background_image = zn.http.fixURL(_base.main_background_image);
        }

        this.setState({
          base: _base
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
      zn.notification.error('获取基础信息失败： ' + err.message);
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
        zn.notification.error('登录失败： ' + data.result);
      }
    }, function (err) {
      zn.notification.error('登录失败： ' + err.message);
    });
  },
  render: function render() {
    if (!this.state.base) {
      return /*#__PURE__*/React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u57FA\u7840\u4FE1\u606F...",
        loader: "timer"
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "zn-plugin-admin-login"
    }, /*#__PURE__*/React.createElement("img", {
      className: "background-image",
      src: this.state.base.login_background_image
    }), /*#__PURE__*/React.createElement("div", {
      className: "section-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "warp"
    }, /*#__PURE__*/React.createElement("div", {
      className: "head-left"
    }, /*#__PURE__*/React.createElement("img", {
      className: "company-logo",
      src: this.state.base.company_logo
    }), /*#__PURE__*/React.createElement("div", {
      className: "company-title"
    }, this.state.base.company_title)), /*#__PURE__*/React.createElement("div", {
      className: "head-right"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "link-nav"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: this.state.base.company_website
    }, "\u5B98\u7F51")), /*#__PURE__*/React.createElement("li", null, "\u4E0B\u8F7D"))))), /*#__PURE__*/React.createElement("div", {
      className: "section-body zr-scroll-webkit"
    }, /*#__PURE__*/React.createElement("div", {
      className: "warp",
      style: {
        width: 640
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "intro"
    }, /*#__PURE__*/React.createElement("div", {
      className: "qr"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        margin: 10
      }
    }, "\u624B\u673A\u5BA2\u6237\u7AEF"), this.state.base.client_qr_image && /*#__PURE__*/React.createElement("img", {
      className: "qr-image",
      src: this.state.base.client_qr_image
    }), /*#__PURE__*/React.createElement("span", null, "\u626B\u4E00\u626B\u7ACB\u5373\u4E0B\u8F7D"))), /*#__PURE__*/React.createElement("div", {
      className: "form-dialog"
    }, /*#__PURE__*/React.createElement("form", {
      className: "form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dialog-title"
    }, "\u7528\u6237\u767B\u5F55"), /*#__PURE__*/React.createElement("div", {
      className: "form-item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-user"
    }), /*#__PURE__*/React.createElement("input", {
      name: "name",
      type: "input",
      placeholder: "\u767B\u5F55\u7528\u6237\u540D",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-item"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-lock"
    }), /*#__PURE__*/React.createElement("input", {
      name: "password",
      type: "password",
      placeholder: "\u5BC6\u7801",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-tips"
    }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "checkbox"
    }), "\u8BB0\u4F4F\u5BC6\u7801"), /*#__PURE__*/React.createElement("label", null, "\u5FD8\u8BB0\u5BC6\u7801")), /*#__PURE__*/React.createElement("button", {
      onClick: this.__onLogin,
      className: "btn-login"
    }, "\u767B \u5F55"))))), /*#__PURE__*/React.createElement("div", {
      className: "section-foot"
    }, /*#__PURE__*/React.createElement("div", {
      className: "warp"
    }, /*#__PURE__*/React.createElement("div", {
      className: "TM"
    }, /*#__PURE__*/React.createElement("a", {
      href: "http://www.youyangit.com"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./images/youyangit-logo.png"
    }), "\u4E0A\u6D77\u4F51\u6D0B\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8"), " \u63D0\u4F9B\u6280\u672F\u652F\u6301"))));
  }
});

_exports.global = true;
module.exports = _exports;