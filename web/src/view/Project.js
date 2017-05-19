var React = require('react');
var TreeModelView = require('../model/TreeModelView');
var ProjectBug = require('./ProjectBug.js');

module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'zn_admin_project',
			title: '项目管理',
			leftWidth: 20,
			pid: 0,
			fields: [
				{ title: '模块名称', type: 'Input', name: 'title' },
				{ title: '版本号', type: 'Input', name: 'version' },
				{ title: '优先级', type: 'Select', name: 'priority',data: [{text:'正常', value: 1},{text:'紧急', value: 2},{text:'非常紧急', value: 3}] },
				{ title: '开始时间', name: 'beginTime', type: 'Timer' },
				{ title: '结束时间', name: 'endTime', type: 'Timer' },
				{ title: '文件', name: 'files', type: 'FileUploader', action: '/znadmin/uploadFiles' },
				{ title: '功能表述', type: 'RichEditor', name: 'description' },
				{ title: '备注', type: 'Textarea', name: 'note' }
			]
		};
	},
	__rightRender: function (tree){
		var _currItem = tree.state.currItem;
		return <ProjectBug data={_currItem?_currItem.props.data:null} />;
	},
	__itemContentRender: function (item){
		//console.log(item);
		return <div style={{ display: 'inline-flex', lineHeight: '25px' }}>
			<span className="title">{item.data.title}</span>
			<span className="version">({item.data.version})</span>
		</div>
	},
	render:function(){
		return (
			<TreeModelView itemContentRender={this.__itemContentRender} {...this.props} rightRender={this.__rightRender} />
		);
	}
});
