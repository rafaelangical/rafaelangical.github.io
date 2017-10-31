import React,{ Component } from 'react';

export default class Navegation extends Component{
  
  notRefresh = (e) =>{
    //e.preventDefault();
    console.log("prevent default");
  };
  
  render(){
    const li = [
      'About',
      'Projects',
      'Home'
    ];

    const mapLi = li.map((src,index)=>{
      return <li key={index}><a href={src} onClick={(e) => { this.notRefresh(e)}}>{src}</a></li>
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