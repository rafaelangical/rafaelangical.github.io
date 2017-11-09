import React,{ Component } from 'react';
import Navegation from './Navegation.js';
import './About.css';

export default class About extends Component{
	render(){
		return(
			<div className="Container-internal container-about">
				<Navegation />
				<div className="div-about">
					<h3 className="h3-about">About</h3>
					<p className="p-about-p p-about-p-small">I am an eternal passionate about technologies and challenges, I am currently developing "web links to improve things and make our daily lives easier haha", I develop exclusively with Javascript (Language of the future) with React and React Native I am by gradually migrating to FullStack Js (In the future).</p>
				</div>
			</div>	
		);
	}
}