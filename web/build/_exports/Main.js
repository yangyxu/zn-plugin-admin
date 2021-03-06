"use strict";

require('./Main.less');

var React = require('react');

var NavigationBar = require('../component/basic/NavigationBar');

var UserSessionInfo = require('../component/basic/UserSessionInfo');

var _exports = React.createClass({
  displayName: "_exports",
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
      zn.toast.error('获取基础信息失败： ' + err.message);
    });
  },
  __loadUserRights: function __loadUserRights() {
    zn.http.get('/zn.plugin.admin/user/getUserRightsMenus').then(function (data) {
      if (data.status == 200) {
        this.setState({
          menus: data.result
        });
      } else {
        zn.notification.error('Session失效请重新登录, 谢谢！');
        zn.react.session.doHome();
      }
    }.bind(this));
  },
  __onSessionClick: function __onSessionClick() {
    zn.modal.open( /*#__PURE__*/React.createElement(UserSessionInfo, null), {
      modalStyle: {
        overflow: 'hidden'
      },
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
  __onMenuClick: function __onMenuClick() {
    zn.modal.open( /*#__PURE__*/React.createElement(NavigationBar, {
      onMenuItemClick: function onMenuItemClick() {
        return zn.modal.close();
      },
      style: {
        backgroundColor: '#000',
        overflow: 'auto'
      },
      data: this.state.menus
    }), {
      modalStyle: {
        overflow: 'auto'
      },
      className: 'modal-left',
      isMode: true,
      removeSelf: false
    });
  },
  __onCompanyClick: function __onCompanyClick() {
    zn.react.session.relativeJump('/znpluginadmin.my.dashboard');
  },
  render: function render() {
    if (!zn.react.session.validate()) {
      return false;
    }

    if (!this.state.base) {
      return /*#__PURE__*/React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
        loader: "timer"
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "zn-plugin-admin-main"
    }, /*#__PURE__*/React.createElement("img", {
      className: "background-image",
      src: this.state.base.main_background_image
    }), /*#__PURE__*/React.createElement("div", {
      className: "section-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "warp"
    }, /*#__PURE__*/React.createElement("div", {
      className: "head-left",
      title: "\u8DF3\u8F6C\u4E3B\u9875\u9762",
      onClick: this.__onCompanyClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "wap"
    }, /*#__PURE__*/React.createElement("i", {
      onClick: this.__onMenuClick,
      className: "fa fa-bars"
    }), /*#__PURE__*/React.createElement("img", {
      className: "company-logo",
      src: this.state.base.company_logo
    })), /*#__PURE__*/React.createElement("div", {
      className: "web"
    }, /*#__PURE__*/React.createElement("img", {
      className: "company-logo",
      src: this.state.base.company_logo
    }), /*#__PURE__*/React.createElement("div", {
      className: "company-title"
    }, this.state.base.company_title))), /*#__PURE__*/React.createElement("div", {
      className: "head-right"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "link-nav"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: this.state.base.company_website
    }, "\u5B98\u7F51")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: this.state.base.company_website
    }, "\u4E0B\u8F7D"))), /*#__PURE__*/React.createElement("div", {
      className: "user-session"
    }, /*#__PURE__*/React.createElement("figure", {
      className: "avatar",
      onClick: function onClick() {
        return zn.react.session.relativeJump('/znpluginadmin.user.info');
      }
    }, /*#__PURE__*/React.createElement("img", {
      "data-tooltip": "\u67E5\u770B\u6211\u7684\u4E2A\u4EBA\u4FE1\u606F",
      src: zn.http.fixURL(zn.react.session.json().avatar_img) || './images/DefaultAvatar.png'
    })), /*#__PURE__*/React.createElement("span", {
      className: "name"
    }, zn.react.session.json().name), /*#__PURE__*/React.createElement("i", {
      className: "fa fa-angle-down",
      onClick: this.__onSessionClick
    })), /*#__PURE__*/React.createElement("div", {
      className: "icons"
    }, /*#__PURE__*/React.createElement("i", {
      onClick: this.__onMessage,
      className: "fa fa-comment-o",
      title: "\u6D88\u606F"
    }), /*#__PURE__*/React.createElement("i", {
      onClick: this.__onSetting,
      className: "fa fa-gear",
      title: "\u8BBE\u7F6E"
    }), /*#__PURE__*/React.createElement("i", {
      onClick: this.__onSignOut,
      className: "sign-out fa fa-sign-out",
      title: "\u6CE8\u9500"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "section-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "warp inner-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "navigation-view zr-scroll-webkit"
    }, /*#__PURE__*/React.createElement(NavigationBar, {
      data: this.state.menus
    })), /*#__PURE__*/React.createElement("div", {
      className: "page-view"
    }, this.props.view && /*#__PURE__*/React.createElement(this.props.view, {
      request: this.props.request
    })))), /*#__PURE__*/React.createElement("div", {
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