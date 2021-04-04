import React from 'react';
import './App.scss';
import LoginForm from './Login/LoginForm'
import SignUpForm from './SignUp/SignUpForm'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact component={LoginForm}/>
          <Route path="/signUp" exact component={SignUpForm}/>
      </Switch>
    </div>
  );
}

export default App;
