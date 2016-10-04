import React from 'react';
import ReactDOM from 'react-dom';
import List from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Task from "./task.jsx";

var TaskList=React.createClass({

  render:function(){

    return(
      <Paper zDepth={1} >
      <List>
        {
          this.props.tasks.map((task)=>{
            return <Task onRemove={this.props.onRemove} key={task.id} data={task} />
          })
        }
      </List>
    </Paper>
    );
  }

});

module.exports = TaskList;
