var React = require('react');
var TreeEditor = require('../basic/TreeEditor');
var ModelEditor = require('../basic/ModelEditor');

module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'ZNPluginAdminVar',
			pid: 0
		};
	},
	getInitialState: function () {
		return {
			items: this.props.fields||[],
			currItem: null
		}
	},
	__onTreeValueChange: function (obj){
		this.setState({ currItem: obj });
		this.props.onItemClick && this.props.onItemClick(obj);
	},
	__renderRight: function (){
		if(this.state.currItem){
			var _result = this.props.rightRender && this.props.rightRender(this.state.currItem, this);
			if(_result){
				return _result;
			} else {
				return <ModelEditor {...this.props} data={this.state.currItem} />;
			}
		}else {
			var _result = this.props.emptyRender && this.props.emptyRender(this);
			if(_result){
				return _result;
			} else {
				return <div className="zr-center zr-empty-view">请选择左边数据项.</div>;
			}
		}
	},
	__itemContentRender: function (data, treeColumn, tree){
		return this.props.itemContentRender && this.props.itemContentRender(data, treeColumn, tree);
	},
	render:function(){
		return (
			<zn.react.Page className="zn-plugin-admin-tree-model-view" title={this.props.title} >
				<div className="zr-flex-layout zn-plugin-admin-master-slave-flex-layout row">
					<div className="layout-header" style={{minWidth: 200}}>
						<TreeEditor
							{...this.props}
							contentRender={this.__itemContentRender}
							onValueChange={this.__onTreeValueChange} />
					</div>
					<div className="layout-body">
						{this.__renderRight()}
					</div>
				</div>
			</zn.react.Page>
		);
	}
});
