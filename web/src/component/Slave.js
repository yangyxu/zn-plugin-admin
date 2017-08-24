var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			masterId: 0,
			title: '',
			model: '',
			where: {},
			formItems: [],
			toolbarItems: [],
		};
	},
	getInitialState: function () {
		var _where = this.props.where;
		if(this.props.masterId){
			_where.masterId = this.props.masterId;
		}
		return {
			where: _where,
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model,
				where: _where
			})
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.masterId !== this.props.masterId){
			this.state.data._data.where = { masterId: nextProps.masterId };
			this.state.data.exec();
		}
	},
	__doSuccess: function (){
		zn.modal.close();
		zn.toast.success('操作成功！');
		this.state.data.refresh();
	},
	__addItem: function (pid){
		zn.dialog({
			title: '添加',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				exts={{model: this.props.model}}
				hiddens={this.state.where}
				merge="values"
				onSubmitSuccess={this.__doSuccess}
				btns={[
					{ text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight:0 } },
					{ text: '取消', type: 'cancle', float: 'right', status:'danger' }
				]}
				items={this.props.formItems} />
		});
	},
	__updateItem: function (data){
		zn.dialog({
			title: '修改信息',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/update'
				exts={{model: this.props.model}}
				merge="updates"
				value={data}
				onSubmitSuccess={this.__doSuccess}
				btns={[
					{text: '修改', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight:0 }},
					{text:'取消', type:'cancle', status: 'danger', float: 'right'}
				]}
				items={this.props.formItems} />
		});
	},
	__onToolbarClick: function (item){
		switch (item.name) {
			case 'addItem':
				return this.__addItem();
			case 'updateItem':
				return this.__updateItem(this.state.currItem);
			case 'deleteItems':
				zn.confirm('确认删除该项吗？', '提示', function () {
					zn.http.post('/zn.plugin.admin/model/delete', {
						model: this.props.model,
						where: 'in in (' + this._value.join(',') + ')'
					}).then(function (data){
						this.state.data.refresh();
						zn.toast.error('删除成功！');
					}.bind(this), function (data){
						zn.toast.error('删除出错: ' + data.result);
					});
				}.bind(this));
				break;
		}
	},
	render:function(){
		return (
			<zn.react.Page
				title={this.props.title}
				toolbarItems={this.props.toolbarItems}
				onToolbarClick={this.__onToolbarClick}>
				<zn.react.PagerView
					view="ListView"
					className="rt-list-view-border"
					ref="listview"
					textKey="name"
					valueKey="id"
					selectMode="checkbox"
					itemRender={this.props.itemRender}
					onClick={(value, rtitem)=>this._value = value}
					data={this.state.data} />
			</zn.react.Page>
		);
	}
});
