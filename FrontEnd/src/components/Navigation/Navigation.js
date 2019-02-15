import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) =>{
	if( isSignedIn ){
	  return(
			<nav style={{ float:'right' }} >
				<p className = 'f3 pointer grow black link pa3' onClick={() => onRouteChange('signin')} >Sign Out</p>
			</nav>
		);
	} else {
		return(
		<div style={{ float:'right' , display: 'inline-block'} }>
			<p className = 'f3 pointer grow black link pa3 ' onClick={() => onRouteChange('signin')} >Sign In</p>
			<p className = 'f3 pointer grow black link pa3 ' onClick={() => onRouteChange('register')} >Register</p>
		</div>
		)
	}

}

export default Navigation; 