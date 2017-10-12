var React = require('react');
var TreeModelView = require('../../component/model/TreeModelView');
var ModelEditor = require('../../component/basic/ModelEditor');
var VarPanel = React.createClass({
	getInitialState: function (){
		return {
			typeIndex: 0
		}
	},
	__onListViewItemClick: function (event, item, index){
		this.setState({typeIndex: index});
	},
	__renderBody: function (){
		console.log(this.props);
		return <ModelEditor  />;
		/*
		switch (this.state.typeIndex) {
			case 0:
				return <RightsSetting model={_treeModel.props.model} id={_treeModel.state.currItem?_treeModel.state.currItem.props.data.id:null}  />;
			case 1:
				if(_treeModel.state.currItem){
					return <Var menuId={_treeModel.state.currItem.props.data.id} pid={2} />
				}else {
					return <div style={{textAlign:'center'}}>请先选中菜单</div>;
				}
		}*/
	},
	render: function (){
		return this.__renderBody();
		return (
			<zn.react.ActivityLayout direction="top-bottoom" begin={40} barWidth={3}>
				<zn.react.ListView
					className="zr-list-view-tab"
					fireIndex={0}
					onClick={this.__onListViewItemClick}
					itemRender={(item, index)=>{ return <span><i style={{marginRight:5}} className={'fa ' + item.icon} />{item.text}</span>;}}
					data={[
						{ text: '权限设置', icon: 'fa-yelp' },
						{ text: '资源管理', icon: 'fa-table' }
					]} />
				{this.__renderBody()}
			</zn.react.ActivityLayout>
		);
	}
});


module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'ZNPluginAdminMenu',
			title: '菜单管理',
			leftWidth: 30,
			pid: 0,
			fields: [
				{ title: '标题', type: 'Input', name: 'zn_title' },
				{ title: '类型', type: 'Radio', name: 'zn_tree_type', value: 0,
					data: [
						{ text: '分类', value: 0 },
						{ text: '功能菜单', value: 1 }
					]
				},
				{ title: '链接', type: 'Input', name: 'url' },
				{ title: '路径', type: 'Input', name: 'path' },
				{ title: '图标', type: 'RichSelector', selector: zn.plugin.admin.FontAwesomeIcons, textRender: (text)=>{ return <i className={"fa " + text} />;}, name: 'icon' },
				{ title: '是否启用权限', type: 'Radio', name: 'zn_rights_enabled', value: 0,
					data: [
						{ text: '禁止', value: 0 },
						{ text: '启用', value: 1 }
					]
				},
				//{ title: '拥有者', type: zn.plugin.admin.UserSelector, mulitable: false, name: 'zn_rights_owner_id' },
				{ title: '操作用户', type: zn.plugin.admin.UserSelector, mulitable: true, name: 'zn_rights_users' },
				//{ title: '查看用户', type: zn.plugin.admin.UserSelector, mulitable: true, name: 'zn_rights_observe_users' },
				{ title: '操作角色', type: zn.plugin.admin.RoleSelector, name: 'zn_rights_roles' },
				//{ title: '查看角色', type: zn.plugin.admin.RoleSelector, name: 'zn_rights_observe_roles' },
				{ title: '扩展', type: 'Textarea', name: 'zn_tree_extend' }
			]
		};
	},
	__rightRender: function (data){
		return <VarPanel {...data} />;
	},
	render:function(){
		return (
			<TreeModelView {...this.props}/>
		);
	}
});
