import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
//informs that no tasks are added yet
var TaskEmpty = React.createClass({

  style:{

    padding:"20px",
    textAlign:"center"
  },
  render:function(){

    return (
      <Paper zDepth={1} style={this.style} >
        <h3>All tasks are completed. Add new ones</h3>
      </Paper>
    );
  }

});

export default TaskEmpty;
