import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan800, indigoA400} from 'material-ui/styles/colors';


import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme({
  palette: {
  	primary1Color:indigoA400,
    accent1Color: cyan800,
  }
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Signup />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
