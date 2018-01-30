var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var TreeModelView = require('../../component/model/TreeModelView');
module.exports = React.createClass({
	displayName: 'exports',

	getDefaultProps: function getDefaultProps() {
		return {
			model: 'ZNPluginAdminVar',
			pid: 0,
			title: '资源管理',
			menuId: 0,
			fields: [{ title: '标题', type: 'Input', name: 'zn_title' }, { title: '类型', type: 'Radio', name: 'zn_tree_type', value: 0,
				data: [{ text: '分类', value: 0 }, { text: '按钮', value: 1 }, { text: '常量', value: 2 }, { text: '标签', value: 3 }, { text: '标签', value: 4 }]
			}, { title: '图片', type: 'ImageUploader', name: 'img', action: '/zn.plugin.admin/uploadFiles' }, { title: '链接', type: 'Input', name: 'url' }, { title: '路径', type: 'Input', name: 'path' }, { title: '图标', type: 'RichSelector', selector: zn.plugin.admin.FontAwesomeIcons, textRender: function textRender(text) {
					return React.createElement('i', { className: "fa " + text });
				}, name: 'icon' }, { title: '是否启用权限', type: 'Radio', name: 'zn_rights_enabled', value: 0,
				data: [{ text: '禁止', value: 0 }, { text: '启用', value: 1 }]
			}, { title: '拥有者', type: zn.plugin.admin.UserSelector, mulitable: false, name: 'zn_rights_owner_id' }, { title: '操作用户', type: zn.plugin.admin.UserSelector, mulitable: true, name: 'zn_rights_users' }, { title: '查看用户', type: zn.plugin.admin.UserSelector, mulitable: true, name: 'zn_rights_observe_users' }, { title: '操作角色', type: zn.plugin.admin.RoleSelector, name: 'zn_rights_roles' }, { title: '查看角色', type: zn.plugin.admin.RoleSelector, name: 'zn_rights_observe_roles' }, { title: '扩展', type: 'Textarea', name: 'zn_tree_extend' }]
		};
	},
	__itemContentRender: function __itemContentRender(item) {
		var _data = item;
		switch (_data.type) {
			case 1:
				return React.createElement(
					'span',
					null,
					React.createElement('i', { title: '\u8FD9\u662F\u64CD\u4F5C\u6309\u94AE', className: 'fa fa-hand-o-up', style: { margin: 5, color: '#0B72A5' } }),
					React.createElement('i', { className: 'fa ' + _data.icon, style: { marginRight: 5 } }),
					_data.id + '、' + _data.zn_title
				);
			case 2:
				return React.createElement(
					'span',
					null,
					React.createElement('i', { title: '\u8FD9\u662F\u9759\u6001\u5E38\u91CF', className: 'fa fa-text-width', style: { margin: 5, color: '#d9534f' } }),
					React.createElement('i', { className: 'fa ' + _data.icon, style: { marginRight: 5 } }),
					_data.id + '、' + _data.zn_title
				);
			case 3:
				return React.createElement(
					'span',
					null,
					React.createElement('i', { title: '\u8FD9\u662F\u6807\u7B7E\u7C7B\u522B', className: 'fa fa-tag', style: { margin: 5 } }),
					React.createElement('i', { className: 'fa ' + _data.icon, style: { marginRight: 5 } }),
					_data.id + '、' + _data.zn_title
				);
		}
	},
	render: function render() {
		return React.createElement(TreeModelView, _extends({}, this.props, { where: { menu_id: this.props.menuId }, itemContentRender: this.__itemContentRender, leftWidth: 300 }));
	}
});