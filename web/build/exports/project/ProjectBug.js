"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      data: null,
      model: 'ZNPluginAdminProjectBug'
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.state.data.extend({
        where: {
          project_id: nextProps.data.id
        }
      }).exec();
    }
  },
  getInitialState: function getInitialState() {
    var _where = {};

    if (this.props.data) {
      _where.project_id = this.props.data.id;
    }

    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model,
        where: _where
      }),
      items: [{
        title: '操作',
        width: 60,
        textAlign: 'center'
      }, {
        title: '问题',
        name: 'zn_title',
        width: 220,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '状态',
        name: 'state',
        width: 80,
        filter: {
          type: 'Menu',
          data: [{
            text: '待处理',
            value: 0
          }, {
            text: '处理中...',
            value: 2
          }, {
            text: '已经解决',
            value: 3
          }, {
            text: '已经确认',
            value: 3
          }],
          opts: ['=']
        }
      }, {
        title: '优先级',
        name: 'priority',
        width: 80,
        filter: {
          type: 'Menu',
          data: [{
            text: '正常',
            value: 1
          }, {
            text: '紧急',
            value: 2
          }, {
            text: '非常紧急',
            value: 3
          }],
          opts: ['=']
        }
      }, {
        title: '开始时间',
        name: 'begin_time',
        width: 140
      }, {
        title: '结束时间',
        name: 'end_time',
        width: 140
      }, {
        title: '完成时间',
        name: 'finished_time',
        width: 140
      }, {
        title: '提交时间',
        name: 'zn_create_time',
        width: 140
      }, {
        title: '描述',
        name: 'zn_note'
      }],
      formItems: [{
        title: '问题',
        name: 'zn_title',
        type: 'Textarea'
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
        title: '附件',
        name: 'files',
        type: 'FileUploader',
        action: '/zn.plugin.admin/uploadFiles'
      }, {
        title: '问题描述',
        name: 'description',
        type: 'RichEditor'
      }, {
        title: '解决方案',
        name: 'solution',
        type: 'RichEditor'
      }],
      toolbarItems: [{
        text: '添加',
        icon: 'fa-plus'
      }]
    };
  },
  __onRowActions: function __onRowActions(value, data) {
    var _data = this.state.data;

    var _self = this;

    switch (value.item.icon) {
      case 'fa-remove':
        zn.confirm('确定删除该数据吗？', '提示', function () {
          zn.http.post('/zn.plugin.admin/model/delete', {
            model: _self.props.model,
            where: {
              id: data.id
            }
          }).then(function (data) {
            zn.toast.success('删除成功！');

            _data.refresh();
          });
        });
        break;

      case 'fa-edit':
        this.__updateItem(data);

        break;
    }
  },
  __onView: function __onView() {},
  __onTableColumnRender: function __onTableColumnRender(rowIndex, columnIndex, data, item, value) {
    var _this = this;

    switch (columnIndex) {
      case 0:
        return React.createElement(zn.react.ListView, {
          className: "zr-flex",
          data: [{
            text: '删除',
            icon: 'fa-remove'
          }, {
            text: '修改',
            icon: 'fa-edit'
          }],
          itemRender: function itemRender(item, index) {
            return React.createElement("i", {
              title: item.text,
              className: 'fa ' + item.icon,
              style: item.style
            });
          },
          onClick: function onClick(value) {
            return _this.__onRowActions(value, data);
          }
        });

      case 1:
        return React.createElement("a", {
          style: {
            textDecoration: 'underline'
          },
          onClick: function onClick() {
            return _this.__onView(data);
          }
        }, value);

      case 2:
        switch (+value) {
          case 0:
            return React.createElement("span", null, "\u7B49\u5F85\u5904\u7406");

          case 1:
            return React.createElement("span", {
              style: {
                color: 'yellow'
              }
            }, "\u5904\u7406\u4E2D");

          case 2:
            return React.createElement("span", {
              style: {
                color: 'red'
              }
            }, "\u5DF2\u7ECF\u89E3\u51B3");

          case 3:
            return React.createElement("span", {
              style: {
                color: 'red'
              }
            }, "\u5DF2\u7ECF\u786E\u8BA4");
        }

        return null;

      case 3:
        switch (+value) {
          case 1:
            return React.createElement("span", null, "\u6B63\u5E38");

          case 2:
            return React.createElement("span", {
              style: {
                color: '#F44336'
              }
            }, "\u7D27\u6025");

          case 3:
            return React.createElement("span", {
              style: {
                color: 'red'
              }
            }, "\u975E\u5E38\u7D27\u6025");
        }

        return null;
    }
  },
  __updateItem: function __updateItem(data) {
    zn.dialog({
      title: '修改',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model,
          where: {
            id: data.id
          }
        },
        merge: "updates",
        value: zn.store.post('/zn.plugin.admin/model/selectOne', {
          model: this.props.model,
          where: {
            id: data.id
          }
        }),
        onSubmitSuccess: this.__doSuccess,
        items: this.state.formItems
      })
    });
  },
  __doSuccess: function __doSuccess() {
    zn.modal.close();
    zn.toast.success('操作成功');
    this.state.data.refresh();
  },
  __addItem: function __addItem(pid) {
    if (!this.props.data) {
      zn.toast.warning('请先选择左边商品类型项');
      return false;
    }

    zn.dialog({
      title: '添加',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: this.props.model
        },
        hiddens: {
          project_id: this.props.data.id
        },
        merge: "values",
        onSubmitSuccess: this.__doSuccess,
        btns: [{
          text: '添加',
          icon: 'fa-plus',
          type: 'submit',
          float: 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          status: 'danger',
          float: 'right'
        }],
        items: this.state.formItems
      })
    });
  },
  __onToolbarClick: function __onToolbarClick(rtitem) {
    switch (rtitem.icon) {
      case 'fa-plus':
        this.__addItem();

        break;
    }
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u95EE\u9898\u5217\u8868",
      icon: "fa-list-ul",
      onToolbarClick: this.__onToolbarClick,
      toolbarItems: this.state.toolbarItems
    }, React.createElement(zn.react.PagerView, {
      view: "Table",
      checkbox: 0,
      enableFilter: true,
      showHeader: true,
      data: this.state.data,
      columnRender: this.__onTableColumnRender,
      onTableRowClick: this.__onTableRowClick,
      items: this.state.items
    }));
  }
});