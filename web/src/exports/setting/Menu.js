var React = require('react');
var TreeModelView = require('../../component/TreeModelView');
var RightsSetting = require('../../component/RightsSetting');


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
		var _treeModel = this.props.treeModel;

		return <RightsSetting model={_treeModel.props.model} id={_treeModel.state.currItem?_treeModel.state.currItem.props.data.id:null}  />;
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
					className="rt-list-view-tab"
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
				{ title: '图标', type: 'Input', name: 'icon' },
				{ title: '链接', type: 'Input', name: 'url' },
				{ title: '路径', type: 'Input', name: 'path' },
				{ title: '扩展', type: 'Textarea', name: 'zn_tree_extend' }
			]
		};
	},
	__rightRender: function (treeModel){
		return <VarPanel treeModel={treeModel} />;
	},
	render:function(){
		return (
			<TreeModelView {...this.props} rightRender={this.__rightRender} />
		);
	}
});
