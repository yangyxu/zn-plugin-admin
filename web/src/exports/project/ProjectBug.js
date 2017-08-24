var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			data: null,
			model: 'ZNPluginAdminProjectBug'
		};
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.data!==this.props.data){
			this.state.data.extend({
				where: {
					project_id: nextProps.data.id
				}
			}).exec();
		}
	},
	getInitialState: function () {
		var _where = {};
		if(this.props.data){
			_where.project_id = this.props.data.id;
		}
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model,
				where: _where
			}),
			items: [
				{ title: '操作', width: 60, textAlign: 'center' },
				{ title: '问题', name: 'zn_title', width: 220, filter: { type: 'Input', opts: ['like'] } },
				{ title: '状态', name: 'state', width: 80, filter: { type: 'Menu', data: [{ text:'待处理', value: 0 }, { text: '处理中...', value: 2 }, { text: '已经解决', value: 3 }, { text: '已经确认', value: 3 }], opts: ['='] } },
				{ title: '优先级', name: 'priority', width: 80, filter: { type: 'Menu', data: [{ text:'正常', value: 1 }, { text: '紧急', value: 2 }, { text: '非常紧急', value: 3 }], opts: ['='] } },
				{ title: '开始时间', name: 'begin_time', width: 140 },
				{ title: '结束时间', name: 'end_time', width: 140 },
				{ title: '完成时间', name: 'finished_time', width: 140 },
				{ title: '提交时间', name: 'zn_create_time', width: 140 },
				{ title: '描述', name: 'zn_note' }
			],
			formItems: [
				{ title: '问题', name: 'zn_title', type: 'Textarea' },
				{ title: '版本号', type: 'Input', name: 'version' },
				{
					title: '优先级',
					type: 'Select',
					name: 'priority',
					data: [
						{ text: '正常', value: 1 },
						{ text: '紧急', value: 2 },
						{ text: '非常紧急', value: 3 }
					]
				},
				{ title: '开始时间', name: 'begin_time', type: 'Timer' },
				{ title: '结束时间', name: 'end_time', type: 'Timer' },
				{ title: '附件', name: 'files', type: 'FileUploader', action: '/zn.plugin.admin/uploadFiles' },
				{ title: '问题描述', name: 'description', type: 'RichEditor' },
				{ title: '解决方案', name: 'solution', type: 'RichEditor' }
			],
			toolbarItems: [
				{ text: '添加', icon: 'fa-plus' }
			]
		}
	},
	__onRowActions: function (value, data){
		var _data = this.state.data;
		var _self = this;
		switch (value.item.icon) {
			case 'fa-remove':
				zn.confirm('确定删除该数据吗？', '提示', function (){
					zn.http.post('/zn.plugin.admin/model/delete', {
						model: _self.props.model,
						where: { id: data.id }
					}).then(function (data){
						zn.toast.success('删除成功！');
						_data.refresh();
					});
				});
				break;
			case 'fa-edit':
				this.__updateItem(data);
				break;
		}
	},
	__onView: function () {

	},
	__onTableColumnRender: function (rowIndex, columnIndex, data, item, value){
		switch (columnIndex) {
			case 0:
				return <zn.react.ListView
							className="rt-flex"
							data={[
								{ text:'删除', icon: 'fa-remove' },
								{ text:'修改', icon: 'fa-edit' }
							]}
							itemRender={(item, index)=>{return <i title={item.text} className={'fa '+item.icon} style={item.style} />}}
							onClick={(value)=>this.__onRowActions(value, data)} />;
			case 1:
				return <a style={{textDecoration:'underline'}} onClick={()=>this.__onView(data)} >
					{value}
				</a>;
			case 2:
				switch (+value) {
					case 0:
						return <span>等待处理</span>;
					case 1:
						return <span style={{color:'yellow'}}>处理中</span>;
					case 2:
						return <span style={{color:'red'}}>已经解决</span>;
					case 3:
						return <span style={{color:'red'}}>已经确认</span>;
				}
				return null;
			case 3:
				switch (+value) {
					case 1:
						return <span>正常</span>;
					case 2:
						return <span style={{color:'#F44336'}}>紧急</span>;
					case 3:
						return <span style={{color:'red'}}>非常紧急</span>;
				}
				return null;
		}
	},
	__updateItem: function (data){
		zn.dialog({
			title: '修改',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/update'
				exts={{ model: this.props.model, where: { id: data.id } }}
				merge="updates"
				value={zn.store.post('/zn.plugin.admin/model/selectOne', { model: this.props.model, where: { id: data.id }})}
				onSubmitSuccess={this.__doSuccess}
				items={this.state.formItems} />
		});
	},
	__doSuccess: function (){
		zn.modal.close();
		zn.toast.success('操作成功');
		this.state.data.refresh();
	},
	__addItem: function (pid){
		if(!this.props.data){
			zn.toast.warning('请先选择左边商品类型项');
			return false;
		}
		zn.dialog({
			title: '添加',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				exts={{model: this.props.model}}
				hiddens={{ project_id: this.props.data.id }}
				merge="values"
				onSubmitSuccess={this.__doSuccess}
				btns={[
					{text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight:0 }},
					{text:'取消', type:'cancle', status: 'danger', float: 'right'}
				]}
				items={this.state.formItems} />
		});
	},
	__onToolbarClick: function (rtitem){
		switch (rtitem.icon) {
			case 'fa-plus':
				this.__addItem();
				break;
		}
	},
	render: function(){
		return (
			<zn.react.Page title='问题列表' icon="fa-list-ul" onToolbarClick={this.__onToolbarClick} toolbarItems={this.state.toolbarItems} >
				<zn.react.PagerView
					view="Table"
					checkbox={0}
					enableFilter={true}
					showHeader={true}
					data={this.state.data}
					columnRender={this.__onTableColumnRender}
					onTableRowClick={this.__onTableRowClick}
					items={this.state.items}/>
			</zn.react.Page>
		);
	}
});
