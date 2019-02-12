import React from 'react';

const Rank = ({ name, entries }) =>{
	return(
		<div className = 'center white'>
			<p className= 'f2 '>{name}, Your Current Score is  </p>
			 <br></br><h1 className ='f1'>{entries}</h1>
		</div> 
	);
}

export default Rank;