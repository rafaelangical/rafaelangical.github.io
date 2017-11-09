import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

export default class Navegation extends Component{
  render(){
    const li = [
      'About',
      'Projects',
      'Home'
    ];

    const mapLi = li.map((src,index)=>{
      return  <li key={index} className="li-a">
                <NavLink 
                  to={src} 
                  activeStyle={{fontWeight: 'bold',color: 'red'}}>
                  {src}
                </NavLink>
              </li>
    });
    return(
      <div className="hero-top Container-external">
        <div className="hero-top-column-left">
          <h2>*_*</h2>
        </div>
        <div className="hero-top-column-right">
          <nav>
            <ul>
              {mapLi}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}