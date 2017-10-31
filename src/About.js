import React,{ Component } from 'react';
import Navegation from './Navegation.js';


export default class About extends Component{
	render(){
		return(
			<div className="Container-internal">
				<Navegation />
				<h1>About</h1>
			</div>	
		);
	}
}