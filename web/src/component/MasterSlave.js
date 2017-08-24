var React = require('react');
var Slave = require('./Slave');

module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			title: '',
			model: '',
			where: {},
			formItems: [],
			toolbarItems: [],
			slave: {
				title: '',
				model: '',
				where: {},
				formItems: [],
				toolbarItems: [],
			}
		}
	},
	getInitialState: function () {
		return {
			masterId: null,
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model,
				where: this.props.where
			})
		}
	},
	__doSuccess: function (){
		zn.modal.close();
		zn.toast.success('操作成功！');
		this.state.data.refresh();
	},
	__addItem: function (){
		zn.dialog({
			title: '添加',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				exts={{model: this.props.model}}
				hiddens={this.props.where}
				merge="values"
				onSubmitSuccess={this.__doSuccess}
				btns={[
					{text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight:0 }},
					{text:'取消', type:'cancle', status: 'danger', float: 'right'}
				]}
				items={this.props.formItems} />
		});
	},
	__removeItems: function (data){
		zn.confirm('确认删除该项吗？', '提醒', function () {
			zn.http.post('/zn.plugin.admin/model/delete', {
				model: this.props.model,
				where: { id: data.id }
			}).then(function (data){
				this.state.data.refresh();
				zn.toast.warning('删除成功！');
			}.bind(this), function (data){
				zn.toast.error('删除出错: ' + data.result);
			});
		}.bind(this));
	},
	__removeItem: function (){
		if(this.state.masterId){
			zn.confirm('确认删除该项吗？', '提醒', function () {
				zn.http.post('/zn.plugin.admin/model/delete', {
					model: this.props.model,
					where: { id: this.state.masterId }
				}).then(function (data){
					this.state.data.refresh();
					zn.toast.warning('删除成功！');
				}.bind(this), function (data){
					zn.toast.error('删除出错: ' + data.result);
				});
			}.bind(this));
		}else {
			zn.toast.warning('请先选择待删除数据项！');
		}
	},
	__updateItem: function (data){
		zn.dialog({
			title: '更新项目信息',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/update'
				exts={{ model: this.props.model }}
				merge="updates"
				data={data}
				onSubmitSuccess={this.__doSuccess}
				btns={[
					{text: '更新', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight:0 }},
					{text:'取消', type:'cancle', status: 'danger', float: 'right'}
				]}
				items={this.props.formItems} />
		});
	},
	__onToolbarClick: function (props){
		switch (props.name) {
			case 'addItem':
				this.__addItem();
				break;
			case 'removeItem':
				this.__removeItem();
				break;
			case 'removeItems':
				this.__removeItems();
				break;
		}
	},
	__onPagerListViewClick: function (value, rtitem, rtlist, event){
		this.setState({ masterId: value });
	},
	render:function(){
		return (
			<zn.react.Page
				toolbarItems={this.props.toolbarItems}
				onToolbarClick={this.__onToolbarClick}
				title={this.props.title}>
				<zn.react.ActivityLayout direction="left-right" begin={this.props.leftWidth||250}>
					<zn.react.PagerView
						view="ListView"
						className="rt-list-view-border"
						textKey="name"
						valueKey="id"
						selectMode="radio"
						fireIndex={0}
						onItemClick={this.__onPagerListViewClick}
						itemRender={this.props.itemRender}
						itemClassName={this.props.itemClassName}
						data={this.state.data}/>
					{!!this.state.masterId?<Slave {...this.props.slave} masterId={this.state.masterId} />:<div>请选择主表数据记录</div>}
				</zn.react.ActivityLayout>
			</zn.react.Page>
		);
	}
});
