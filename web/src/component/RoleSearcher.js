var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function (){
		return {
			value: ',',
			disabled: false,
			cascade: false,
			activeAll: false,
			enableCheckbox: true
		};
	},
	getInitialState: function (){
		return {
			value: this.props.value,
			data: zn.store.post('/zn.plugin.admin/model/select', {
				model: 'ZNPluginAdminRole',
				where: {
					zn_tree_pid: 0
				}
			})
		}
	},
	componentDidUpdate: function (prevProps){
		if(prevProps.value != this.props.value){
			this.setState({
				value: this.props.value
			});
		}
	},
	__onTreeMenuItemCheckboxChange: function (value){
		this.state.value = value;
		this.props.onChange && this.props.onChange(value);
	},
	setValue: function (value){
		this.setState({
			value: value
		});
		this.props.onChange && this.props.onChange(value);
	},
	getValue: function (){
		return this.state.value;
	},
	__itemContentRender: function (props){
		var _icon = '';
		switch (props.data.type) {
			case 1:
				_icon = 'fa-sitemap';
				break;
			case 2:
				_icon = 'fa-graduation-cap';
				break;
		}

		return <span>
			{_icon && <i style={{margin:5}} className={'fa ' + _icon} />}
			{(this.props.debug?(props.data.id + '、'):'') + props.data.zn_title}
		</span>;
	},
	render: function (){
		return (
			<div className="zr-user-selector">
				<zn.react.TreeListView
					{...this.props}
					value={this.state.value}
					data={this.state.data}
					onItemCheckboxChange={this.__onTreeMenuItemCheckboxChange}
					itemContentRender={this.__itemContentRender} />
			</div>
		);
	}
});
