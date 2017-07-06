var React = require('react');
module.exports = React.createClass({
	getInitialState:function(){
		return {
			data: Store.post('/znadmin/model/select', { model: 'zn_admin_menu', ifEnabledRights: true, where: { pid: 2 } })
		};
	},
	__onMenuItemClick: function (item){
		var _data = item.props.data;
		if(_data.url){
			Session.jump(_data.url);
		}
	},
	__itemContentRender: function (item, index){
		return <span>
			<i className={'fa ' + item.data.icon} style={{width: 16, margin: 10}} />
			{item.data.title}
		</span>;
	},
	__onListItemClick: function (props, rtitem) {
		switch (rtitem.props.text) {
			case '我的信息':
				Session.jump('/main/znadmin/MyInfo');
				break;
			case '退出':
				Session.doHome();
				break;
		}
		Popover.close('_click');
	},
	render:function(){
		if(!Session.json()){
			Session.jump('/index');
		} else {
			if(!this.props.request || this.props.request.name == ''){
				Session.jump('/main/znadmin/MyInfo');
			}
		}

		var _title = Session.json().name || Session.json().email;
		return (
			<UI.FixedLayout
				style={{position: 'fixed'}}
				hStyle={{borderBottom: '1px solid #3d3d3d'}}
				direction="v"
				unit="rem"
				end={3}
				begin={8}>
				<div className="main-top admin">
					<div className="rt-fl" >
					{
						/*
						<img className="logo" style={{width: 64,height: 64, margin: 10}} src="./images/logo.jpg" />
						<span className="title">上海腾麟文化传媒有限公司</span>
						*/
					}
					</div>
					<div className="right">
						<UI.Dropdown >
							<div className="info">
								<img className="avatar" src={Store.fixURL(Session.json().avatarImg)||"./images/DefaultAvatar.png"} style={{width:32,height:32,position:'relative',top:10, marginRight:5}} />
								<span>{_title}<i style={{margin:5}} className="fa fa-angle-down" /></span>
							</div>
							<UI.ListView selectMode="none" data={[{ text: '我的信息' },{ text: '退出' }]} onItemClick={this.__onListItemClick} style={{backgroundColor:'#FFF'}} />
						</UI.Dropdown>
					</div>
				</div>
				<UI.ActivityLayout
					begin={20}
					unit="rem"
					hStyle={{borderRight:'1px solid #e9e9e9'}}
					fStyle={{right: 10, left: '21rem'}}
					direction="h">
					<UI.TreeListView itemContentRender={this.__itemContentRender}  activeAll={true} onClick={this.__onMenuItemClick} data={this.state.data} />
					{this.props.view && <this.props.view {...this.props.request.search} />}
				</UI.ActivityLayout>
				<div className="main-foot">上海腾麟文化传媒有限公司 @2016 - @2017</div>
			</UI.FixedLayout>
		);
	}
});
