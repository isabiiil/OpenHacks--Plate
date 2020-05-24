import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './home';
import Login from './login';
import Signup from './signup';
import Tasks from './tasks';
import NotFound from './notfound';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route path="/tasks" component={Tasks} />
        <Route><NotFound /></Route>
      </Switch>
    </div>
  );
}

export default App;
