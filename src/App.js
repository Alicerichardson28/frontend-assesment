import React from 'react';
import './App.scss';
import LoginForm from './Login/LoginForm'
import SignUpForm from './SignUp/SignUpForm'
import LandingPage from './Component/GreetingPage/LandingPages'
import Iphone from './Component/AllProductPage/Iphone'
import Laptop from './Component/AllProductPage/Laptop'
import AppleWatch from './Component/AllProductPage/AppleWatch'
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './Component/GreetingPage/WelcomePage';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact component={LoginForm}/>
          <Route path="/signUp" exact component={SignUpForm}/>
          <Route path="/landingPage" exact component={LandingPage}/>
          <Route path="/welcomePage" exact component={WelcomePage}/>
          <Route path="/iphone" exact component={Iphone}/>
          <Route path="/laptop" exact component={Laptop}/>
          <Route path="/appleWatch" exact component={AppleWatch}/>
      </Switch>
    </div>
  );
}

export default App;
