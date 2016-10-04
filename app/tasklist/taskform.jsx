import React from 'react';
import ReactDOM from 'react-dom';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import TextField from 'material-ui/TextField';

var TaskForm=React.createClass({

  style:{

    position:"fixed",
    bottom:"0px"
  },
  getInitialState:function(){

    return { content:"" };

  },
  //after adding we clear task
  clear:function(){

    this.setState({content:"",error:""});
  },
  //validation if task is filled
  validate:function(){

    if (this.state.content===""){
      this.setState({error:"Please enter the task description"});
      return false;
    }

    this.setState({error:""});
    return true;

  },
  handleKey:function(e){

    if (e.charCode===13 && this.validate())//enter press
    {
      this.props.onTaskAdd();
    }


  },
  handleChange:function(e){

    this.validate();
    this.setState({content:e.target.value})
  },

  render:function(){

    return(
      <BottomNavigation style={this.style} >
        <TextField
          onKeyPress={this.handleKey}
          multiLine={false}
          value={this.state.content}
          onChange={this.handleChange}
          hintText="To do something"
          errorText={this.state.error}
          />
      </BottomNavigation>
    );
  }

});

module.exports = TaskForm;
