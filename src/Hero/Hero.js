import React, { Component } from 'react';
import './Hero.css';
import perfil from './perfill.jpg';
import likedin from './likedin.png';
import github from './github.png';
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
            <div className="hero-content-bottom-top">
              <h1>Rafael Souza</h1>
              <hr />
              <p className="p-hero"><code>I am a web developer with a focus on front-end
              <br />developing with new and secure technologies.</code></p>
            </div>
            <div className="hero-content-bottom-bottom">
              <a href="http://www.linkedin.com/in/rafaelangical" target="_blank">
                <img src={likedin} href="#" alt="likedin" className="images-socials" />
              </a>              
              
              <a href="https://github.com/rafaelangical" target="_blank"> <img src={github} alt="github" className="images-socials" /> </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}