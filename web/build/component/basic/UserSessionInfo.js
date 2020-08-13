"use strict";

require('./UserSessionInfo.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {},
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zn-plugin-admin-user-session-info"
    });
  }
});