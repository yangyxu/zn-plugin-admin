"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: '',
      headers: [],
      insertInputs: [],
      updateInputs: []
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model
      }),
      currItem: null,
      toolbarItems: [{
        text: '新建项目',
        name: 'addItem',
        icon: 'fa-plus'
      }, {
        text: '编辑项目',
        name: 'updateItem',
        icon: 'fa-edit'
      }, {
        text: '删除项目',
        name: 'deleteItem',
        icon: 'fa-remove'
      }]
    };
  },
  __onTableRowClick: function __onTableRowClick(event, data, row, table) {
    this.state.currItem = data;
  },
  __doSuccess: function __doSuccess() {
    zn.modal.close();
    zn.toast.success('操作成功！');
    this.state.data.refresh();
  },
  __addItem: function __addItem(pid) {
    zn.dialog({
      title: '添加项',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: this.props.model
        },
        merge: "values",
        onSubmitSuccess: this.__doSuccess,
        btns: [{
          text: '新建项目',
          icon: 'fa-plus',
          type: 'submit',
          "float": 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          status: 'danger',
          "float": 'right'
        }],
        items: this.props.insertInputs
      })
    });
  },
  __updateItem: function __updateItem(data) {
    zn.dialog({
      title: '更新项目信息',
      content: React.createElement(zn.react.Form, {
        method: "POST",
        layout: "stacked",
        action: "/zn.plugin.admin/model/updates",
        exts: {
          model: this.props.model
        },
        merge: "updates",
        data: data,
        onSubmitSuccess: this.__doSuccess,
        btns: [{
          text: '更新',
          icon: 'fa-edit',
          type: 'submit',
          "float": 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          status: 'danger',
          "float": 'right'
        }],
        items: this.props.updateInputs
      })
    });
  },
  __onToolbarClick: function __onToolbarClick(item) {
    if (item.name == 'addItem') {
      this.__addItem();

      return;
    }

    if (!this.state.currItem) {
      zn.toast.warning('必须选择主项');
      return false;
    }

    switch (item.name) {
      case 'updateItem':
        this.__updateItem(this.state.currItem);

        break;

      case 'deleteItem':
        zn.confirm('确认删除该项吗？', '提示', function () {
          zn.http.post('/zn.plugin.admin/model/delete', {
            model: this.props.model,
            where: {
              id: this.state.currItem.id
            }
          }).then(function (data) {
            this.state.data.refresh();
            zn.toast.success('删除成功！');
          }.bind(this), function (data) {
            zn.toast.error('删除出错: ' + data.result);
          });
        }.bind(this));
        break;
    }
  },
  render: function render() {
    return React.createElement(zn.react.ActivityLayout, {
      direction: "top-bottoom",
      begin: 35,
      barWidth: 3
    }, React.createElement(zn.react.ButtonGroup, {
      "float": "right",
      items: this.state.toolbarItems,
      onClick: this.__onToolbarClick
    }), React.createElement(zn.react.PagerView, {
      view: "Table",
      enableFilter: false,
      checkbox: 50,
      showHeader: true,
      data: this.state.data,
      onTableRowClick: this.__onTableRowClick,
      items: this.props.headers
    }));
  }
});