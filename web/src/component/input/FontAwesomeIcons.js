require('./FontAwesomeIcons.less');
var React = require('react');
module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: []
		}
	},
	componentDidMount: function (){
		zn.http.get('/zn.plugin.admin/icon/getFontAwesomes')
			.then(function(data){
				if(data.status==200){
					this.setState({ data: data.result });
				}else {
					zn.toast.error(data.result);
				}
			}.bind(this), function (){
				zn.toast.error('获取数据失败');
			});
	},
	__onIconClick: function (item, index){
		this.props.onChange && this.props.onChange(item, item);
	},
	render:function(){
		return (
			<div className={zn.react.classname("zn-plugin-admin-font-awesome-icons", this.props.className)}>
				{
					this.state.data.map(function (item, index){
						return <i onClick={()=>this.__onIconClick(item, index)} key={index} className={'icon fa ' + item + ' ' + (this.props.value==item?'selected':'')} />;
					}.bind(this))
				}
			</div>
		);
	}
});
