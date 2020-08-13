"use strict";

require('./FontAwesomeIcons.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: []
    };
  },
  componentDidMount: function componentDidMount() {
    zn.http.get('/zn.plugin.admin/icon/getFontAwesomes').then(function (data) {
      if (data.status == 200) {
        this.setState({
          data: data.result
        });
      } else {
        zn.toast.error(data.result);
      }
    }.bind(this), function () {
      zn.toast.error('获取数据失败');
    });
  },
  __onIconClick: function __onIconClick(item, index) {
    this.props.onChange && this.props.onChange(item, item);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zn-plugin-admin-font-awesome-icons", this.props.className)
    }, this.state.data.map(function (item, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement("i", {
        onClick: function onClick() {
          return _this.__onIconClick(item, index);
        },
        key: index,
        className: 'icon fa ' + item + ' ' + (this.props.value == item ? 'selected' : '')
      });
    }.bind(this)));
  }
});