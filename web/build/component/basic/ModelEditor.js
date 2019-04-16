"use strict";

require('./ModelEditor.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  __onSubmitSuccess: function __onSubmitSuccess() {
    zn.notification.success("编辑成功");

    if (this.props.data.treeitem.parent) {
      this.props.data.treeitem.parent.refresh();
    } else {
      this.props.data.tree.refresh();
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: "zn-plugin-admin-model-editor"
    }, this.props.data && React.createElement(zn.react.Form, {
      merge: "updates",
      action: "/zn.plugin.admin/model/update",
      exts: {
        model: this.props.model,
        where: {
          id: this.props.data.value
        }
      },
      value: zn.store.post("/zn.plugin.admin/model/selectOne", {
        model: this.props.model,
        where: {
          id: this.props.data.value
        }
      }),
      items: this.props.fields,
      onSubmitSuccess: this.__onSubmitSuccess
    }));
  }
});