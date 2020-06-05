"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var Slave = require('./Slave');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      model: '',
      where: {},
      formItems: [],
      toolbarItems: [],
      slave: {
        title: '',
        model: '',
        where: {},
        formItems: [],
        toolbarItems: []
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      masterId: null,
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model,
        where: this.props.where
      })
    };
  },
  __doSuccess: function __doSuccess() {
    zn.modal.close();
    zn.toast.success('操作成功！');
    this.state.data.refresh();
  },
  __addItem: function __addItem() {
    zn.dialog({
      title: '添加',
      content: /*#__PURE__*/React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: this.props.model
        },
        hiddens: this.props.where,
        merge: "values",
        onSubmitSuccess: this.__doSuccess,
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
        items: this.props.formItems
      })
    });
  },
  __removeItems: function __removeItems(data) {
    zn.confirm('确认删除该项吗？', '提醒', function () {
      zn.http.post('/zn.plugin.admin/model/delete', {
        model: this.props.model,
        where: {
          id: data.id
        }
      }).then(function (data) {
        this.state.data.refresh();
        zn.toast.warning('删除成功！');
      }.bind(this), function (data) {
        zn.toast.error('删除出错: ' + data.result);
      });
    }.bind(this));
  },
  __removeItem: function __removeItem() {
    if (this.state.masterId) {
      zn.confirm('确认删除该项吗？', '提醒', function () {
        zn.http.post('/zn.plugin.admin/model/delete', {
          model: this.props.model,
          where: {
            id: this.state.masterId
          }
        }).then(function (data) {
          this.state.data.refresh();
          zn.toast.warning('删除成功！');
        }.bind(this), function (data) {
          zn.toast.error('删除出错: ' + data.result);
        });
      }.bind(this));
    } else {
      zn.toast.warning('请先选择待删除数据项！');
    }
  },
  __updateItem: function __updateItem(data) {
    zn.dialog({
      title: '更新项目信息',
      content: /*#__PURE__*/React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
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
        items: this.props.formItems
      })
    });
  },
  __onToolbarClick: function __onToolbarClick(props) {
    switch (props.name) {
      case 'addItem':
        this.__addItem();

        break;

      case 'removeItem':
        this.__removeItem();

        break;

      case 'removeItems':
        this.__removeItems();

        break;
    }
  },
  __onPagerListViewClick: function __onPagerListViewClick(value, rtitem, rtlist, event) {
    this.setState({
      masterId: value
    });
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(zn.react.Page, {
      toolbarItems: this.props.toolbarItems,
      onToolbarClick: this.__onToolbarClick,
      title: this.props.title
    }, /*#__PURE__*/React.createElement(zn.react.ActivityLayout, {
      direction: "left-right",
      begin: this.props.leftWidth || 250
    }, /*#__PURE__*/React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "zr-list-view-border",
      textKey: "name",
      valueKey: "id",
      selectMode: "radio",
      fireIndex: 0,
      onItemClick: this.__onPagerListViewClick,
      itemRender: this.props.itemRender,
      itemClassName: this.props.itemClassName,
      data: this.state.data
    }), !!this.state.masterId ? /*#__PURE__*/React.createElement(Slave, _extends({}, this.props.slave, {
      masterId: this.state.masterId
    })) : /*#__PURE__*/React.createElement("div", null, "\u8BF7\u9009\u62E9\u4E3B\u8868\u6570\u636E\u8BB0\u5F55")));
  }
});