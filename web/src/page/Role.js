var React = require('react');
var TreeModelView = require('../component/TreeModelView');
var UsersForRoles = require('./UsersForRoles.js');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'zn_admin_role',
			pid: 0,
			title: '部门及角色管理',
			menuId: 0,
			fields: [
				{ title: '名称', type: 'Input', name: 'title' },
				{ title: '类型', type: 'Radio', name: 'type', value: 1,
					data: [
						{ text: '分类', value: 0 },
						{ text: '部门', value: 1 },
						{ text: '角色', value: 2 }
					]
				},
				{ title: '说明', type: 'Textarea', name: 'note' }
			]
		};
	},
	componentDidMount: function (){

	},
	__rightRender: function (treeMenu){
		return <UsersForRoles roleId={treeMenu.state.currItem?treeMenu.state.currItem.props.data.id:null}/>
	},
	__itemContentRender: function (item){
		var _data = item.data;
		switch (_data.type) {
			case 0:
				return <span>{_data.id+'、'+_data.title}</span>;
			case 1:
				return <span><i title="这是部门" className='fa fa-sitemap' style={{margin: 5,color: '#d9534f'}} />{_data.id+'、'+_data.title}</span>;
			case 2:
				return <span><i title="这是角色" className='fa fa-graduation-cap' style={{margin: 5}} />{_data.id+'、'+_data.title}</span>;
		}
	},
	render:function(){
		return (
			<TreeModelView {...this.props} rightRender={this.__rightRender} itemContentRender={this.__itemContentRender} />
		);
	}
});
