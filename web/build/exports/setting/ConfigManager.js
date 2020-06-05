"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

require('./ConfigManager.less');

var React = require('react');

var Config = React.createClass({
  displayName: "Config",
  getInitialState: function getInitialState() {
    return {
      data: null
    };
  },
  __renderArgvForm: function __renderArgvForm() {
    var _this = this;

    if (this.props.method) {
      var _items = [],
          _argv = this.props.argv || {};

      for (var key in _argv) {
        _items.push({
          title: key,
          name: key,
          type: 'Input',
          required: true,
          value: _argv[key]
        });
      }

      if (_items.length) {
        return /*#__PURE__*/React.createElement(zn.react.Group, {
          title: "\u8BF7\u6C42\u53C2\u6570"
        }, /*#__PURE__*/React.createElement(zn.react.Form, {
          items: _items,
          buttons: [{
            text: '发送请求',
            type: 'submit',
            status: 'primary'
          }],
          onSubmitBefore: this.__onFormSubmitBefore
        }));
      } else {
        return /*#__PURE__*/React.createElement(zn.react.Button, {
          onClick: function onClick() {
            return _this.__submit();
          },
          "float": "right",
          text: "\u53D1\u9001\u8BF7\u6C42"
        });
      }
    } else {
      return null;
    }
  },
  __renderData: function __renderData() {
    if (this.state.data) {
      return /*#__PURE__*/React.createElement(zn.react.Group, {
        title: "\u8FD4\u56DE\u7ED3\u679C"
      }, /*#__PURE__*/React.createElement("code", {
        style: {
          padding: 5
        }
      }, JSON.stringify(this.state.data)));
    } else {
      return null;
    }
  },
  __onFormSubmitBefore: function __onFormSubmitBefore(data) {
    return this.__submit(data), false;
  },
  __submit: function __submit(data) {
    zn.confirm('对【' + this.props.router + '】发起请求？', '提示', function () {
      var _method = this.props.method.toLowerCase() == 'get' ? 'get' : 'post';

      zn.preloader.open({
        content: '正在请求中...'
      });

      zn.http[_method](this.props.router, data || {}).then(function (data) {
        if (data.status == 200) {
          this.setState({
            data: data
          });
        } else {
          zn.notification.error(data.result);
        }

        zn.preloader.close();
      }.bind(this), function () {
        zn.notification.error('提交失败');
        zn.preloader.close();
      });
    }.bind(this));
  },
  __onRemove: function __onRemove() {
    zn.confirm('确定删除该参数？', '提示', function () {
      zn.preloader.open({
        content: '正在删除中...'
      });
      zn.http.post('/zn.plugin.admin/config/deleteById', {
        id: this.props.id
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('删除完成');
          this.props.onRemoveSuccess && this.props.onRemoveSuccess();
        } else {
          zn.notification.error(data.result);
        }

        zn.preloader.close();
      }.bind(this), function () {
        zn.notification.error('重启失败');
        zn.preloader.close();
      });
    }.bind(this));
  },
  __onEdit: function __onEdit() {},
  __onSave: function __onSave() {
    zn.confirm('确定保存改参数值？', '提示', function () {
      zn.preloader.open({
        content: '正在保存中...'
      });
      zn.http.post('/zn.plugin.admin/config/deleteById', {
        id: this.props.id
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('保存完成');
          this.props.onRemoveSuccess && this.props.onRemoveSuccess();
        } else {
          zn.notification.error(data.result);
        }

        zn.preloader.close();
      }.bind(this), function () {
        zn.notification.error('保存失败');
        zn.preloader.close();
      });
    }.bind(this));
  },
  render: function render() {
    var _this2 = this;

    var _Input = zn.react[this.props.input_type];
    return /*#__PURE__*/React.createElement("li", {
      className: "api"
    }, /*#__PURE__*/React.createElement("div", {
      className: "info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "i-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "head-left"
    }, this.props.input_type && /*#__PURE__*/React.createElement("span", {
      className: "method"
    }, this.props.input_type), /*#__PURE__*/React.createElement("span", null, this.props._key), /*#__PURE__*/React.createElement("i", {
      "data-tooltip": "\u590D\u5236\u94FE\u63A5",
      onClick: function onClick() {
        return zn.react.copyToClipboard(_this2.props._key);
      },
      className: "fa fa-clipboard zr-padding-3"
    })), /*#__PURE__*/React.createElement("div", {
      className: "head-right"
    }, /*#__PURE__*/React.createElement("span", {
      onClick: this.__onSave,
      className: "method"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-save zr-padding-3"
    }), "\u4FDD\u5B58"), /*#__PURE__*/React.createElement("span", {
      onClick: this.__onEdit,
      className: "method"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-edit zr-padding-3"
    }), "\u7F16\u8F91"), /*#__PURE__*/React.createElement("i", {
      onClick: this.__onRemove,
      className: "fa fa-remove zr-padding-3"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "i-body"
    }, /*#__PURE__*/React.createElement(zn.react.FormItem, {
      type: _Input,
      title: this.props._title,
      value: this.props._value
    }))));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      configKeys: [],
      key: null,
      configs: [],
      toolbarItems: [{
        text: '配置查询',
        name: 'config.list',
        icon: 'fa-list',
        style: {
          marginRight: 5
        }
      }, {
        text: '添加',
        name: 'config.add',
        icon: 'fa-plus',
        style: {
          marginRight: 5
        }
      }, {
        text: '删除',
        name: 'config.delete',
        status: 'danger',
        icon: 'fa-trash',
        style: {
          marginRight: 5
        }
      }]
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadConfigKeys();
  },
  __loadConfigKeys: function __loadConfigKeys() {
    zn.http.get('/zn.plugin.admin/config/get_ids').then(function (data) {
      if (data.status == 200) {
        this.setState({
          configKeys: data.result
        });
      } else {
        zn.notification.error(data.result);
      }
    }.bind(this));
  },
  __onAppClick: function __onAppClick(key) {
    key = key || this.state.key;
    zn.preloader.open({
      content: '正在加载中...'
    });
    zn.http.get("/zn.plugin.admin/config/selectBy_id", {
      _id: key.value
    }).then(function (data) {
      if (data.status == 200) {
        this.setState({
          key: key,
          configs: data.result
        });
      } else {
        zn.notification.error(data.result);
      }

      zn.preloader.close();
    }.bind(this), function () {
      zn.notification.error('服务器请求失败');
      zn.preloader.close();
    });
  },
  __renderConfigKey: function __renderConfigKey() {
    return /*#__PURE__*/React.createElement("ul", {
      className: "apps"
    }, this.state.configKeys.map(function (key, index) {
      var _this3 = this;

      return /*#__PURE__*/React.createElement("li", {
        key: index,
        className: "app " + (this.state.key == key ? 'curr' : ''),
        onClick: function onClick() {
          return _this3.__onAppClick(key);
        }
      }, /*#__PURE__*/React.createElement("a", null, key.text));
    }.bind(this)));
  },
  __addArgument: function __addArgument() {
    var _this4 = this;

    zn.dialog({
      title: '添加参数',
      content: /*#__PURE__*/React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        merge: "values",
        exts: {
          model: 'ZNPluginAdminConfig'
        },
        hiddens: {
          _id: this.state.key.value
        },
        onSubmitSuccess: function onSubmitSuccess() {
          return _this4.__onAppClick();
        },
        items: [{
          title: '_title',
          name: '_title',
          type: 'Input'
        }, {
          title: '_key',
          name: '_key',
          type: 'Input'
        }, {
          title: '_value',
          name: '_value',
          type: 'Input'
        }, {
          title: 'ref_id',
          name: 'ref_id',
          type: 'Input'
        }, {
          title: 'var_id',
          name: 'var_id',
          type: 'Input'
        }, {
          title: 'InputType',
          name: 'input_type',
          type: 'Menu',
          data: ['Input', 'ImageUploader', 'FileUploader', 'Textarea', 'RichEditor']
        }, {
          title: 'DataType',
          name: 'data_type',
          type: 'Input'
        }, {
          title: 'RichValue',
          name: '_rich_value',
          type: 'Textarea'
        }]
      })
    });
  },
  __renderConfigs: function __renderConfigs() {
    return /*#__PURE__*/React.createElement("div", null, this.state.key && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 5
      }
    }, /*#__PURE__*/React.createElement(zn.react.Button, {
      onClick: this.__addArgument,
      text: "\u6DFB\u52A0\u53C2\u6570",
      icon: "fa-plus"
    })), /*#__PURE__*/React.createElement("ul", {
      className: "apis"
    }, Object.keys(this.state.configs).map(function (key, index) {
      var _this5 = this;

      return /*#__PURE__*/React.createElement(Config, _extends({
        key: index
      }, this.state.configs[key], {
        onRemoveSuccess: function onRemoveSuccess() {
          return _this5.__onAppClick(_this5.state.key);
        }
      }));
    }.bind(this))));
  },
  __onToolbarClick: function __onToolbarClick(item) {
    var _this6 = this;

    switch (item.name) {
      case 'config.list':
        zn.react.session.relativeJump('/znpluginadmin.setting.config');
        break;

      case 'config.add':
        zn.dialog({
          title: '新增配置',
          content: /*#__PURE__*/React.createElement(zn.react.Form, {
            action: "/zn.plugin.admin/model/insert",
            merge: "values",
            exts: {
              model: 'ZNPluginAdminConfig'
            },
            onSubmitSuccess: function onSubmitSuccess() {
              return _this6.__loadConfigKeys();
            },
            items: [{
              title: '_id',
              name: '_id',
              type: 'AutoComplete',
              data: zn.store.get('/zn.plugin.admin/config/get_ids'),
              required: true,
              error: '_id必填'
            }, {
              title: '_title',
              name: '_title',
              type: 'Input'
            }, {
              title: '_key',
              name: '_key',
              type: 'Input'
            }, {
              title: '_value',
              name: '_value',
              type: 'Input'
            }, {
              title: 'ref_id',
              name: 'ref_id',
              type: 'Input'
            }, {
              title: 'var_id',
              name: 'var_id',
              type: 'Input'
            }, {
              title: 'InputType',
              name: 'input_type',
              type: 'Menu',
              data: ['Input', 'ImageUploader', 'FileUploader', 'Textarea', 'RichEditor']
            }, {
              title: 'DataType',
              name: 'data_type',
              type: 'Input'
            }, {
              title: 'RichValue',
              name: '_rich_value',
              type: 'Textarea'
            }]
          })
        });
        break;

      case 'config.delete':
        zn.confirm('确定删除该配置么？', '提示', function () {
          zn.preloader.open({
            content: '正在请求中...'
          });
          zn.http.post('/zn.plugin.admin/config/deleteBy_id', {
            _id: this.state.key._id
          }).then(function (data) {
            if (data.status == 200) {
              zn.notification.success('删除完成');
              this.setState({
                configs: {}
              });

              this.__loadConfigKeys();
            } else {
              zn.notification.error(data.result);
            }

            zn.preloader.close();
          }.bind(this), function () {
            zn.notification.error('删除失败');
            zn.preloader.close();
          });
        }.bind(this));
        break;
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(zn.react.Page, {
      className: "zn-plugin-admin-setting-config-manager",
      title: "\u914D\u7F6E\u7BA1\u7406",
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "zr-flex-layout zn-plugin-admin-master-slave-flex-layout row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "layout-header",
      style: {
        minWidth: 200
      }
    }, this.__renderConfigKey()), /*#__PURE__*/React.createElement("div", {
      className: "layout-body"
    }, this.__renderConfigs())));
  }
});