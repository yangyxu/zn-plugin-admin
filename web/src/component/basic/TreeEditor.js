var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			editable: true,
			model: 'ZNPluginAdminVar',
			pid: 0,
			fields: [
				{ title: '显示值', name: 'zn_title', type: 'Textarea' }
			]
		};
	},
	getInitialState: function () {
		return {
			data: zn.store.post('/zn.plugin.admin/model/getByPid', {
				model: this.props.model,
				pid: this.props.pid
			}),
			formItems: this.props.fields,
			mainToolbarItems: [
				{ tooltip: '添加主项', value: 'addMain', icon: 'fa-plus-square' }
			],
			subToolbarItems: [
				{ tooltip: '添加子项', value: 'addChild', icon: 'fa-plus' },
				{ tooltip: '删除当前项', value: 'delete', icon: 'fa-remove' },
				{ tooltip: '编辑当前项', value: 'edit', icon: 'fa-edit' },
				{ tooltip: '上移当前项', value: 'up', icon: 'fa-angle-up' },
				{ tooltip: '下移当前项', value: 'down', icon: 'fa-angle-down' }
			]
		}
	},
	editTreeColumn: function (data, treeColumn){
		if(!data || !treeColumn){
			return zn.toast.error('请先选择要编辑的记录'), false;
		}

		zn.dialog({
			title: '编辑',
			content: <zn.react.Form
				merge="updates"
				action='/zn.plugin.admin/model/update'
				exts={{model: this.props.model, where: { id: data.id }}}
				value={zn.store.post('/zn.plugin.admin/model/selectOne', {
					model: this.props.model, where: { id: data.id }
				})}
				items={this.state.formItems}
				onSubmitSuccess={()=>treeColumn.props.parent.refresh()} />
		});
	},
	addTreeColumn: function (data, treeColumn){
		var _where = {};
		for(var key in this._where){
			_where[key] = this._where[key];
		}
		if(data){
			_where['zn_tree_pid'] = data.id;
		}

		zn.dialog({
			title: data ? '添加子项: ' + data.zn_title : '添加主项',
			content: <zn.react.Form
				merge="values"
				action='/zn.plugin.admin/model/insert'
				hiddens={_where}
				exts={{model: this.props.model}}
				items={this.state.formItems}
				onSubmitSuccess={function (){
					if(treeColumn){
						treeColumn.refresh();
					}else {
						this.state.data.refresh();
					}
				}.bind(this)}/>
		});
	},
	orderTreeColumn: function (order, data, treeColumn){
		if(!data || !treeColumn){
			return zn.toast.error('请先选择要排序的记录'), false;
		}

		zn.http.post('/zn.plugin.admin/model/orderTreeNode', {
			model: this.props.model,
			id: data.id,
			order: order
		}).then(function (data){
			treeColumn.props.parent.refresh();
		}.bind(this), function (data){
			zn.toast.error('操作出错: ' + data.result);
		});
	},
	deleteTreeColumn: function (data, treeColumn){
		if(!data || !treeColumn){
			return zn.toast.error('请先选择要删除的记录'), false;
		}

		zn.confirm('确认删除该项吗？', '提示', function () {
			zn.http.post('/zn.plugin.admin/model/delete', {
				model: this.props.model,
				where: { id: data.id }
			}).then(function (data){
				treeColumn.props.parent.refresh();
				zn.toast.success('删除成功！');
			}.bind(this), function (data){
				zn.toast.error('删除出错: ' + data.result);
			});
		}.bind(this));
	},
	__onToolbarClick: function (item){
		switch (item.value) {
			case 'addMain':
				this.addTreeColumn(null, null);
				break;
			case 'addChild':
				this.addTreeColumn(this.state.currData, this.state.treeColumn);
				break;
			case 'edit':
				this.editTreeColumn(this.state.currData, this.state.treeColumn);
				break;
			case 'up':
				this.orderTreeColumn('up', this.state.currData, this.state.treeColumn);
				break;
			case 'down':
				this.orderTreeColumn('down', this.state.currData, this.state.treeColumn);
				break;
			case 'delete':
				this.deleteTreeColumn(this.state.currData, this.state.treeColumn);
				break;
		}
	},
	__itemContentRender: function (data, treeColumn){
		var _result = this.props.contentRender && this.props.contentRender(data, treeColumn, this);
		if(_result){
			return _result;
		} else {
			return (
				<div className="item-content">
					{data.icon&&<zn.react.Icon icon={data.icon} />}
					<span data-tooltip={data.id}>{data.zn_title}</span>
				</div>
			);
		}
	},
	__onTreeItemClick: function (data, treeColumn, tree, event){
		this.state.currData = data;
		this.state.treeColumn = treeColumn;
		this.forceUpdate();
		this.props.onItemClick && this.props.onItemClick(data, treeColumn, tree, event);
	},
	render:function(){
		return (
			<div className={zn.react.classname("zn-plugin-admin-tree-editor", this.props.className)}>
				{
					this.props.editable && <div className="tool-bars">
						{
							this.state.mainToolbarItems.map(function (item){
								return <i onClick={()=>this.__onToolbarClick(item)} data-tooltip={item.tooltip} className={"fa " + item.icon} />
							}.bind(this))
						}
						<i className="separator" />
						{
							this.state.currData && this.state.subToolbarItems.map(function (item){
								return <i onClick={()=>this.__onToolbarClick(item)} data-tooltip={item.tooltip} className={"fa " + item.icon} />
							}.bind(this))
						}
					</div>
				}
				<zn.react.Tree {...this.props}
					data={this.state.data}
					onItemClick={this.__onTreeItemClick}
					contentRender={this.__itemContentRender} />
			</div>

		);
	}
});
