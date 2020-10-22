import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/Landings/Home';
import SignUp from '../src/Landings/SignUp'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
