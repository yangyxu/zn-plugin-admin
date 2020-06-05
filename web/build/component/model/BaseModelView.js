"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model
      }),
      items: [],
      currItem: null,
      toolbarItems: [{
        text: '添加项',
        name: 'addItem',
        icon: 'fa-plus',
        style: {
          marginRight: 0
        }
      }, {
        text: '编辑项',
        name: 'updateItem',
        icon: 'fa-edit'
      }, {
        text: '删除项',
        name: 'deleteItem',
        icon: 'fa-remove'
      }]
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadTableHeaders();
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.model != this.props.model) {
      this.props.model = nextProps.model;

      this.__loadTableHeaders(function () {
        this.state.data.extend({
          model: nextProps.model
        }).refresh();
      }.bind(this));
    }
  },
  __loadTableHeaders: function __loadTableHeaders(callback) {
    zn.http.get('/zn.plugin.admin/model/getModelProps?model=' + this.props.model).then(function (data) {
      this.setState({
        items: data.result
      });
      callback && callback(data);
    }.bind(this));
  },
  __onTableRowClick: function __onTableRowClick(event, data, row, table) {
    this._currItem = data;
  },
  __addItemSuccess: function __addItemSuccess() {
    zn.modal.close();
    zn.toast.success('添加成功！');
  },
  __addItem: function __addItem(pid) {
    var _this = this;

    zn.dialog({
      title: '添加项',
      content: /*#__PURE__*/React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: this.props.model
        },
        merge: "values",
        onSubmitSuccess: function onSubmitSuccess() {
          return _this.state.data.refresh();
        },
        btns: [{
          text: '添加',
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
        items: [{
          name: 'title',
          title: 'title',
          type: 'text',
          required: true
        }]
      })
    });
  },
  __updateItem: function __updateItem(data) {
    var _this2 = this;

    zn.dialog({
      title: '修改项',
      content: /*#__PURE__*/React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model
        },
        merge: "updates",
        data: data,
        onSubmitSuccess: function onSubmitSuccess() {
          return _this2.state.data.refresh();
        },
        btns: [{
          text: '添加',
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
        items: [{
          name: 'title',
          title: 'title',
          type: 'text',
          required: true
        }]
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
    return /*#__PURE__*/React.createElement(zn.react.ActivityLayout, {
      direction: "top-bottoom",
      begin: 35,
      barWidth: 3
    }, /*#__PURE__*/React.createElement(zn.react.ButtonGroup, {
      "float": "right",
      items: this.state.toolbarItems,
      onClick: this.__onToolbarClick
    }), /*#__PURE__*/React.createElement(zn.react.PagerView, {
      view: "Table",
      enableFilter: false,
      checkbox: 50,
      showHeader: true,
      data: this.state.data,
      items: this.state.items
    }));
  }
});