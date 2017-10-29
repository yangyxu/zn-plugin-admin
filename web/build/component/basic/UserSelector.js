var React = require('react');
var LetterSelector = require('./LetterSelector.js');
var RoleSelector = require('./RoleSelector.js');
module.exports = React.createClass({
	displayName: 'exports',

	getDefaultProps: function getDefaultProps() {
		return {
			mulitable: true
		};
	},
	getInitialState: function getInitialState() {
		return {
			currIndex: 0,
			search: '',
			value: this.props.mulitable ? ',' : '',
			users: []
		};
	},
	componentDidMount: function componentDidMount() {
		this.__loadUsers();
	},
	__onLetterChange: function __onLetterChange(value) {
		/*
  this.__loadUsers({
  	firstChar: value
  });*/
	},
	__onRoleChange: function __onRoleChange(value) {
		/*
  this.__loadUsers({
  	role: value
  });*/
	},
	__loadUsers: function __loadUsers(where) {
		zn.http.post('/zn.plugin.admin/model/select', {
			model: 'ZNPluginAdminUser',
			where: where || {}
		}).then(function (data) {
			this.setState({
				users: data.result
			});
		}.bind(this));
	},
	__onSearch: function __onSearch(value) {
		this.setState({
			search: value
		});
	},
	__onUserClick: function __onUserClick(user) {
		var _id = user.id + ',';
		if (this.props.mulitable) {
			if (this.state.value.indexOf(',' + _id) == -1) {
				this.state.value = this.state.value + _id;
			} else {
				this.state.value = this.state.value.replace(',' + _id, ',');
			}
		} else {
			if (this.state.value == user.id) {
				this.state.value = null;
			} else {
				this.state.value = user.id;
			}
		}

		this.setValue(this.state.value);
	},
	__onUserCheckAll: function __onUserCheckAll(event, value) {
		if (value) {
			this.setValue(',' + this._users.join(',') + ',');
		} else {
			this.setValue(',');
		}
	},
	__renderUsers: function __renderUsers() {
		var _value = this.state.value,
		    _search = this.state.search;
		this._users = [];
		return React.createElement(
			'div',
			{ className: 'user-view' },
			React.createElement(zn.react.Search, { onSearch: this.__onSearch }),
			React.createElement(
				'ul',
				{ className: 'users' },
				this.state.users.map(function (user, index) {
					var _this = this;

					var _selected = false,
					    _userId = user.id,
					    _name = user.name;
					if (_search && _name.indexOf(_search) == -1) {
						return null;
					} else {
						if (_search) {
							_name = _name.replace(_search, '<span style="color:red">' + _search + '</span>');
						}
					}
					this._users.push(_userId);

					if (this.props.mulitable) {
						_selected = _value.toString().indexOf(',' + _userId + ',') != -1;
					} else {
						_selected = +_value === +_userId;
					}

					return React.createElement(
						'li',
						{ key: index, className: 'user ' + (_selected ? 'selected' : ''), onClick: function onClick() {
								return _this.__onUserClick(user);
							} },
						React.createElement('img', { className: 'avatar', src: zn.http.fixURL(user.avatar_img) || './images/DefaultAvatar.png' }),
						React.createElement('span', { className: 'name', dangerouslySetInnerHTML: { __html: _name } })
					);
				}.bind(this)),
				this.props.mulitable && React.createElement(
					'li',
					null,
					React.createElement(zn.react.Checkbox, { text: '\u5168\u9009', onChange: this.__onUserCheckAll })
				)
			)
		);
	},
	setValue: function setValue(value) {
		this.setState({
			value: value
		});
	},
	getValue: function getValue() {
		return this.state.value;
	},
	__renderView: function __renderView() {
		switch (this.state.currIndex) {
			case 0:
				return React.createElement(LetterSelector, { onChange: this.__onLetterChange });
			case 1:
				return React.createElement(RoleSelector, { onChange: this.__onRoleChange });
		}
	},
	render: function render() {
		var _this2 = this;

		return React.createElement(
			'div',
			{ className: 'zn-plugin-admin-user-selector' },
			React.createElement(zn.react.ListView, {
				className: 'zr-tab-ios',
				selectMode: 'radio',
				textKey: 'text',
				valueKey: 'index',
				onClick: function onClick(value) {
					return _this2.setState({ currIndex: value.item.index });
				},
				value: this.state.currIndex,
				data: [{ index: 0, text: '首字母', icon: 'fa-font' }, { index: 1, text: '所属部门', icon: 'fa-sitemap' }] }),
			React.createElement(
				'div',
				{ className: 'user-selector' },
				this.__renderView(),
				this.__renderUsers()
			)
		);
	}
});