"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

require('./TreeSelector.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminVar',
      pid: 1,
      value: null,
      text: null,
      debug: false,
      disabled: false,
      cascade: false,
      activeAll: true,
      checkboxEnabled: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      data: zn.store.post('/zn.plugin.admin/model/getAllByPid', {
        model: this.props.model,
        pid: this.props.pid
      })
    };
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.value != this.props.value) {
      this.setState({
        value: this.props.value
      });
    }
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    });
  },
  getValue: function getValue() {
    return this.state.value;
  },
  __itemContentRender: function __itemContentRender(value, item) {
    var _result = this.props.itemContentRender && this.props.itemContentRender(value, item);

    if (!_result) {
      _result = /*#__PURE__*/React.createElement("span", null, value.icon && /*#__PURE__*/React.createElement("i", {
        style: {
          margin: 5
        },
        className: 'fa ' + value.icon
      }), (this.props.debug ? value.id + '、' : '') + value.zn_title);
    }

    return _result;
  },
  __onValueChange: function __onValueChange(obj) {
    this.state.value = obj.value;
    this.state.text = obj.text;
    this.forceUpdate();
    this.props.onValueChange && this.props.onValueChange(obj);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(zn.react.Tree, _extends({
      ref: "tree"
    }, this.props, {
      className: zn.react.classname("zn-plugin-admin-tree-selector", this.props.className),
      data: this.state.data,
      value: this.state.value,
      text: this.state.text,
      onValueChange: this.__onValueChange,
      contentRender: this.__itemContentRender
    }));
  }
});