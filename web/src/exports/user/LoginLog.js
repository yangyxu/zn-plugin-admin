var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'ZNPluginAdminUserLog'
		};
	},
	getInitialState: function () {
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model
			}),
			items: [
				{ title: '操作人', name: 'user_id_convert', width: 100 },
				{ title: '操作时间', name: 'zn_create_time', width: 180 },
				{ title: '类型', name: 'type', width: 80 },
				{ title: '说明', name: 'zn_note' }
			]
		}
	},
	render:function(){
		return (
			<zn.react.Page
				toolbarItems={[{text:'导出'}]}
				onToolbarClick={this.__onToolbarClick}
				title="系统账户登录日志">
				<zn.react.PagerView
					view="Table"
					enableFilter={false}
					checkbox={0}
					showHeader={true}
					data={this.state.data}
					items={this.state.items}/>
			</zn.react.Page>
		);
	}
});
