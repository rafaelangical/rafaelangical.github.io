import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Hero from './Hero/Hero.js';
import About from './About.js';
import Projetcs from './Projects.js';

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Hero} exact />
          <Route path="/Home" component={Hero} exact />
          <Route path="/Projects" component={Projetcs} exact />
          <Route path="/About" component={About} exact />
        </div>
      </BrowserRouter>
    );
  }
}
