"use strict";

require('./UsersForRoles.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: 'ZNPluginAdminUser',
        where: this.props.roleId ? "locate('," + this.props.roleId + ",',role_ids) <> 0" : null
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.roleId != this.props.roleId) {
      this.state.data.extend({
        where: "locate('," + nextProps.roleId + ",',role_ids) <> 0"
      }).exec();
    }
  },
  __onUserClick: function __onUserClick(event, item, index) {
    event.stopPropagation();
    zn.react.session.relativeJump('/znpluginadmin.user.infoedit', {
      userId: item.id
    });
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      className: "user"
    }, /*#__PURE__*/React.createElement("img", {
      className: "avatar",
      src: item.avatar_img ? zn.http.fixURL(item.avatar_img) : "./images/DefaultAvatar.png"
    }), /*#__PURE__*/React.createElement("div", {
      className: "name",
      onClick: function onClick(event) {
        return _this.__onUserClick(event, item, index);
      }
    }, item.name));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "zn-plugin-admin-users-for-roles",
      textKey: "name",
      valueKey: "id",
      selectMode: "none",
      itemRender: this.__itemRender,
      data: this.state.data
    });
  }
});