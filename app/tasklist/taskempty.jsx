import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import Done from 'material-ui/svg-icons/action/done';
//informs that no tasks are added yet
var TaskEmpty = React.createClass({

  style:{

    padding:"20px",
    textAlign:"center"
  },
  render:function(){

    return (
      <Paper zDepth={1} style={this.style} >
        <Done color="green" />
        <p>All tasks are completed.</p>
      </Paper>
    );
  }

});

export default TaskEmpty;
