var React = require('react');

module.exports = React.createClass({
	__renderPages: function (){
		var _routers = zn.react.app._routers;
		return <ul>
			{
				Object.keys(_routers).map(function (router, index){
					return <li style={{padding: 3}}>
						<i data-tooltip="复制链接" onClick={()=>zn.react.copyToClipboard(router)} className="fa fa-clipboard zr-padding-3" />
						<a href={'#'+router}>{router}</a>
					</li>;
				})
			}
		</ul>;
	},
	render:function(){
		return (
			<zn.react.Page className="zn-plugin-admin-devtool-page-debuger" title="页面调试器" >
				{this.__renderPages()}
			</zn.react.Page>
		);
	}
});
