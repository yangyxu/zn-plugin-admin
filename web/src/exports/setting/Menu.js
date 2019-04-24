var React = require('react');
var TreeModelView = require('../../component/model/TreeModelView');
var ModelEditor = require('../../component/basic/ModelEditor');
var FormDesigner = require('../../component/basic/FormDesigner');

var MenuInfo = React.createClass({
	getInitialState: function (){
		return {
			currIndex: 0
		};
	},
	__renderBody: function (){
		switch (this.state.currIndex) {
			case 0:
				return <ModelEditor {...this.props}/>;
			case 1:
				return <div style={{textAlign:'center'}}>还在开发中...</div>;
			case 2:
				return <FormDesigner menuId={this.props.data.value} />;
		}
	},
	render: function (){
		return (
			<div className="zr-flex-layout">
				<zn.react.ListView
					className="layout-header zr-tab-ios"
					style={{margin: 5}}
					selectMode="radio"
					textKey="text"
					valueKey="index"
					onClick={(value)=>this.setState({ currIndex: value.item.index })}
					value={this.state.currIndex}
					data={[
						{ index: 0, text: '基本信息', icon: 'fa-list-alt' },
						{ index: 1, text: '资源管理', icon: 'fa-table' },
						{ index: 2, text: '表单定义', icon: 'fa-server' }
					]} />
				<div className="layout-body">
					{this.__renderBody()}
				</div>
			</div>
		);
	}
});


module.exports = React.createClass({
	getInitialState: function () {
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
				{ title: '链接', type: 'Menu', data: Object.keys(zn.react.app._relativeRouters), name: 'url' },
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
		if(!data.data.zn_tree_type){
			return null;
		}

		return <MenuInfo {...this.state} data={data} />;
	},
	render:function(){
		return (
			<TreeModelView {...this.state} rightRender={this.__rightRender} />
		);
	}
});
