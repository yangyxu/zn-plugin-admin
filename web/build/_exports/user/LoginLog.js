"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminUserLog'
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model,
        where: {
          user_id: this.props.request.search.userId
        }
      }),
      items: [{
        title: '操作人',
        name: 'user_id_convert',
        width: 100
      }, {
        title: '操作时间',
        name: 'zn_create_time',
        width: 180
      }, {
        title: '类型',
        name: 'type',
        width: 80
      }, {
        title: '说明',
        name: 'zn_note'
      }]
    };
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(zn.react.Page, {
      toolbarItems: [{
        text: '导出'
      }],
      onToolbarClick: this.__onToolbarClick,
      title: "\u7CFB\u7EDF\u8D26\u6237\u767B\u5F55\u65E5\u5FD7"
    }, /*#__PURE__*/React.createElement(zn.react.PagerView, {
      view: "Table",
      enableFilter: false,
      checkbox: 0,
      showHeader: true,
      data: this.state.data,
      items: this.state.items
    }));
  }
});