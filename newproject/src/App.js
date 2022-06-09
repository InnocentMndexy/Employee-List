import React from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route
 

} from "react-router-dom";

import './App.css';

import './components/log.module.css'
import './components/about.css';
import './components/contact.css';
import './components/profile.css';
import './components/services.css';
import './components/register.module.css';


import Index from './components/index';  
import Login from "./components/log";
import Emp from './components/employee';
import About from './components/about';
import Contact from './components/contact';
import Profile from './components/profile';
import Services from "./components/services";
import Register from "./components/register";



function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path= "/">
          <Index />
          </Route>
          
          <Route exact path = "/Contact">
            <Contact />
          </Route>

          <Route exact path = "/log">
            <Login />
          </Route>

          <Route exact path = "/about">
            <About />
          </Route>

          <Route  exact path = "/Emp">
            <Emp />
          </Route>

          <Route exact path = "/Profile">
            <Profile />
          </Route>

          <Route exact path = "/Services">
            <Services />
          </Route>

          <Route exact path = "/Register">
            <Register />
          </Route>


         

      </Switch>

    </div>
    </Router>
  );
}
export default App;
