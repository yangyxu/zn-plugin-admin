"use strict";

require('./UserList.less');

var React = require('react');

var LetterSelector = require('./LetterSelector.js');

var RoleSelector = require('./RoleSelector.js');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      mulitable: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      currIndex: 0,
      search: '',
      loading: false,
      value: this.props.mulitable ? ',' : 0,
      users: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadUsers();
  },
  __onLetterChange: function __onLetterChange(value) {
    this.setState({
      loading: true
    });

    if (value.length > 2) {
      zn.http.get('/zn.plugin.admin/user/findUsersByChars?chars=' + value).then(function (data) {
        this.setState({
          loading: false,
          users: data.result
        });
      }.bind(this));
    } else {
      this.__loadUsers();
    }
  },
  __onRoleChange: function __onRoleChange(value) {
    this.setState({
      loading: true
    });
    zn.http.get('/zn.plugin.admin/role/getRoleUsers?role=' + value.value).then(function (data) {
      this.setState({
        loading: false,
        users: data.result
      });
    }.bind(this));
  },
  __loadUsers: function __loadUsers(where) {
    this.setState({
      loading: true
    });
    zn.http.post('/zn.plugin.admin/user/getAllUser').then(function (data) {
      this.setState({
        loading: false,
        users: data.result
      });
    }.bind(this));
  },
  __onSearch: function __onSearch(value) {
    this.setState({
      search: value
    });
  },
  __onUserClick: function __onUserClick(user) {
    var _id = user.value + ',';

    if (this.props.mulitable) {
      if (this.state.value.indexOf(',' + _id) == -1) {
        this.state.value = this.state.value + _id;
      } else {
        this.state.value = this.state.value.replace(',' + _id, ',');
      }
    } else {
      if (this.state.value == user.value) {
        this.state.value = null;
      } else {
        this.state.value = user.value;
      }
    }

    this.props.onUserClick && this.props.onUserClick(user);
    this.setValue(this.state.value);
  },
  __onUserCheckAll: function __onUserCheckAll(event, value) {
    if (value) {
      this.setValue(',' + this._users.join(',') + ',');
    } else {
      this.setValue(',');
    }
  },
  __renderUsers: function __renderUsers() {
    var _value = this.state.value,
        _search = this.state.search;
    this._users = [];
    return /*#__PURE__*/React.createElement("div", {
      className: "user-view"
    }, /*#__PURE__*/React.createElement(zn.react.Search, {
      onSearch: this.__onSearch
    }), !this.state.loading ? /*#__PURE__*/React.createElement("ul", {
      className: "users"
    }, this.state.users.map(function (user, index) {
      var _this = this;

      var _selected = false,
          _userId = user.value,
          _name = user.text;

      if (_search && _name.indexOf(_search) == -1) {
        return null;
      } else {
        if (_search) {
          _name = _name.replace(_search, '<span style="color:red">' + _search + '</span>');
        }
      }

      this._users.push(_userId);

      if (this.props.mulitable) {
        _selected = _value.toString().indexOf(',' + _userId + ',') != -1;
      } else {
        _selected = +_value === +_userId;
      }

      return /*#__PURE__*/React.createElement("li", {
        key: index,
        className: 'user ' + (_selected ? 'selected' : ''),
        onClick: function onClick() {
          return _this.__onUserClick(user);
        }
      }, user.avatar_img ? /*#__PURE__*/React.createElement("img", {
        className: "avatar",
        src: zn.http.fixURL(user.avatar_img) || './images/DefaultAvatar.png'
      }) : /*#__PURE__*/React.createElement("span", {
        className: "first-char"
      }, user.first_char), /*#__PURE__*/React.createElement("span", {
        className: "name",
        dangerouslySetInnerHTML: {
          __html: _name
        }
      }));
    }.bind(this)), this.props.mulitable && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(zn.react.Checkbox, {
      text: "\u5168\u9009",
      onChange: this.__onUserCheckAll
    }))) : /*#__PURE__*/React.createElement(zn.react.DataLoader, {
      content: "\u6B63\u5728\u52A0\u8F7D...",
      loader: "timer"
    }));
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    });
  },
  getValue: function getValue() {
    if (!this.props.mulitable && !this.state.value) {
      return 0;
    }

    return this.state.value;
  },
  __renderView: function __renderView() {
    switch (this.state.currIndex) {
      case 0:
        return /*#__PURE__*/React.createElement(LetterSelector, {
          onChange: this.__onLetterChange
        });

      case 1:
        return /*#__PURE__*/React.createElement(RoleSelector, {
          checkboxEnabled: false,
          onChange: this.__onRoleChange
        });
    }
  },
  render: function render() {
    var _this2 = this;

    return /*#__PURE__*/React.createElement("div", {
      className: "zn-plugin-admin-user-selector"
    }, /*#__PURE__*/React.createElement(zn.react.ListView, {
      className: "zr-tab-ios",
      selectMode: "radio",
      textKey: "text",
      valueKey: "index",
      onClick: function onClick(value) {
        return _this2.setState({
          currIndex: value.item.index
        });
      },
      value: this.state.currIndex,
      data: [{
        index: 0,
        text: '首字母',
        icon: 'fa-font'
      }, {
        index: 1,
        text: '所属部门',
        icon: 'fa-sitemap'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "user-selector"
    }, this.__renderView(), this.__renderUsers()));
  }
});