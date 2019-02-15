import React, { Component } from 'react';
import Clarifai from 'clarifai'
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import Signin from './components/SignIn/Signin';
import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ImageBox from './components/FaceBox/ImageBox';
import './App.css';

const app = new Clarifai.App({
  apiKey: '48953e91ee4b4096849ff9b38d3c68a0'
});

const initialState = {
      input: '',
      imageLink : '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: '0',
        doj: ''
      }
    }
    
class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState
    this.updateValueFromChild = this.updateValueFromChild.bind(this)
  } 

  updateValueFromChild(data) {
    console.log(data)
    this.setState({user: {name: data.name, entries: data.entries}})
  }

  faceLocation = (data) =>{
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('imagge');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      topRow: face.top_row*height,
      leftCol: face.left_col*width,
      bottomRow: height - (face.bottom_row*height),
      rightCol: width - (face.right_col*width)
    }
  }

  onRouteChange = (value) =>{
     value === 'home'
     ? this.setState({isSignedIn: true})
     : this.setState(initialState)
     
     this.setState({route: value})
  }

  displayBox = (box)=>{ 
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onClick = (event) =>{
    this.setState({imageLink: this.state.input})
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
    .then(response =>{
      if(response){
        fetch('http://localhost:3000/profile/image', {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
        })
        .then(response => response.json())
        .then(user => {
          this.setState({user :{
             entries: user.entries
          }
          })
        })
      }
      this.displayBox(this.faceLocation(response))})
    }
  

  loadUser = (data) =>{
    this.setState({
      user:{
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        entries: data.entries,
        doj: data.doj
      }
    })
  }

  render() {
    return (
      <div>
       <Particles className = 'particles'/>
       <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        <Logo />
         {this.state.route === 'home'
         ? <div>
             <Rank  entries={this.state.user.entries} name={this.state.user.name}/>
             <ImageLinkForm onInputChange = {this.onInputChange} onClick={this.onClick}/>
             <ImageBox imageLink= {this.state.imageLink} box={this.state.box}/>
            </div>
         : (this.state.route ==='register'
            ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Signin updateParent = {this.updateValueFromChild} onRouteChange= {this.onRouteChange}/>)
        }  
      </div>
    );
  }
}

export default App;
