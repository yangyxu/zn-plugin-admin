var React = require('react');

var TreeModelView = require('../../component/model/TreeModelView');
var UsersForRoles = require('./UsersForRoles');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'ZNPluginAdminRole',
			pid: 0,
			title: '部门及角色管理',
			menuId: 0,
			fields: [
				{ title: '名称', type: 'Input', name: 'zn_title' },
				{ title: '类型', type: 'Radio', name: 'type', value: 0,
					data: [
						{ text: '分类', value: 0 },
						{ text: '部门', value: 1 },
						{ text: '角色', value: 2 }
					]
				},
				{ title: '负责人', type: zn.plugin.admin.UserSelector, mulitable: true, name: 'owners' },
				{ title: '扩展', type: 'Textarea', name: 'zn_tree_extend' },
				{ title: '说明', type: 'Textarea', name: 'zn_note' }
			]
		};
	},
	__rightRender: function (treeMenu){

	},
	__itemContentRender: function (item){
		var _data = item;
		switch (_data.type) {
			case 0:
				return <span>{_data.zn_title}</span>;
			case 1:
				return <span><i title="这是部门" className='fa fa-sitemap' style={{margin: 5,color: '#d9534f'}} />{_data.zn_title}</span>;
			case 2:
				return <span><i title="这是角色" className='fa fa-graduation-cap' style={{margin: 5}} />{_data.zn_title}</span>;
		}
	},
	render:function(){
		return (
			<TreeModelView {...this.props} rightRender={this.__rightRender} itemContentRender={this.__itemContentRender} />
		);
	}
});
