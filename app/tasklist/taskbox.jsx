import React from 'react';
import ReactDOM from 'react-dom';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import TaskList from "./tasklist.jsx";
import TaskForm from "./taskform.jsx";
import TaskEmpty from "./taskempty.jsx";


var TaskBox=React.createClass({
  getInitialState: function() {
    return {tasks: this.getFromDB()  };
  },
  //gets tasks from storage
  getFromDB:function(){
    return localStorage.hasOwnProperty("tasks")?JSON.parse(localStorage.tasks):[];
  },
  //saves tasks to storage
  saveToDB:function(){

    localStorage.tasks=JSON.stringify(this.state.tasks);

  },
  handleTaskRemove:function(id){

    var tasks=this.state.tasks;

    //remove that one with removed item id
    tasks=tasks.filter((el)=>{

      return el.id!=id;

    });

    this.setState({tasks:tasks});
    this.saveToDB();

  },

  floatButtonStyle:{
    position:"fixed",
    right:"20px",
    bottom:"100px"
  },
  handleTaskAdd:function(){

    if (!this.refs.form.validate())
    return; //task is not validated

     //get task from taskForm
     var task=Object.assign({},this.refs.form.state);

     var tasks=this.state.tasks;
     if (tasks.length===0)
     task.id=0;
     else
     task.id=tasks[tasks.length-1].id+1;

     tasks.push(task);

     this.setState({tasks:tasks});
     this.saveToDB();

     //clears form
     this.refs.form.clear();

  },
  render: function() {

    var Tasks;
    if (this.state.tasks.length>0){
      Tasks=<TaskList onRemove={this.handleTaskRemove} tasks={this.state.tasks}/>
    }else{
      Tasks=<TaskEmpty />
    }

    return (
      <div className="taskBox">
        {Tasks}
        <FloatingActionButton onClick={this.handleTaskAdd} secondary={true} style={this.floatButtonStyle} >
          <ContentAdd />
        </FloatingActionButton>
        <TaskForm ref="form" onTaskAdd={this.handleTaskAdd}/>
      </div>
    );
  }
});

module.exports = TaskBox;
