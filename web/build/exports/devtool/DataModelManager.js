"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

require('./DataModelManager.less');

var React = require('react');

var API = React.createClass({
  displayName: "API",
  getInitialState: function getInitialState() {
    return {
      data: null
    };
  },
  __renderArgvForm: function __renderArgvForm() {
    var _this = this;

    if (this.props.method) {
      var _items = [],
          _argv = this.props.argv || {};

      for (var key in _argv) {
        _items.push({
          title: key,
          name: key,
          type: 'Input',
          required: true,
          value: _argv[key]
        });
      }

      if (_items.length) {
        return /*#__PURE__*/React.createElement(zn.react.Group, {
          title: "\u8BF7\u6C42\u53C2\u6570"
        }, /*#__PURE__*/React.createElement(zn.react.Form, {
          items: _items,
          buttons: [{
            text: '发送请求',
            type: 'submit',
            status: 'primary'
          }],
          onSubmitBefore: this.__onFormSubmitBefore
        }));
      } else {
        return /*#__PURE__*/React.createElement(zn.react.Button, {
          onClick: function onClick() {
            return _this.__submit();
          },
          "float": "right",
          text: "\u53D1\u9001\u8BF7\u6C42"
        });
      }
    } else {
      return null;
    }
  },
  __renderData: function __renderData() {
    if (this.state.data) {
      return /*#__PURE__*/React.createElement(zn.react.Group, {
        title: "\u8FD4\u56DE\u7ED3\u679C"
      }, /*#__PURE__*/React.createElement("code", {
        style: {
          padding: 5
        }
      }, JSON.stringify(this.state.data)));
    } else {
      return null;
    }
  },
  __onFormSubmitBefore: function __onFormSubmitBefore(data) {
    return this.__submit(data), false;
  },
  __submit: function __submit(data) {
    zn.confirm('对【' + this.props.router + '】发起请求？', '提示', function () {
      var _method = this.props.method.split('/')[0].toLowerCase();

      zn.preloader.open({
        content: '正在请求中...'
      });

      zn.http[_method](this.props.router, data || {}).then(function (data) {
        if (data.status == 200) {
          this.setState({
            data: data
          });
        } else {
          zn.notification.error(data.result);
        }

        zn.preloader.close();
      }.bind(this), function () {
        zn.notification.error('提交失败');
        zn.preloader.close();
      });
    }.bind(this));
  },
  render: function render() {
    var _this2 = this;

    return /*#__PURE__*/React.createElement("li", {
      className: "api"
    }, /*#__PURE__*/React.createElement("div", {
      className: "info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "i-header"
    }, this.props.method && /*#__PURE__*/React.createElement("span", {
      className: "method"
    }, this.props.method), /*#__PURE__*/React.createElement("span", null, this.props.router), /*#__PURE__*/React.createElement("i", {
      "data-tooltip": "\u590D\u5236\u94FE\u63A5",
      onClick: function onClick() {
        return zn.react.copyToClipboard(_this2.props.router);
      },
      className: "fa fa-clipboard zr-padding-3"
    })), /*#__PURE__*/React.createElement("div", {
      className: "i-body"
    }, this.__renderArgvForm(), this.__renderData())));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      apps: [],
      apis: [],
      app: null,
      toolbarItems: [{
        text: '更新代码',
        name: 'update.code',
        icon: 'fa-cloud-download',
        style: {
          marginRight: 5
        }
      }, {
        text: '重启',
        name: 'restart',
        status: 'danger',
        icon: 'fa-play-circle',
        style: {
          marginRight: 5
        }
      }]
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadApps();
  },
  __loadApps: function __loadApps() {
    zn.http.get('/$/apps').then(function (data) {
      if (data.status == 200) {
        this.setState({
          apps: data.result
        });
      } else {
        zn.notification.error(data.result);
      }
    }.bind(this));
  },
  __onAppClick: function __onAppClick(app) {
    zn.preloader.open({
      content: '正在加载中...'
    });
    zn.http.get('/' + app + '/apis').then(function (data) {
      if (data.status == 200) {
        this.setState({
          app: app,
          apis: data.result
        });
      } else {
        zn.notification.error(data.result);
      }

      zn.preloader.close();
    }.bind(this), function () {
      zn.notification.error('服务器请求失败');
      zn.preloader.close();
    });
  },
  __renderApps: function __renderApps() {
    return /*#__PURE__*/React.createElement("ul", {
      className: "apps"
    }, this.state.apps.map(function (app, index) {
      var _this3 = this;

      return /*#__PURE__*/React.createElement("li", {
        key: index,
        className: "app " + (this.state.app == app ? 'curr' : ''),
        onClick: function onClick() {
          return _this3.__onAppClick(app);
        }
      }, /*#__PURE__*/React.createElement("a", null, app));
    }.bind(this)));
  },
  __renderApis: function __renderApis() {
    return /*#__PURE__*/React.createElement("ul", {
      className: "apis"
    }, this.state.apis.map(function (api, index) {
      return /*#__PURE__*/React.createElement(API, _extends({
        key: index
      }, api));
    }.bind(this)));
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.name) {
      case 'update.code':
        zn.confirm('更新后台服务代码？', '提示', function () {
          zn.preloader.open({
            content: '正在更新中...'
          });
          zn.http.get('/$/pull').then(function (data) {
            if (data.status == 200) {
              zn.notification.success('更新完成');
            } else {
              zn.notification.error(data.result);
            }

            zn.preloader.close();
          }.bind(this), function () {
            zn.notification.error('更新失败');
            zn.preloader.close();
          });
        }.bind(this));
        break;

      case 'restart':
        zn.confirm('重启后台服务？', '提示', function () {
          zn.preloader.open({
            content: '正在请求中...'
          });
          zn.http.get('/$/redeploy').then(function (data) {
            if (data.status == 200) {
              zn.notification.success('重启完成');
            } else {
              zn.notification.error(data.result);
            }

            zn.preloader.close();
          }.bind(this), function () {
            zn.notification.error('重启失败');
            zn.preloader.close();
          });
        }.bind(this));
        break;
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(zn.react.Page, {
      className: "zn-plugin-admin-devtool-server-manager",
      title: "\u670D\u52A1\u5668API\u7BA1\u7406",
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "zr-flex-layout zn-plugin-admin-master-slave-flex-layout row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "layout-header",
      style: {
        minWidth: 200
      }
    }, this.__renderApps()), /*#__PURE__*/React.createElement("div", {
      className: "layout-body"
    }, this.__renderApis())));
  }
});