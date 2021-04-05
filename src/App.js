import React from 'react';
import './App.scss';
import LoginForm from './Login/LoginForm'
import SignUpForm from './SignUp/SignUpForm'
import LandingPage from './Component/LandingPages'
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './Component/WelcomePage';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact component={LoginForm}/>
          <Route path="/signUp" exact component={SignUpForm}/>
          <Route path="/landingPage" exact component={LandingPage}/>
          <Route path="/welcomePage" exact component={WelcomePage}/>
      </Switch>
    </div>
  );
}

export default App;
