import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './login/login';
import Dashboard from './app/dashboard';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginSuccessful: false
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => (
            this.state.loginSuccessful ? <Dashboard /> :
              <Redirect to='/login' />
          )} />
          <Route exact path="/login" component={Login} />

        </Switch>
      </Router>
    );
  }

}

export default App;
