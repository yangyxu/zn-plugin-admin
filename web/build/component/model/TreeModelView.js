"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var TreeEditor = require('../basic/TreeEditor');

var ModelEditor = require('../basic/ModelEditor');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminVar',
      pid: 0
    };
  },
  getInitialState: function getInitialState() {
    return {
      items: this.props.fields || [],
      currItem: null
    };
  },
  __onTreeValueChange: function __onTreeValueChange(obj) {
    this.setState({
      currItem: obj
    });
    this.props.onItemClick && this.props.onItemClick(obj);
  },
  __renderRight: function __renderRight() {
    if (this.state.currItem) {
      var _result = this.props.rightRender && this.props.rightRender(this.state.currItem, this);

      if (_result) {
        return _result;
      } else {
        return /*#__PURE__*/React.createElement(ModelEditor, _extends({}, this.props, {
          data: this.state.currItem
        }));
      }
    } else {
      var _result = this.props.emptyRender && this.props.emptyRender(this);

      if (_result) {
        return _result;
      } else {
        return /*#__PURE__*/React.createElement("div", {
          className: "zr-center zr-empty-view"
        }, "\u8BF7\u9009\u62E9\u5DE6\u8FB9\u6570\u636E\u9879.");
      }
    }
  },
  __itemContentRender: function __itemContentRender(data, treeColumn, tree) {
    return this.props.itemContentRender && this.props.itemContentRender(data, treeColumn, tree);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(zn.react.Page, _extends({
      className: "zn-plugin-admin-tree-model-view"
    }, this.props), /*#__PURE__*/React.createElement("div", {
      className: "zr-flex-layout zn-plugin-admin-master-slave-flex-layout row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "layout-header",
      style: {
        minWidth: 200,
        minHeight: 132
      }
    }, /*#__PURE__*/React.createElement(TreeEditor, _extends({}, this.props, {
      contentRender: this.__itemContentRender,
      onValueChange: this.__onTreeValueChange
    }))), /*#__PURE__*/React.createElement("div", {
      className: "layout-body"
    }, this.__renderRight())));
  }
});