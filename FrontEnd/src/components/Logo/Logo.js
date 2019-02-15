import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain_glyph from './brain_glyph.png'

const Logo = () =>{
	return(
		<div className= 'pa4 ma4'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height:100 , width: 100 }} >
			<div className="Tilt-inner"> 
				<img alt = '' src={brain_glyph} />
			</div>
		</Tilt>
		</div> 
	);
}

export default Logo;