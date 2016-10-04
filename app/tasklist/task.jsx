import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from 'material-ui/List/ListItem';
import Checkbox from 'material-ui/Checkbox';

var Task=React.createClass({

  getInitialState: function() {
    return {style: Object.assign({},taskStyle)};
  },
  handleRemove:function(){

    this.state.style.opacity=0;
    this.setState(this.state);

    setTimeout(()=>{

      this.props.onRemove(this.props.data.id);

    },1000);

  },
  render:function(){

    return(

     <ListItem style={this.state.style} primaryText={this.props.data.content} leftCheckbox={<Checkbox onCheck={this.handleRemove} />} />

    );
  }

});

var taskStyle = {
  opacity:1,
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
  transitionDuration: '1s'
};


module.exports = Task;
