"use strict";

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
  __renderItem: function __renderItem(item, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "menu-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "item-title"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa " + item.icon
    }), item.zn_title), !!item.children && !!item.children.length && this.__renderChildren(item.children));
  },
  __renderChildren: function __renderChildren(children) {
    return /*#__PURE__*/React.createElement("ul", {
      className: "sub-menu-list"
    }, children.map(function (item, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement("li", {
        className: zn.react.session.isPath(item.url) ? 'active-item' : '',
        key: index,
        onClick: function onClick() {
          return _this.__onSubItemClick(item, index);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "item-title"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa " + item.icon
      }), item.zn_title));
    }.bind(this)));
  },
  __onSubItemClick: function __onSubItemClick(item, index) {
    if (item.url) {
      zn.react.session.relativeJump(item.url);
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zn-plugin-admin-widget-navigation-bar"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "menu-list"
    }, this.props.data.map(function (item, index) {
      return this.__renderItem(item, index);
    }.bind(this))));
  }
});