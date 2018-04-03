import Grid from 'material-ui/Grid';
import React from 'react';

import logo from './logo.svg';
import './app.css';

const App = () => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center">
        <Grid item xs={11}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>{' '}
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default App;
