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
			data: Store.post('/znadmin/model/paging', {
				model: this.props.model,
				where: this.props.where
			})
		}
	},
	componentDidMount: function (){

	},
	__doSuccess: function (){
		Popup.close('dialog');
		Popup.message({
			content: '操作成功！',
			type: 'success'
		});
		this.state.data.refresh();
	},
	__addItem: function (pid){
		Popup.dialog({
			title: '添加',
			hStyle: { backgroundColor: '#0B72A5' },
			width: 480,
			content: <UI.Form
				method="POST"
				layout="stacked"
				action='/znadmin/model/addNode'
				exts={{model: this.props.model}}
				hiddens={this.props.where}
				merge="data"
				style={{ margin: 25 }}
				syncSubmit={false}
				onSubmitSuccess={this.__doSuccess}
				btns={[{text: '添加', icon: 'fa-plus', type: 'submit', float: 'right', style: { marginRight:0 }},{text:'取消', type:'cancle', status: 'danger', float: 'right'}]}
				items={this.props.formItems} />
		});
	},
	__removeItems: function (){
		Popup.confirm({
			content: '确认删除该项吗？',
			onConfirm: function () {
				Store.post('/znadmin/model/deleteNode', {
					model: this.props.model,
					id: data.id
				}).exec().then(function (data){
					this.state.data.refresh();
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
	},
	__removeItem: function (){
		if(this.state.masterId){
			Popup.confirm({
				content: '确认删除该项吗？',
				onConfirm: function () {
					Store.post('/znadmin/model/deleteNode', {
						model: this.props.model,
						id: this.state.masterId
					}).exec().then(function (data){
						this.state.data.refresh();
						Toast.success('删除成功！');
					}.bind(this), function (data){
						Toast.error('删除出错: ' + data.result);
					});
				}.bind(this)
			});
		}else {
			Toast.warning('请先选择待删除数据项！');
		}
	},
	__updateItem: function (data){
		Popup.dialog({
			title: '更新项目信息',
			hStyle: { backgroundColor: '#0B72A5' },
			width: 480,
			content: <UI.Form
				method="POST"
				layout="stacked"
				action='/znadmin/model/updateNode'
				exts={{
					model: this.props.model
				}}
				merge="data"
				data={data}
				style={{ margin: 25 }}
				syncSubmit={false}
				onSubmitSuccess={this.__doSuccess}
				btns={[{text: '更新', icon: 'fa-edit', type: 'submit', float: 'right', style: { marginRight:0 }},{text:'取消', type:'cancle', status: 'danger', float: 'right'}]}
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
			<UI.Page
				toolbarItems={this.props.toolbarItems}
				onToolbarClick={this.__onToolbarClick}
				title={this.props.title}>
				<UI.ActivityLayout direction="h" begin={this.props.leftWidth||250} unit="px">
					<UI.PagerView
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
				</UI.ActivityLayout>
			</UI.Page>
		);
	}
});
