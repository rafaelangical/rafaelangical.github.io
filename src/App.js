import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Hero from './Hero/Hero.js';
import About from './About.js';
import Projetcs from './Projects/Projects.js';


class Error extends Component{
  render() {
    return(
      <h3>Not Found 404</h3>
    );
  }
}

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Hero} exact />
          <Route path="/Home" component={Hero} exact />
          <Route path="/Projects" component={Projetcs} exact />
          <Route path="/About" component={About} exact />
          <Route Component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}
