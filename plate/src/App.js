import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './home';
// import Login from './login';
// import Signup from './signup';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} /> */}
        
      </Switch>
    </div>
  );
}

export default App;
