var React = require('react');
var TreeModelView = require('../../component/TreeModelView');
var RightsSetting = require('../../component/RightsSetting');
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
				{ title: '图标', type: 'Input', name: 'icon' },
				{ title: '图片', type: 'ImageUploader', name: 'img', action: '/zn.plugin.admin/uploadFiles' },
				{ title: '链接', type: 'Input', name: 'url' },
				{ title: '路径', type: 'Input', name: 'path' },
				{ title: '扩展', type: 'Textarea', name: 'zn_tree_extend' }
			]
		};
	},
	__rightRender: function (treeModel){
		if(!treeModel.state.currItem){
			return null;
		}
		var _id = treeModel.state.currItem.props.data.id;
		return <div>
			<RightsSetting model={this.props.model} id={treeModel.state.currItem?treeModel.state.currItem.props.data.id:null}  />
			{
				/*
				<UI.Form
					method="POST"
					layout="stacked"
					style={{ margin: 5, padding: 10, border:'1px solid #e9e9e9' }}
					action='/zn.plugin.admin/model/updateNode'
					exts={{
						model: this.props.model,
						where: { id: _id }
					}}
					merge="data"
					value={Store.post('/zn.plugin.admin/model/selectOne', {model: this.props.model, where: { id: _id }})}
					syncSubmit={false}
					onSubmitBefore={(data, form)=>{this._data = data}}
					onSubmitSuccess={()=>Toast.success('修改成功')}
					btns={[{text: '修改', icon: 'fa-edit', type: 'submit', float: 'right', style: {marginRight:0}}]}
					items={this.props.fields}/>

				*/
			}
		</div>;
	},
	__itemContentRender: function (item){
		var _data = item.data;
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
			<TreeModelView {...this.props} where={{ menu_id: this.props.menuId }} itemContentRender={this.__itemContentRender} rightRender={this.__rightRender} leftWidth={300} />
		);
	}
});
