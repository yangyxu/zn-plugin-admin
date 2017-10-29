var React = require('react');
var TreeModelView = require('../../component/model/TreeModelView');
var ModelEditor = require('../../component/basic/ModelEditor');
var UsersForRoles = require('./UsersForRoles');

var Info = React.createClass({
	getInitialState: function (){
		return {
			currIndex: 0
		};
	},
	__renderBody: function (){
		switch (this.state.currIndex) {
			case 0:
				var _fields = this.props.fields.slice(0);
				if(this.props.data.data.type == 1){
					_fields.splice(1, 0, { title: '负责人', type: "CheckboxGroup", data: zn.store.post('/zn.plugin.admin/model/select', {
						model: 'ZNPluginAdminUser',
						fields: ['id as value', 'name as text'],
						where: "locate('," + this.props.data.value + ",',role_ids) <> 0"
					}), name: 'owners' })
				}
				return <ModelEditor {...this.props} fields={_fields} />;
			case 1:
				return <UsersForRoles roleId={this.props.data.value} />;
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
						{ index: 1, text: '用户列表', icon: 'fa-users' }
					]} />
				<div className="layout-body">
					{this.__renderBody()}
				</div>
			</div>
		);
	}
});

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
				{ title: '扩展', type: 'Textarea', name: 'zn_tree_extend' },
				{ title: '说明', type: 'Textarea', name: 'zn_note' }
			]
		};
	},
	__rightRender: function (data){
		if(!data.data.type){
			return null;
		}

		return <Info {...this.props} data={data} />;
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
		console.log(this.props);
		return (
			<TreeModelView {...this.props} rightRender={this.__rightRender} itemContentRender={this.__itemContentRender} />
		);
	}
});
