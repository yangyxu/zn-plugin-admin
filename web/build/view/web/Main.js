var React = require('react');
module.exports = React.createClass({
	displayName: 'exports',

	getInitialState: function getInitialState() {
		return {
			data: Store.post('/znadmin/model/select', { model: 'zn_admin_menu', ifEnabledRights: true, where: { pid: 2 } })
		};
	},
	__onMenuItemClick: function __onMenuItemClick(item) {
		var _data = item.props.data;
		if (_data.url) {
			Session.jump(_data.url);
		}
	},
	__itemContentRender: function __itemContentRender(item, index) {
		return React.createElement(
			'span',
			null,
			React.createElement('i', { className: 'fa ' + item.data.icon, style: { width: 16, margin: 10 } }),
			item.data.title
		);
	},
	__onListItemClick: function __onListItemClick(props, rtitem) {
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
	render: function render() {
		if (!Session.json()) {
			Session.jump('/index');
		} else {
			if (!this.props.request || this.props.request.name == '') {
				Session.jump('/main/znadmin/MyInfo');
			}
		}

		var _title = Session.json().name || Session.json().email;
		return React.createElement(
			UI.FixedLayout,
			{
				style: { position: 'fixed' },
				hStyle: { borderBottom: '1px solid #3d3d3d' },
				direction: 'v',
				unit: 'rem',
				end: 3,
				begin: 8 },
			React.createElement(
				'div',
				{ className: 'main-top admin' },
				React.createElement('div', { className: 'rt-fl' }),
				React.createElement(
					'div',
					{ className: 'right' },
					React.createElement(
						UI.Dropdown,
						null,
						React.createElement(
							'div',
							{ className: 'info' },
							React.createElement('img', { className: 'avatar', src: Store.fixURL(Session.json().avatarImg) || "./images/DefaultAvatar.png", style: { width: 32, height: 32, position: 'relative', top: 10, marginRight: 5 } }),
							React.createElement(
								'span',
								null,
								_title,
								React.createElement('i', { style: { margin: 5 }, className: 'fa fa-angle-down' })
							)
						),
						React.createElement(UI.ListView, { selectMode: 'none', data: [{ text: '我的信息' }, { text: '退出' }], onItemClick: this.__onListItemClick, style: { backgroundColor: '#FFF' } })
					)
				)
			),
			React.createElement(
				UI.ActivityLayout,
				{
					begin: 20,
					unit: 'rem',
					hStyle: { borderRight: '1px solid #e9e9e9' },
					fStyle: { right: 10, left: '21rem' },
					direction: 'h' },
				React.createElement(UI.TreeListView, { itemContentRender: this.__itemContentRender, activeAll: true, onClick: this.__onMenuItemClick, data: this.state.data }),
				this.props.view && React.createElement(this.props.view, this.props.request.search)
			),
			React.createElement(
				'div',
				{ className: 'main-foot' },
				'\u4E0A\u6D77\u817E\u9E9F\u6587\u5316\u4F20\u5A92\u6709\u9650\u516C\u53F8 @2016 - @2017'
			)
		);
	}
});