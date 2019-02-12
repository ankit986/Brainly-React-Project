import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onClick }) =>{
	return(
		<div style = {{margin : 'auto', width: '50%'}}>
		  <div>
			<p className= 'center f3'>{'This is created to detect your face using AI'}</p> 
			<div className = 'form pa4  br3 shadow-4'>
				<input className='f4 pa2 w-70' type = "text" onChange = {onInputChange} />
				<button className = 'f4 grow pointer pa3 w-30 link ph3 pv2 dib white bg-light-purple' onClick= {onClick}>Detect</button>
		  	</div>
		  	</div>
		</div> 
	);
}

export default ImageLinkForm;