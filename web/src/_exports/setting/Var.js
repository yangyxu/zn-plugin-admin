var React = require('react');
var TreeModelView = require('../../component/model/TreeModelView');
var ModelEditor = require('../../component/basic/ModelEditor');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'ZNPluginAdminVar',
			pid: 0,
			title: '资源管理',
			menuId: 0,
			fields: [
				{ title: '标题', type: 'Input', name: 'zn_title' },
				{ title: '类型', type: 'Radio', name: 'zn_tree_type', value: 0,
					data: [
						{ text: '分类', value: 0 },
						{ text: '按钮', value: 1 },
						{ text: '常量', value: 2 },
						{ text: '标签', value: 3 },
						{ text: '标签', value: 4 }
					]
				},
				{ title: '图片', type: 'ImageUploader', name: 'img', action: '/zn.plugin.admin/uploadFiles' },
				{ title: '链接', type: 'Input', name: 'url' },
				{ title: '路径', type: 'Input', name: 'path' },
				{ title: '图标', type: 'RichSelector', selector: zn.plugin.admin.FontAwesomeIcons, textRender: (text)=>{ return <i className={"fa " + text} />;}, name: 'icon' },
				{ title: '是否启用权限', type: 'Radio', name: 'zn_rights_enabled', value: 0,
					data: [
						{ text: '禁止', value: 0 },
						{ text: '启用', value: 1 }
					]
				},
				{ title: '拥有者', type: zn.plugin.admin.UserSelector, mulitable: false, name: 'zn_rights_owner_id' },
				{ title: '操作用户', type: zn.plugin.admin.UserSelector, mulitable: true, name: 'zn_rights_users' },
				{ title: '查看用户', type: zn.plugin.admin.UserSelector, mulitable: true, name: 'zn_rights_observe_users' },
				{ title: '操作角色', type: zn.plugin.admin.RoleSelector, name: 'zn_rights_roles' },
				{ title: '查看角色', type: zn.plugin.admin.RoleSelector, name: 'zn_rights_observe_roles' },
				{ title: '扩展', type: 'Textarea', name: 'zn_tree_extend' }
			]
		};
	},
	__itemContentRender: function (item){
		var _data = item;
		switch (_data.type) {
			case 1:
				return <span><i title="这是操作按钮" className='fa fa-hand-o-up' style={{margin: 5, color: '#0B72A5'}} /><i className={'fa ' + _data.icon} style={{marginRight:5}} />{_data.id+'、'+_data.zn_title}</span>;
			case 2:
				return <span><i title="这是静态常量" className='fa fa-text-width' style={{margin: 5,color: '#d9534f'}} /><i className={'fa ' + _data.icon} style={{marginRight:5}} />{_data.id+'、'+_data.zn_title}</span>;
			case 3:
				return <span><i title="这是标签类别" className='fa fa-tag' style={{margin: 5}} /><i className={'fa ' + _data.icon} style={{marginRight:5}} />{_data.id+'、'+_data.zn_title}</span>;
		}
	},
	render:function(){
		return (
			<TreeModelView {...this.props} where={{ menu_id: this.props.menuId }} itemContentRender={this.__itemContentRender} leftWidth={300} />
		);
	}
});
