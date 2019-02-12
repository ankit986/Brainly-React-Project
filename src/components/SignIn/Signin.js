import React from 'react';

class Signin extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			email: '',
    		password: ''
		} 
	}

	onemailEnter= (event) =>{
		this.setState({email: event.target.value})
	}

	onPasswordEnter = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmit =() => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response => response.json())
		.then(data => {
			if(data.id){
					this.props.onRouteChange('home');
					this.props.updateParent(data);
					console.log(data)
				}
			else{	this.props.onRouteChange('signin');}
		})
	}

	render() {
		
		return(	
			<article className="br2 ba --black-10 mv4 w-100 w-50-m shadow-5 w-25-l mw6 center">	
				<main className="pa5 black-80" >
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 center underline mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address" 
				        id="email-address" 
				        onChange = {this.onemailEnter}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				         className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				         type="password" 
				         name="password"  
				         id="password"
				         onChange = {this.onPasswordEnter} />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				       type="submit" 
				       value="Sign in" 
				       onClick = {this.onSubmit}/>
				    </div>
				    <div className="lh-copy mt3">
				      <a href="#0" className="f6 link dim black db" onClick = {() => this.props.onRouteChange('register')}>Register</a>
				    </div>
				  </div>
				</main>
		    </article>
		);
	}
}

export default Signin;