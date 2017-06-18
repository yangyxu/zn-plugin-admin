var React = require('react');

var CHARS = zn.char.getUppercaseLetters();

module.exports = React.createClass({
	getDefaultProps: function (){
		return {
			value: ',',
			mulitable: true
		};
	},
	getInitialState: function (){
		return {
			value: this.props.value,
			tag: null,
			user: null,
			users: []
		}
	},
	__onLetterClick: function (item){
		var _id = item + ',';
		if(this.state.value.indexOf(','+_id)==-1){
			this.state.value = this.state.value + _id;
		}else {
			this.state.value = this.state.value.replace(',' + _id, ',');
		}
		this.setValue(this.state.value);
	},
	setValue: function (value){
		this.setState({
			value: value
		});

		this.props.onChange && this.props.onChange(value);
	},
	__onCheck: function (event, value){
		if(value){
			this.setValue(',' + CHARS.join(',') + ',');
		}else {
			this.setValue(',');
		}
	},
	render: function (){
		return (
			<div className="rt-letter-selector">
				<ul className="tags">
					{
						CHARS.map(function (item, index){
							return <li key={index} className={'tag ' + (this.state.value.indexOf(item)!=-1 ? 'selected' : '')} onClick={()=>this.__onLetterClick(item)}>{item}</li>;
						}.bind(this))
					}
					{this.props.mulitable && <li><zn.react.Checkbox text="全选" onChange={this.__onCheck} /></li>}
				</ul>
			</div>
		);
	}
});
