import React from 'react';
import './faceBox.css';

const ImageBox = ({imageLink, box}) =>{
	return(
		
		<div className = "center mw-50 pa2 br3 w-30">
		  <img id='imagge' alt='' src={imageLink}/>
		  <div className="faceBox" style={{top:box.topRow, bottom: box.bottomRow, right: box.rightCol, left: box.leftCol}}></div>		
		</div>
	);
}

export default ImageBox;