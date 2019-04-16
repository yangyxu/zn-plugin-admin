"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

require('./RoleSelector.less');

var React = require('react');

var TreeSelector = require('./TreeSelector');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      pid: 1,
      checkboxEnabled: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      text: this.props.text
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.value != this.props.value) {
      this.setValue(nextProps.value);
    }
  },
  __onValueChange: function __onValueChange(obj) {
    this.state.text = obj.text;
    this.state.value = obj.value;
    this.props.onChange && this.props.onChange(obj);
  },
  setValue: function setValue(value) {
    this.state.value = value;
    this.refs.treeselector.setValue(value);
  },
  getValue: function getValue() {
    return this.state.value;
  },
  __itemContentRender: function __itemContentRender(data) {
    var _icon = '';

    if (data.type == 1) {
      _icon = 'fa-sitemap';
    }

    if (data.type == 2) {
      _icon = 'fa-graduation-cap';
    }

    return React.createElement("span", null, React.createElement("i", {
      style: {
        margin: 5
      },
      className: 'fa ' + _icon
    }), data.zn_title);
  },
  render: function render() {
    return React.createElement(TreeSelector, _extends({
      ref: "treeselector"
    }, this.props, {
      model: "ZNPluginAdminRole",
      value: this.state.value,
      itemContentRender: this.__itemContentRender,
      className: zn.react.classname("zn-plugin-admin-role-selector", this.props.className),
      onValueChange: this.__onValueChange
    }));
  }
});