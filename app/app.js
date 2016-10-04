import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TaskBox from './tasklist/taskbox.jsx';

const App = React.createClass({

  render:function(){
    return (
    <MuiThemeProvider>
      <TaskBox />
    </MuiThemeProvider>
    )
  }

});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
