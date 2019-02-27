require('./TreeSelector.less');
var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function (){
		return {
			model: 'ZNPluginAdminVar',
			pid: 1,
			value: null,
			text: null,
			debug: false,
			disabled: false,
			cascade: false,
			activeAll: true,
			checkboxEnabled: false
		};
	},
	getInitialState: function (){
		return {
			value: this.props.value,
			data: zn.store.post('/zn.plugin.admin/model/getAllByPid', {
				model: this.props.model,
				pid: this.props.pid
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
	setValue: function (value){
		this.setState({
			value: value
		});
	},
	getValue: function (){
		return this.state.value;
	},
	__itemContentRender: function (value, item){
		var _result = this.props.itemContentRender && this.props.itemContentRender(value, item);
		if(!_result){
			_result = <span>
				{value.icon && <i style={{margin:5}} className={'fa ' + value.icon} />}
				{(this.props.debug?(value.id + '、'):'') + value.zn_title}
			</span>;
		}

		return _result;
	},
	__onValueChange: function (obj){
		this.state.value = obj.value;
		this.state.text = obj.text;
		this.forceUpdate();
		this.props.onValueChange && this.props.onValueChange(obj);
	},
	render:function(){
		return (
			<zn.react.Tree ref="tree" {...this.props}
				className={zn.react.classname("zn-plugin-admin-tree-selector", this.props.className)}
				data={this.state.data}
				value={this.state.value}
				text={this.state.text}
				onValueChange={this.__onValueChange}
				contentRender={this.__itemContentRender} />
		);
	}
});
