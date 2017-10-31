import React, { Component } from 'react';
import './Hero.css';
import perfil from './perfil.jpg';
import {} from 'react-router-dom'
import Navegation from '../Navegation.js';

export default class Hero extends Component {
  render() {
    return (
      <div className="container-wrapper">
        <Navegation />
        <div className="hero-content">
          <div className="hero-content-image">
            <img src={perfil} className="hero-image" alt="Rafael Souza"/>
          </div>
          <div className="hero-content-bottom">
            <h1>Rafael Developer</h1>
            <hr />
            <p className="p-hero">Fabrico "coisas" para a web...</p>
          </div>
        </div>
      </div>
    );
  }
}