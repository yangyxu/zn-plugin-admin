"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var TreeModelView = require('../../component/model/TreeModelView');

var ProjectBug = require('./ProjectBug.js');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminProject',
      title: '项目管理',
      leftWidth: 20,
      pid: 0,
      fields: [{
        title: '模块名称',
        type: 'Input',
        name: 'zn_title'
      }, {
        title: '版本号',
        type: 'Input',
        name: 'version'
      }, {
        title: '优先级',
        type: 'Select',
        name: 'priority',
        data: [{
          text: '正常',
          value: 1
        }, {
          text: '紧急',
          value: 2
        }, {
          text: '非常紧急',
          value: 3
        }]
      }, {
        title: '开始时间',
        name: 'begin_time',
        type: 'Timer'
      }, {
        title: '结束时间',
        name: 'end_time',
        type: 'Timer'
      }, {
        title: '文件',
        name: 'files',
        type: 'FileUploader',
        action: '/zn.plugin.admin/uploadFiles'
      }, {
        title: '功能表述',
        type: 'RichEditor',
        name: 'description'
      }, {
        title: '备注',
        type: 'Textarea',
        name: 'zn_note'
      }]
    };
  },
  __rightRender: function __rightRender(tree) {
    var _currItem = tree.state.currItem;
    return /*#__PURE__*/React.createElement(ProjectBug, {
      data: _currItem ? _currItem.props.data : null
    });
  },
  __itemContentRender: function __itemContentRender(item) {
    //console.log(item);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        lineHeight: '25px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, item.data.zn_title), /*#__PURE__*/React.createElement("span", {
      className: "version"
    }, "(", item.data.version, ")"));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(TreeModelView, _extends({
      itemContentRender: this.__itemContentRender
    }, this.props, {
      rightRender: this.__rightRender
    }));
  }
});