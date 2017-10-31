import React, { Component } from 'react';
import Navegation from './Navegation.js';

export default class Projects extends Component{
	render(){
		const images  = [
			'http://lorempixel.com/400/200',
			'http://lorempixel.com/400/300',
			'http://lorempixel.com/400/400',
			'http://lorempixel.com/400/300',
			'http://lorempixel.com/400/400',
			'http://lorempixel.com/400/100',
		];

		const setImage = images.map ((src,index) => {
			return <img key={index} className="section-images" alt="" src={src} onClick={() => this.estateModal(index) }/>
    });

		return(
			<div className="Container-internal">
				<Navegation />
				<div className="projects-container">
					{setImage}
				</div>
			</div>
		);
	}
}