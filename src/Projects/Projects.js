import React, { Component } from 'react';
import Navegation from '../Navegation.js';
import instagramSimple from './images/instagramSimple.png';
import sumCode from './images/sumCode.jpg';
import piauiTech from './images/piaui.tech.png';
import octalbit from './images/octalbit.png';


export default class Projects extends Component{
	render(){
		return(
			<div className="Container-internal Container-internal-projects">
				<Navegation />
				<div className="projects-container images-container">
					<div className="div-images-window">
						<a href="http://octalbit.com" target="_blank">
							<img src={octalbit} alt="octalbit" className="section-images"/>
						</a>
						<hr className="hr-div-images"/>
						<p className="p-div-images p-div-images-1">Hero of website octalbit make with react and particles-js</p>
					</div>
					<div className="div-images-window">
						<a href="https://github.com/rafaelangical/simpleinstagram" target="_blank">
							<img src={instagramSimple} alt="instagramSimple" className="section-images"/>
						</a>
						<hr className="hr-div-images"/>
						<p className="p-div-images p-div-images-2">Simplification of instagram created with react and es6</p>
					</div>
					<div className="div-images-window">
						<a href="https://github.com/rafaelangical/sum_bar-code" target="_blank">
							<img src={sumCode} alt="sum_code-bar" className="section-images section-images-app"/>
						</a>
						<hr className="hr-div-images"/>
						<p className="p-div-images p-div-images-3">App of moviment of products whith codebar scanner.</p>
					</div>
					<div className="div-images-window">
						<a href="https://piaui.xyz" target="_blank">
							<img src={piauiTech} alt="piauiTech" className="section-images"/>
						</a>
						<hr className="hr-div-images"/>
						<p className="p-div-images p-div-images-4">Hero of website octalbit make with react and es6 and particles-js</p>
					</div>
				</div>
			</div>
		);
	}
}