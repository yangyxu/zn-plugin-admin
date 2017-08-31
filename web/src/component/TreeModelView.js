var React = require('react');
var RightsSetting = require('./RightsSetting');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'ZNPluginAdminVar',
			pid: 0
		};
	},
	getInitialState: function () {
		var _where = this.props.where;
		if(_where){
			_where.zn_tree_pid = this.props.pid;
		} else {
			_where = { zn_tree_pid: this.props.pid };
		}
		this._where = _where;
		return {
			data: zn.store.post('/zn.plugin.admin/model/select', {
				model: this.props.model,
				where: _where,
				order: { zn_tree_order:'asc' }
			}),
			items: this.props.fields||[],
			currItem: null,
			toolbarItems: [
				{ tooltip: '添加主项', name: 'addMainItem', icon: 'fa-plus-square' },
				{ tooltip: '添加子项', name: 'addChildItem', icon: 'fa-plus' },
				{ tooltip: '删除当前项', name: 'deleteCurrItem', icon: 'fa-remove' },
				{ tooltip: '编辑当前项', name: 'editCurrItem', icon: 'fa-edit' },
				{ tooltip: '上移当前项', name: 'upCurrItem', icon: 'fa-angle-up' },
				{ tooltip: '下移当前项', name: 'downCurrItem', icon: 'fa-angle-down' },
			]
		}
	},
	componentDidMount: function (){
		this.__loadTableHeaders();
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.model!=this.props.model){
			this.props.model = nextProps.model;
			this.__loadTableHeaders(function () {
				this.state.data.extend({
					model: nextProps.model
				}).refresh();
			}.bind(this));
		}
	},
	__loadTableHeaders: function (callback){
		if(!this.state.items.length){
			zn.store
				.get('/zn.plugin.admin/model/getModelProps?model=' + this.props.model)
				.then(function(data){
					this.setState({
						items: data.result
					});
					callback && callback(data);
				}.bind(this));
		}
	},
	__onClick: function (item, event){
		this.state.currItem = item;
		this.setState({
			currItem: item
		});
		this.props.onItemClick && this.props.onItemClick(item, event);
	},
	__addItemSuccess: function (pid){
		zn.modal.close();
		zn.toast.success('添加成功！');

		var _treemenu = this.refs.maintreemenu;
		if(pid && this.state.currItem){
			_treemenu = this.state.currItem.props.parent;
		}
		_treemenu.refresh();
	},
	__editItemSuccess: function (){
		zn.modal.close();
		this.state.currItem.props.parent.refresh();
	},
	__editItem: function (){
		if(!this.state.currItem){
			zn.toast.warning('必须编辑项');
			return;
		}
		zn.dialog({
			title: '编辑',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/update'
				exts={{model: this.props.model, where: { id: this.state.currItem.props.data.id }}}
				merge="updates"
				value={zn.store.post('/zn.plugin.admin/model/selectOne', {model: this.props.model, where: { id: this.state.currItem.props.data.id }})}
				onSubmitBefore={(data, form)=>{this._data = data}}
				onSubmitSuccess={this.__editItemSuccess}
				btns={[{text: '修改', icon: 'fa-edit', type: 'submit', float: 'right', style: {marginRight:0}}]}
				items={this.state.items}/>
		});
	},
	__addItem: function (pid){
		var _where = {};
		for(var key in this._where){
			_where[key] = this._where[key];
		}
		_where['zn_tree_pid'] = pid;
		zn.dialog({
			title: '添加项',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				hiddens={_where}
				exts={{model: this.props.model}}
				merge="values"
				onSubmitBefore={(data, form)=>{this._data = data}}
				onSubmitSuccess={()=>this.__addItemSuccess(pid)}
				btns={[
					{text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight:0 }},
					{text:'取消', type:'cancle', status: 'danger', float: 'right'}
				]}
				items={this.state.items} />
		});
	},
	__onToolbarClick: function (item){
		if(item.name=='addMainItem'){
			this.__addItem();
			return;
		}
		if(!this.state.currItem){
			zn.toast.warning('必须选择主项');
			return false;
		}
		var _id = this.state.currItem.props.data.id;
		switch (item.name) {
			case 'addChildItem':
				this.__addItem(_id);
				break;
			case 'editCurrItem':
				this.__editItem();
				break;
			case 'upCurrItem':
				this.__upItem();
				break;
			case 'downCurrItem':
				this.__downItem();
				break;
			case 'deleteCurrItem':
				zn.confirm('确认删除该项吗？', '提示', function () {
					zn.store.post('/zn.plugin.admin/model/delete', {
						model: this.props.model,
						where: { id: _id }
					}).then(function (data){
						this.state.currItem.props.parent.refresh();
						zn.toast.success('删除成功！');
					}.bind(this), function (data){
						zn.toast.error('删除出错: ' + data.result);
					});
				}.bind(this));
				break;
		}
	},
	__renderRight: function (){
		var _result = this.props.rightRender && this.props.rightRender(this);
		if(_result){
			return _result;
		} else {
			return <RightsSetting model={this.props.model} id={this.state.currItem?this.state.currItem.props.data.id:null}  />;
		}
	},
	__itemContentRender: function (props){
		var _result = this.props.itemContentRender && this.props.itemContentRender(props);
		if(_result){
			return _result;
		} else {
			return <span><i style={{margin:5}} className={'fa ' + props.data.icon} />{props.data.id +'、'+ props.data.zn_title}</span>;
		}
	},
	render:function(){
		return (
			<zn.react.Page
				toolbarItems={this.state.toolbarItems}
				onToolbarClick={this.__onToolbarClick}
				title={this.props.title}>
				<div className="zr-flex-layout zn-plugin-admin-master-slave-flex-layout row">
					<div className="layout-header" style={{ width: 250 }}>
						<zn.react.TreeListView
							ref="maintreemenu"
							itemContentRender={this.__itemContentRender}
							activeAll={this.props.activeAll}
							onClick={this.__onClick}
							data={this.state.data} />
					</div>
					<div className="layout-body">
						{this.__renderRight()}
					</div>
				</div>
			</zn.react.Page>
		);
	}
});
