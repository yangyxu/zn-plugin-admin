var React = require('react');
module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/zn.plugin.admin/menu/paging', {
				menu: this.props.request.search.menu
			}),
			items: [
				{ title: '用户名', name: 'name', width: 120 },
				{ title: '邮箱', name: 'email', width: 140 },
				{ title: '手机号', name: 'phone', width: 120 },
				{ title: '角色', name: 'role_ids_convert', width: 120 },
				{ title: '代理人', name: 'agents_convert', width: 120 },
				{ title: '地址', name: 'address', width: 200 },
				{ title: '说明', name: 'zn_note' }
			],
			formItems: [
				{ title: '头像', name: 'avatar_img', type: 'ImageUploader' },
				{ title: '用户名', name: 'name', type: 'Input', required: true, error: '用户名必填项!' },
				{ title: '邮箱', name: 'email', type: 'Input' },
				{ title: '手机号', name: 'phone', type: 'Input' },
				{ title: '地址', name: 'address', type: 'Input' },
				{ title: '说明', name: 'zn_note', type: 'Textarea' }
			],
			toolbarItems: [
				{ text: '添加', name: 'add', icon: 'fa-plus', style: { marginRight: 5 } },
				{ text: '删除', name: 'remove', status: 'danger', icon: 'fa-remove', style: { marginRight: 5 } }
			]
		}
	},
	componentDidMount: function (){

	},
	__doSuccess: function (){
		this.state.data.refresh();
	},
	__addItem: function (){
		zn.dialog({
			title: '新增用户',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				merge='values'
				exts={{ model: this.props.model }}
				onSubmitSuccess={this.__doSuccess}
				items={this.state.formItems} />
		});
	},
	__updateItem: function (data){
		zn.dialog({
			title: '更新用户信息',
			content: <zn.react.Form
				merge="updates"
				action='/zn.plugin.admin/model/update'
				exts={{ model: this.props.model, where: {id: data.id} }}
				value={zn.store.post('/zn.plugin.admin/model/selectOne', { model: this.props.model, where: {id: data.id} })}
				onSubmitSuccess={this.__doSuccess}
				items={this.state.formItems} />
		});
	},
	__removeItems: function (){
		var _self = this,
			_values = this.refs.table.getValue();
		if(_values && _values.length){
			zn.confirm('确认删除这' + _values.length + '个用户吗？', '提示', function () {
				zn.http.post('/zn.plugin.admin/model/delete', {
					model: this.props.model,
					where: "id in (" + _values.join(',') + ")"
				}).then(function (){
					zn.toast.success('删除成功');
					_self.state.data.refresh();
				}, function (data){
					zn.toast.error('删除失败: ' + data.result);
				});
			}.bind(this));
		}else {
			zn.toast.warning('请先选择要删除的用户');
		}
	},
	__onToolbarClick: function (item){
		switch (item.name) {
			case 'add':
				this.__addItem();
				break;
			case 'remove':
				this.__removeItems();
				break;
		}
	},
	__onTableColumnRender: function (rowIndex, columnIndex, data, item, value){
		switch (columnIndex) {
			case 1:
				return <div style={{ display: 'flex', alignItems: 'center' }}>
					<i onClick={()=>this.__updateItem(data)} className="fa fa-edit zr-padding-3" />
					{data.avatar_img && <img className="avatar" style={{ width: 16, height: 16, margin: 5, borderRadius: 16 }} src={data.avatar_img} />}
					<a href={'#'+zn.react.session.fixPath('/znpluginadmin.user.infoedit')+'?userId=' + data.id}>{value}</a>
				</div>;
		}
	},
	render:function(){
		return (
			<zn.react.Page title="系统账户管理" toolbarItems={this.state.toolbarItems} onToolbarClick={this.__onToolbarClick}>
				<zn.react.PagerView
					ref="table"
					view="Table"
					enableFilter={true}
					checkbox={50}
					showHeader={true}
					columnRender={this.__onTableColumnRender}
					data={this.state.data}
					items={this.state.items}/>
			</zn.react.Page>
		);
	}
});
