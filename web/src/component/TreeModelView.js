var React = require('react');
var RightsSetting = require('../component/RightsSetting');
module.exports = zn.react.TreeModelView = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'zn_admin_var',
			pid: 0
		};
	},
	getInitialState: function () {
		var _where = this.props.where;
		if(_where){
			_where.pid = this.props.pid;
		} else {
			_where = { pid: this.props.pid };
		}
		this._where = _where;
		return {
			data: Store.post('/znadmin/model/select', { model: this.props.model, where: _where, order: { treeOrder:'asc' } }),
			items: this.props.fields||[],
			currItem: null,
			toolbarItems: [
				{ title: '添加主项', name: 'addMainItem', icon: 'fa-plus-square' },
				{ title: '添加子项', name: 'addChildItem', icon: 'fa-plus' },
				{ title: '删除当前项', name: 'deleteCurrItem', icon: 'fa-remove' },
				{ title: '编辑当前项', name: 'editCurrItem', icon: 'fa-edit' },
				{ title: '上移当前项', name: 'upCurrItem', icon: 'fa-angle-up' },
				{ title: '下移当前项', name: 'downCurrItem', icon: 'fa-angle-down' },
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
			Store.get('/znadmin/model/getModelProps?model=' + this.props.model).exec().then(function(data){
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
		Popup.close('dialog');
		Popup.message({
			content: '添加成功！',
			type: 'success'
		});

		var _treemenu = this.refs.maintreemenu;
		if(pid && this.state.currItem){
			_treemenu = this.state.currItem.props.parent;
		}
		_treemenu.refresh();
	},
	__editItemSuccess: function (){
		Popup.close('dialog');
		this.state.currItem.props.parent.refresh();
	},
	__editItem: function (){
		if(!this.state.currItem){
			Popup.message({
				content: '必须编辑项',
				type: 'warning'
			});
			return;
		}
		Popup.dialog({
			title: '编辑',
			hStyle: { backgroundColor: '#0B72A5' },
			width: 780,
			content: <UI.Form
				method="POST"
				layout="stacked"
				style={{ margin: 25 }}
				action='/znadmin/model/updateNode'
				exts={{model: this.props.model, where: { id: this.state.currItem.props.data.id }}}
				merge="data"
				value={Store.post('/znadmin/model/selectOne', {model: this.props.model, where: { id: this.state.currItem.props.data.id }})}
				syncSubmit={false}
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
		_where['pid'] = pid;
		Popup.dialog({
			title: '添加项',
			hStyle: { backgroundColor: '#0B72A5' },
			width: 780,
			content: <UI.Form
				method="POST"
				layout="stacked"
				action='/znadmin/model/addNode'
				hiddens={_where}
				exts={{model: this.props.model}}
				merge="data"
				style={{ margin: 25 }}
				syncSubmit={false}
				onSubmitBefore={(data, form)=>{this._data = data}}
				onSubmitSuccess={()=>this.__addItemSuccess(pid)}
				btns={[{text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight:0 }},{text:'取消', type:'cancle', status: 'danger', float: 'right'}]}
				items={this.state.items} />
		});
	},
	__onToolbarClick: function (item){
		if(item.name=='addMainItem'){
			this.__addItem();
			return;
		}
		if(!this.state.currItem){
			Popup.message({
				content: '必须选择主项',
				type: 'warning'
			});

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
				Popup.confirm({
					content: '确认删除该项吗？',
					onConfirm: function () {
						Store.post('/znadmin/model/deleteNode', {
							model: this.props.model,
							id: _id
						}).exec().then(function (data){
							this.state.currItem.props.parent.refresh();
							Popup.message({
								content: '删除成功！',
								type: 'warn'
							});
						}.bind(this), function (data){
							Popup.message({
								content: '删除出错: ' + data.result,
								type: 'danger'
							});
						});
					}.bind(this)
				});
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
			return <span><i style={{margin:5}} className={'fa ' + props.data.icon} />{props.data.id +'、'+ props.data.title}</span>;
		}
	},
	render:function(){
		return (
			<UI.Page
				toolbarItems={this.state.toolbarItems}
				onToolbarClick={this.__onToolbarClick}
				title={this.props.title}>
				<UI.ActivityLayout direction="h" begin={this.props.leftWidth||35} barWidth={0.3} unit="rem">
					<UI.TreeListView itemContentRender={this.__itemContentRender} ref="maintreemenu" activeAll={this.props.activeAll} onClick={this.__onClick} data={this.state.data} />
					{this.__renderRight()}
				</UI.ActivityLayout>
			</UI.Page>
		);
	}
});
