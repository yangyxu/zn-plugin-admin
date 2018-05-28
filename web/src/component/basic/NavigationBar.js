var React = require('react');

var MenuItem = React.createClass({
	getInitialState: function (){
		return {
			active: true
		}
	},
	__renderChildren: function (children){
		return (
			<ul className="sub-menu-list">
				{
					children.map(function (item, index){
						return <li className={(item.url && zn.react.session.containPath(item.url))?'active-item':''} key={index} onClick={()=>this.__onSubItemClick(item, index)}>
							<div className="item-title"><div className="title"><i className={"fa " + item.icon} />{item.zn_title}</div></div>
						</li>;
					}.bind(this))
				}
			</ul>
		);
	},
	__onSubItemClick: function (item, index){
		if(item.url){
			this.props.onMenuItemClick && this.props.onMenuItemClick(item, index);
			zn.react.session.relativeJump(item.url);
		}else {
			zn.http.get('/zn.plugin.admin/menu/getMenuPrimaryInfo?menuId=' + item.id)
				.then(function (data){
					if(data.status==200){
						zn.react.session.relativeJump("/znpluginadmin.setting.menupage", { menu: item.id });
					}else {
						zn.notification.error(data.result);
					}
				}, function (){
					zn.notification.error('请求出错');
				});
		}
	},
	render: function (){
		var item = this.props.item;
		return (
			<li className="menu-item" data-active={this.state.active}>
				<div className="item-title" onClick={()=>this.setState({ active: !this.state.active })}>
					<span className="title"><i className={"fa " + item.icon} />{item.zn_title}</span>
					<i className={"fa zr-padding-3 zn-fr " + (this.state.active?'fa-angle-down':'fa-angle-right')} />
				</div>
				{ !!item.children && !!item.children.length && this.__renderChildren(item.children)}
			</li>
		);
	}
});

module.exports = React.createClass({
	__renderItem: function (item, index){
		return <MenuItem onMenuItemClick={this.props.onMenuItemClick} item={item} index={index} />;
	},
	render:function(){
		return (
			<div className={zn.react.classname("zn-plugin-admin-navigation-bar", this.props.className)} style={this.props.style}>
				<ul className="menu-list">
					{
						this.props.data.map(this.__renderItem)
					}
				</ul>
			</div>
		);
	}
});
