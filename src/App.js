import React from 'react';
import './App.css';
import tag from './assets/img/tag.svg';
import github from './assets/img/github.svg';
import linkedin from './assets/img/linkedin.svg';
import twitter from './assets/img/twitter.png';

function App() {
  return (
    <div className="App">
      <img src={tag} alt='tag' /> 
      <h1>Rafael <strong>dev</strong></h1>
      <p>
        <span> HTML</span> - 
        <span> CSS</span> - 
        <span> JS</span> - 
        <span> React</span> - 
        <span> React Native</span> - 
        <span> Redux</span> - 
        <span> NodeJs</span>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/rafaelangical/" target='_blank'><img src={linkedin} alt ='linkedin'/></a>
        <a href="https://twitter.com/rafaelangical" target="_blank"><img src={twitter} alt ='twitter'/></a>
        <a href="https://github.com/rafaelangical" target="_blank"><img src={github} alt ='github'/></a>
      </p>
      <a href="mailto:rafaelangical2@egmail.com" className="email">rafaelangical2@gmail.com</a>
      <a href="tel:+5586995713097">Call me +55 86 995713097</a>
    </div>
  );
}

export default App;
