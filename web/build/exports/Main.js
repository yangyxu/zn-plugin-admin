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

        window.document.title = _base.company_title;

        if (this.isMounted()) {
          this.setState({
            base: _base
          });
        }
      } else {
        if (this.isMounted()) {
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
    zn.react.session.doMain();
  },
  __onUserClick: function __onUserClick(user) {
    zn.preloader.open({
      content: '账号切换中...'
    });
    zn.http.post("/zn.plugin.admin/user/exchange", {
      uid: user.value
    }).then(function (data) {
      if (data.status == 200) {
        zn.react.session.doMain(data.result);
        window.location.reload();
      } else {
        zn.notification.error('登录失败： ' + data.result);
      }

      zn.preloader.close();
    }, function (err) {
      zn.notification.error('登录失败： ' + err.message);
      zn.preloader.close();
    });
  },
  __onExchangeAccount: function __onExchangeAccount() {
    zn.dialog({
      title: '账号快速切换',
      content: /*#__PURE__*/React.createElement(zn.plugin.admin.UserSelector, {
        onUserClick: this.__onUserClick
      })
    });
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
      className: "head-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wap"
    }, /*#__PURE__*/React.createElement("i", {
      onClick: this.__onMenuClick,
      className: "fa fa-bars"
    }), /*#__PURE__*/React.createElement("img", {
      className: "company-logo",
      title: "\u8DF3\u8F6C\u4E3B\u9875\u9762",
      onClick: this.__onCompanyClick,
      src: this.state.base.company_logo
    })), /*#__PURE__*/React.createElement("div", {
      className: "web",
      title: "\u8DF3\u8F6C\u4E3B\u9875\u9762",
      onClick: this.__onCompanyClick
    }, /*#__PURE__*/React.createElement("img", {
      className: "company-logo",
      src: this.state.base.company_logo
    }), /*#__PURE__*/React.createElement("div", {
      className: "company-title"
    }, this.state.base.company_title))), /*#__PURE__*/React.createElement("div", {
      className: "head-right"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "link-nav"
    }, zn.DEBUG && /*#__PURE__*/React.createElement("li", {
      onClick: this.__onExchangeAccount
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-exchange zr-padding-3"
    }), "\u8D26\u53F7\u5FEB\u901F\u5207\u6362"))), /*#__PURE__*/React.createElement("div", {
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
      href: ""
    }, "\u4E0A\u6D77\u4F51\u6D0B\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8"), " \u63D0\u4F9B\u6280\u672F\u652F\u6301"))));
  }
});

module.exports = _exports;