var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'zn_admin_user_log'
		};
	},
	getInitialState: function () {
		return {
			data: Store.post('/znadmin/model/paging', {
				model: this.props.model
			}),
			items: [
				{ title: '操作人', name: 'userId_convert', width: 100 },
				{ title: '操作时间', name: 'createTime', width: 180 },
				{ title: '类型', name: 'actionType', width: 80 },
				{ title: '说明', name: 'note' },
			]
		}
	},
	__onToolbarClick: function (){

	},
	render:function(){
		return (
			<UI.Page
				toolbarItems={[{text:'导出'}]}
				onToolbarClick={this.__onToolbarClick}
				title="系统账户登录日志">
				<UI.PagerView
					view="Table"
					enableFilter={false}
					checkbox={0}
					showHeader={true}
					data={this.state.data}
					items={this.state.items}/>
			</UI.Page>
		);
	}
});
