"use strict";

require('./UserActive.less');

var React = require('react'); //var QRCode = require('qrcode.react');


var _exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      base: null,
      user: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadBaseSetting();

    this.__emailActive();
  },
  __emailActive: function __emailActive() {
    var _znid = this.props.request.search.znid;

    if (!_znid) {
      return zn.notification.error('无效的激活链接');
    }

    zn.http.post("/zn.plugin.admin/user/emailActive", {
      znid: _znid,
      url: encodeURIComponent(window.location.origin + window.location.pathname)
    }).then(function (data) {
      if (data.status == 200) {
        this.setState({
          user: data.result
        });
      } else {
        zn.notification.error(data.result);
      }
    }.bind(this), function (err) {
      zn.notification.error('网络请求失败');
    });
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

        window.document.title = _base.company_title;
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
      zn.notification.error('获取基础信息失败');
    });
  },
  render: function render() {
    if (!this.state.base) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u57FA\u7840\u4FE1\u606F...",
        loader: "timer"
      });
    }

    return React.createElement("div", {
      className: "zn-plugin-admin-user-active"
    }, React.createElement("img", {
      className: "background-image",
      src: this.state.base.login_background_image
    }), React.createElement("div", {
      className: "section-head"
    }, React.createElement("div", {
      className: "warp"
    }, React.createElement("div", {
      className: "head-left"
    }, React.createElement("img", {
      className: "company-logo",
      src: this.state.base.company_logo
    }), React.createElement("div", {
      className: "company-title"
    }, this.state.base.company_title)), React.createElement("div", {
      className: "head-right"
    }, React.createElement("ul", {
      className: "link-nav"
    }, React.createElement("li", null, React.createElement("a", {
      href: this.state.base.company_website
    }, "\u5B98\u7F51")), React.createElement("li", null, "\u4E0B\u8F7D"))))), React.createElement("div", {
      className: "section-body zr-scroll-webkit"
    }, React.createElement("div", {
      className: "warp",
      style: {
        width: 640,
        backgroundColor: '#FFF',
        padding: 20
      }
    }, this.state.user ? React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }
    }, React.createElement("div", {
      style: {
        padding: 10
      }
    }, "hi ", this.state.user.name), this.state.user.actived ? React.createElement("div", {
      style: {
        padding: 10
      }
    }, "\u60A8\u8D26\u53F7\u5DF2\u7ECF\u6FC0\u6D3B, \u8BF7\u52FF\u91CD\u590D\u64CD\u4F5C\u3002") : React.createElement("div", {
      style: {
        padding: 10
      }
    }, "\u606D\u559C\u60A8, \u60A8\u7684\u8D26\u53F7\u6210\u529F\u6FC0\u6D3B\uFF0C\u7CFB\u7EDF\u5DF2\u628A\u767B\u5F55\u4FE1\u606F\u53D1\u9001\u5230\u60A8\u6FC0\u6D3B\u90AE\u7BB1(", this.state.user.email, ")\u3002"), React.createElement(zn.react.Button, {
      onClick: function onClick() {
        return zn.react.session.jump('/zn.plugin.admin/login');
      },
      style: {
        margin: 10
      },
      text: "\u70B9\u51FB\u767B\u5F55"
    })) : React.createElement("div", null, React.createElement(zn.react.DataLoader, {
      content: "\u9A8C\u8BC1\u4E2D...",
      loader: "timer"
    })))), React.createElement("div", {
      className: "section-foot"
    }, React.createElement("div", {
      className: "warp"
    }, React.createElement("div", {
      className: "TM"
    }, React.createElement("a", {
      href: "http://www.youyangit.com"
    }, React.createElement("img", {
      src: "./images/youyangit-logo.png"
    }), "\u4E0A\u6D77\u4F51\u6D0B\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8"), " \u63D0\u4F9B\u6280\u672F\u652F\u6301"))));
  }
});

module.exports = _exports;