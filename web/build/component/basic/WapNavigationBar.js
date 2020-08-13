"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  __renderItem: function __renderItem(item, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "menu-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "item-title"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa " + item.icon
    }), item.zn_title), !!item.children && !!item.children.length && this.__renderChildren(item.children));
  },
  __renderChildren: function __renderChildren(children) {
    return /*#__PURE__*/React.createElement("ul", {
      className: "sub-menu-list"
    }, children.map(function (item, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement("li", {
        className: item.url && zn.react.session.containPath(item.url) ? 'active-item' : '',
        key: index,
        onClick: function onClick() {
          return _this.__onSubItemClick(item, index);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "item-title"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa " + item.icon
      }), item.zn_title));
    }.bind(this)));
  },
  __onSubItemClick: function __onSubItemClick(item, index) {
    if (item.url) {
      this.props.onMenuItemClick && this.props.onMenuItemClick(item, index);
      zn.react.session.relativeJump(item.url);
    } else {
      zn.http.get('/zn.plugin.admin/menu/getMenuPrimaryInfo?menuId=' + item.id).then(function (data) {
        if (data.status == 200) {
          zn.react.session.relativeJump("/znpluginadmin.setting.menupage", {
            menu: item.id
          });
        } else {
          zn.notification.error(data.result);
        }
      }, function () {
        zn.notification.error('请求出错');
      });
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zn-plugin-admin-navigation-bar",
      style: this.props.style
    }, /*#__PURE__*/React.createElement("ul", {
      className: "menu-list"
    }, this.props.data.map(function (item, index) {
      return this.__renderItem(item, index);
    }.bind(this))));
  }
});