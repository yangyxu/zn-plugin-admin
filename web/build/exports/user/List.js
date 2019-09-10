"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminUser'
    };
  },
  getInitialState: function getInitialState() {
    return {
      status: 1,
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model,
        where: {
          status: 1
        }
      }),
      items: [{
        title: '用户名',
        name: 'name',
        width: 120,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '状态',
        name: 'status',
        width: 80
      }, {
        title: '绑定微信',
        name: 'zn_plugin_wechat_open_id',
        width: 100
      }, {
        title: '邮箱',
        name: 'email',
        width: 180,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: 'QQ',
        name: 'qq',
        width: 120,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '微信号',
        name: 'wechat',
        width: 120,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '手机号',
        name: 'phone',
        width: 120,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '角色',
        name: 'role_ids_convert',
        width: 120
      }, {
        title: '代理人',
        name: 'agents_convert',
        width: 120
      }, {
        title: '地址',
        name: 'address',
        width: 200,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '说明',
        name: 'zn_note'
      }],
      formItems: [{
        title: '头像',
        name: 'avatar_img',
        type: 'ImageUploader'
      }, {
        title: '用户名',
        name: 'name',
        type: 'Input',
        required: true,
        error: '用户名必填项!'
      }, {
        title: '状态',
        name: 'status',
        type: 'Select',
        data: [{
          text: '待激活',
          value: 0
        }, {
          text: '正常',
          value: 1
        }, {
          text: '已锁定',
          value: -1
        }],
        required: true
      }, {
        title: '邮箱',
        name: 'email',
        type: 'Input'
      }, {
        title: 'QQ',
        name: 'qq',
        type: 'Input'
      }, {
        title: '微信号',
        name: 'wechat',
        type: 'Input'
      }, {
        title: '手机号',
        name: 'phone',
        required: true,
        type: 'Input'
      }, {
        title: '部门/角色',
        type: zn.plugin.admin.RoleSelector,
        name: 'role_ids'
      }, {
        title: '地址',
        name: 'address',
        type: 'Input'
      }, {
        title: '说明',
        name: 'zn_note',
        type: 'Textarea'
      }],
      toolbarItems: [//{ text: '一键重置密码', name: 'resetpassword', icon: 'fa-plus', style: { marginRight: 5 } },
      {
        text: '添加',
        name: 'add',
        icon: 'fa-plus',
        style: {
          marginRight: 5
        }
      }, {
        text: '删除',
        name: 'remove',
        status: 'danger',
        icon: 'fa-remove',
        style: {
          marginRight: 5
        }
      }]
    };
  },
  __doSuccess: function __doSuccess() {
    this.state.data.refresh();
  },
  __addItem: function __addItem() {
    zn.dialog({
      title: '新增用户',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/user/addUser",
        merge: "values",
        exts: {
          model: this.props.model
        },
        onSubmitSuccess: this.__doSuccess,
        items: this.state.formItems
      })
    });
  },
  __updateItem: function __updateItem(data) {
    zn.dialog({
      title: '更新用户信息',
      content: React.createElement(zn.react.Form, {
        merge: "updates",
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model,
          where: {
            id: data.id
          }
        },
        value: zn.store.post('/zn.plugin.admin/model/selectOne', {
          model: this.props.model,
          where: {
            id: data.id
          }
        }),
        onSubmitSuccess: this.__doSuccess,
        items: [{
          title: '头像',
          name: 'avatar_img',
          type: 'ImageUploader'
        }, {
          title: '用户名',
          name: 'name',
          type: 'Label',
          required: true,
          error: '用户名必填项!'
        }, {
          title: '状态',
          name: 'status',
          type: 'Select',
          data: [{
            text: '待激活',
            value: 0
          }, {
            text: '正常',
            value: 1
          }, {
            text: '已锁定',
            value: -1
          }],
          required: true
        }, {
          title: '邮箱',
          name: 'email',
          type: 'Input'
        }, {
          title: 'QQ',
          name: 'qq',
          type: 'Input'
        }, {
          title: '微信号',
          name: 'wechat',
          type: 'Input'
        }, {
          title: '手机号',
          name: 'phone',
          required: true,
          type: 'Input'
        }, {
          title: '部门/角色',
          type: zn.plugin.admin.RoleSelector,
          name: 'role_ids'
        }, {
          title: '地址',
          name: 'address',
          type: 'Input'
        }, {
          title: '说明',
          name: 'zn_note',
          type: 'Textarea'
        }]
      })
    });
  },
  __viewWechatUserInfo: function __viewWechatUserInfo(value) {
    zn.dialog({
      title: 'OPENID: ' + value,
      content: React.createElement(zn.plugin.wechat.UserInfo, {
        openid: value
      })
    });
  },
  __removeItems: function __removeItems() {
    var _self = this,
        _values = this.refs.table.getValue();

    if (_values && _values.length) {
      zn.confirm('确认删除这' + _values.length + '个用户吗？', '提示', function () {
        zn.http.post('/zn.plugin.admin/model/delete', {
          model: this.props.model,
          where: "id in (" + _values.join(',') + ")"
        }).then(function () {
          zn.toast.success('删除成功');

          _self.state.data.refresh();
        }, function (data) {
          zn.toast.error('删除失败: ' + data.result);
        });
      }.bind(this));
    } else {
      zn.toast.warning('请先选择要删除的用户');
    }
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.name) {
      case 'add':
        this.__addItem();

        break;

      case 'remove':
        this.__removeItems();

        break;
    }
  },
  __onActiveUser: function __onActiveUser(data, type, btn) {
    zn.modal.close();
    zn.preloader.open({
      title: '请求中...'
    });
    zn.http.post('/zn.plugin.admin/user/active', {
      type: type,
      url: encodeURIComponent(window.location.origin + window.location.pathname),
      znid: data.zn_id
    }).then(function (data) {
      if (data.status == 200) {
        zn.notification.success("发送成功");

        if (type == 'sms') {
          this.state.data.refresh();
        }
      } else {
        zn.notification.error("激活失败：" + data.result);
      }

      zn.preloader.close();
    }.bind(this), function () {
      zn.notification.error('网络请求失败');
      zn.preloader.close();
    });
  },
  __onActive: function __onActive(data) {
    var _this = this;

    zn.dialog({
      title: "激活用户: " + data.name,
      content: React.createElement("div", {
        style: {
          padding: 20
        }
      }, React.createElement(zn.react.Button, {
        onClick: function onClick(props, btn) {
          return _this.__onActiveUser(data, 'sms', btn);
        },
        text: "\u624B\u673A\u77ED\u4FE1\u6FC0\u6D3B",
        icon: "fa-phone zr-padding-3",
        tooltip: "\u7CFB\u7EDF\u76F4\u63A5\u4EE5\u77ED\u4FE1\u65B9\u5F0F\u53D1\u9001\u8D26\u53F7\u5BC6\u7801\u5230\u624B\u673A\u4E0A"
      }), React.createElement(zn.react.Button, {
        onClick: function onClick(props, btn) {
          return _this.__onActiveUser(data, 'email', btn);
        },
        text: "\u90AE\u7BB1\u6FC0\u6D3B",
        icon: "fa-envelope zr-padding-3",
        tooltip: "\u7CFB\u7EDF\u76F4\u63A5\u4EE5\u90AE\u4EF6\u65B9\u5F0F\u53D1\u9001\u6FC0\u6D3B\u94FE\u63A5\u5230\u90AE\u7BB1\u4E2D",
        status: "warning",
        style: {
          marginTop: 20
        }
      }))
    });
  },
  __onTableColumnRender: function __onTableColumnRender(rowIndex, columnIndex, data, item, value) {
    var _this2 = this;

    switch (item.name) {
      case 'status':
        switch (value) {
          case 0:
            return React.createElement("span", {
              style: {
                color: '#1d18184d'
              }
            }, React.createElement("i", {
              onClick: function onClick() {
                return _this2.__onActive(data);
              },
              "data-tooltip": "\u70B9\u51FB\u6FC0\u6D3B\u7528\u6237",
              className: "fa fa-eye zr-padding-3"
            }), "\u5F85\u6FC0\u6D3B");

          case 1:
            return React.createElement("span", {
              style: {
                color: '#008000'
              }
            }, "\u6B63\u5E38");

          case -1:
            return React.createElement("span", {
              style: {
                color: '#d9534f'
              }
            }, "\u5DF2\u9501\u5B9A");
        }

      case 'name':
        return React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center'
          }
        }, React.createElement("i", {
          onClick: function onClick() {
            return _this2.__updateItem(data);
          },
          className: "fa fa-edit zr-padding-3"
        }), data.avatar_img && React.createElement("img", {
          className: "avatar",
          style: {
            width: 16,
            height: 16,
            margin: 5,
            borderRadius: 16
          },
          src: data.avatar_img
        }), React.createElement("a", {
          href: '#' + zn.react.session.fixPath('/znpluginadmin.user.infoedit') + '?userId=' + data.id
        }, value));

      case 'zn_plugin_wechat_open_id':
        if (value) {
          return React.createElement("a", {
            onClick: function onClick() {
              return _this2.__viewWechatUserInfo(value);
            },
            "data-tooltip": "\u67E5\u770B\u5FAE\u4FE1\u4FE1\u606F",
            style: {
              color: 'green',
              fontWeight: 'bold'
            }
          }, React.createElement("i", {
            className: "fa fa-eye zr-padding-3"
          }), "\u5DF2\u7ED1\u5B9A");
        } else {
          return React.createElement("span", null, "\u672A\u7ED1\u5B9A");
        }

      case 'qq':
        if (value) {
          return React.createElement("img", {
            "data-tooltip": value,
            style: {
              cursor: 'point'
            },
            border: "0",
            alt: "\u70B9\u51FB\u8FD9\u91CC\u53D1\u6D88\u606F",
            onClick: function onClick() {
              return window.open("http://b.qq.com/webc.htm?new=0&sid=" + value + "&o=www.kylinpop.com&q=7", '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
            },
            src: "http://wpa.qq.com/pa?p=1:" + value + ":1"
          });
        }

    }
  },
  __onStatusChange: function __onStatusChange(value) {
    this.setState({
      status: value.value
    });
    this.state.data.extend({
      where: {
        status: value.value
      }
    }).refresh();
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u7CFB\u7EDF\u8D26\u6237\u7BA1\u7406",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "status",
        onClick: this.__onStatusChange,
        value: this.state.status,
        data: [{
          status: 1,
          text: '正常'
        }, {
          status: 0,
          text: '待激活'
        }, {
          status: -1,
          text: '锁定'
        }]
      }),
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, React.createElement(zn.react.PagerView, {
      ref: "table",
      view: "Table",
      enableFilter: true,
      checkbox: 50,
      showHeader: true,
      columnRender: this.__onTableColumnRender,
      data: this.state.data,
      items: this.state.items
    }));
  }
});