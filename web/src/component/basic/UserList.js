require('./UserList.less');
var React = require('react');
var LetterSelector = require('./LetterSelector.js');
var RoleSelector = require('./RoleSelector.js');
module.exports = React.createClass({
	getDefaultProps: function (){
		return {
			mulitable: true
		}
	},
	getInitialState: function () {
		return {
			currIndex: 0,
			search: '',
			loading: false,
			value: this.props.mulitable?',':0,
			users: []
		}
	},
	componentDidMount: function (){
		this.__loadUsers();
	},
	__onLetterChange: function (value){
		this.setState({
			loading: true
		});
		if(value.length>2){
			zn.http.get('/zn.plugin.admin/user/findUsersByChars?chars='+value).then(function (data){
				this.setState({
					loading: false,
					users: data.result
				});
			}.bind(this));
		}else {
			this.__loadUsers()
		}
	},
	__onRoleChange: function (value){
		this.setState({
			loading: true
		});
		zn.http.get('/zn.plugin.admin/role/getRoleUsers?role='+value.value).then(function (data){
			this.setState({
				loading: false,
				users: data.result
			});
		}.bind(this));
	},
	__loadUsers: function (where){
		this.setState({
			loading: true
		});
		zn.http.post('/zn.plugin.admin/user/getAllUser')
		.then(function (data){
			this.setState({
				loading: false,
				users: data.result
			});
		}.bind(this));
	},
	__onSearch: function (value){
		this.setState({
			search: value
		});
	},
	__onUserClick: function (user){
		var _id = user.value + ',';
		if(this.props.mulitable){
			if(this.state.value.indexOf(','+_id)==-1){
				this.state.value = this.state.value + _id;
			}else {
				this.state.value = this.state.value.replace(',' + _id, ',');
			}
		}else {
			if(this.state.value == user.value){
				this.state.value = null;
			}else {
				this.state.value = user.value;
			}
		}
		this.props.onUserClick && this.props.onUserClick(user);
		this.setValue(this.state.value);
	},
	__onUserCheckAll: function (event, value){
		if(value){
			this.setValue(',' + this._users.join(',') + ',');
		}else {
			this.setValue(',');
		}
	},
	__renderUsers: function (){
		var _value = this.state.value,
			_search = this.state.search;
		this._users = [];
		return (
			<div className="user-view">
				<zn.react.Search onSearch={this.__onSearch} />
				{
					!this.state.loading ? <ul className="users">
						{
							this.state.users.map(function (user, index){
								var _selected = false,
									_userId = user.value,
									_name = user.text;
								if(_search && _name.indexOf(_search)==-1){
									return null;
								}else {
									if(_search){
										_name = _name.replace(_search, '<span style="color:red">'+_search+'</span>');
									}
								}
								this._users.push(_userId);

								if(this.props.mulitable){
									_selected = (_value).toString().indexOf(',' + _userId+',')!=-1;
								}else {
									_selected = +_value === +_userId;
								}

								return <li key={index} className={'user '+(_selected?'selected':'')} onClick={()=>this.__onUserClick(user)}>
									{user.avatar_img?<img className="avatar" src={zn.http.fixURL(user.avatar_img)||'./images/DefaultAvatar.png'} />:<span className="first-char">{user.first_char}</span>}
									<span className="name" dangerouslySetInnerHTML={{ __html: _name }} ></span>
								</li>;
							}.bind(this))
						}
						{this.props.mulitable && <li><zn.react.Checkbox text="全选" onChange={this.__onUserCheckAll} /></li>}
					</ul>:<zn.react.DataLoader content="正在加载..." loader="timer" />
				}
			</div>
		);
	},
	setValue: function (value){
		this.setState({
			value: value
		});
	},
	getValue: function (){
		if(!this.props.mulitable && !this.state.value){
			return 0;
		}
		return this.state.value;
	},
	__renderView: function (){
		switch (this.state.currIndex) {
			case 0:
				return <LetterSelector onChange={this.__onLetterChange} />;
			case 1:
				return <RoleSelector checkboxEnabled={false} onChange={this.__onRoleChange} />;
		}
	},
	render:function(){
		return (
			<div className="zn-plugin-admin-user-selector">
				<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					textKey="text"
					valueKey="index"
					onClick={(value)=>this.setState({ currIndex: value.item.index })}
					value={this.state.currIndex}
					data={[
						{ index: 0, text: '首字母', icon: 'fa-font' },
						{ index: 1, text: '所属部门', icon: 'fa-sitemap' }
					]} />
				<div className="user-selector">
					{this.__renderView()}
					{this.__renderUsers()}
				</div>
			</div>
		);
	}
});
