var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function (){
		return {

		}
	},
	getInitialState: function () {
		return {

		}
	},
	componentDidMount: function (){

	},
	__renderItem: function (item, index){
		return (
			<li className="menu-item">
				<div className="item-title"><i className={"fa " + item.icon} />{item.zn_title}</div>
				{ !!item.children && !!item.children.length && this.__renderChildren(item.children)}
			</li>
		);
	},
	__renderChildren: function (children){
		return (
			<ul className="sub-menu-list">
				{
					children.map(function (item, index){
						return <li className={zn.react.session.isPath(item.url)?'active-item':''} key={index} onClick={()=>this.__onSubItemClick(item, index)}>
							<div className="item-title"><i className={"fa " + item.icon} />{item.zn_title}</div>
						</li>;
					}.bind(this))
				}
			</ul>
		);
	},
	__onSubItemClick: function (item, index){
		if(item.url){
			zn.react.session.relativeJump(item.url);
		}
	},
	render:function(){
		return (
			<div className="zn-plugin-admin-widget-navigation-bar">
				<ul className="menu-list">
					{
						this.props.data.map(function (item, index){
							return this.__renderItem(item, index);
						}.bind(this))
					}
				</ul>
			</div>
		);
	}
});
