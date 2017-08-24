var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			_id: 'zn.plugin.admin.base',
			title: '参数设置'
		};
	},
	getInitialState: function (){
		return {
			items: null
		}
	},
	componentDidMount: function (){
		this.__getData();
	},
	__getData: function (){
		zn.http.post('/zn.plugin.admin/config/selectBy_id', {
			_id: this.props._id
		}).then(function (data){
			var _items = [],
				_item = null;
			zn.each(data.result, function (value, key){
				_item = {
					name: key,
					title: value._title,
					type: value.input_type,
					value: value._value||value._rich_value
				};
				if(_item.type == 'ImageUploader'){
					_item.action = '/zn.plugin.admin/uploadFiles';
				}
				_items.push(_item);
			})
			this.setState({
				items: _items
			});
		}.bind(this));
	},
	render:function(){
		return (
			<zn.react.Page loading={!this.state.items} title={this.props.title} >
				<div style={{ backgroundColor: '#FFF' }}>
				{
					this.state.items && <zn.react.Form
									items={this.state.items}
									action="/zn.plugin.admin/config/updateBy_id"
									merge="updates"
									exts={{
										_id: this.props._id
									}}
									/>
				}
				</div>
			</zn.react.Page>
		);
	}
});
