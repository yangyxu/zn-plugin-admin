"use strict";

require('./Dashboard.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    if (!zn.react.session.json()) {
      zn.react.session.doLogin();
    }

    return {
      userId: zn.react.session.json().id,
      info: null
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
  render: function render() {
    if (!this.state.info) {
      return /*#__PURE__*/React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
        loader: "timer"
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "zn-plugin-admin-my-dashboard"
    });
  }
});