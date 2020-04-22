import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Logo from './components/Logos/Logo.js';
import SignOut from './components/SignOut/SignOut.js';
import Header from './components/Header/Header.js';
import Rank from './components/Rank/Rank.js';
import InputLink from './components/InputLink/InputLink.js';
import Result from './components/Result/Result.js';
import './App.css';


const app = new Clarifai.App({
  apiKey: '90ee53e5901f478ba513e2ecf69ea73c'
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imgUrl: '', 
      box: [],
    }
  }

  calculateFaceLocation = (data) => {
      const clarifaiFace = data.outputs[0].data.regions;
      // console.log(clarifaiFace[0])
      // [i].region_info.bounding_box;
      let measureObj;
      let array = [];
      clarifaiFace.forEach((each, i) => {
        const boundingBox = each.region_info.bounding_box;
      const image = document.getElementById('inputImg');
      const width = image.width;
      const height = Number(image.height);
      measureObj = {
        leftCol: boundingBox.left_col * width,
        topRow: boundingBox.top_row * height,
        rightCol: width - (boundingBox.right_col * width), 
        bottomRow: height - (boundingBox.bottom_row * height)
      }
      array.push(measureObj)
    })
    return array;
  }

  // calculateFaceLocation2 = (data) => {
  //   const clarifaiFace = data.outputs[0].data.regions[1].region_info.bounding_box;
  //   // console.log(clarifaiFace)
  //   const image = document.getElementById('inputImg');
  //   const width = image.width;
  //   const height = Number(image.height);
  //   return {
  //     leftCol: clarifaiFace.left_col * width,
  //     topRow: clarifaiFace.top_row * height,
  //     rightCol: width - (clarifaiFace.right_col * width), 
  //     bottomRow: height - (clarifaiFace.bottom_row * height)
  //   }
  // }


  displayFace = (box) => {
    // console.log(box.length)
    // console.log(box)
    
    let joined = this.state.box.concat(box);
    console.log(joined)
    this.setState({ box: joined })
    // console.log(this.state.box)

  }

  onInputChange = (event)=> {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    this.setState({imgUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then((response) =>{
      const data = this.calculateFaceLocation(response)
      for(let i = 0; i < data.length; i++){
        this.displayFace(data[i])
      }
    })
    // .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header>
            <Logo />
            <SignOut />
        </Header>
        <Rank />
        <InputLink onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        
        <Result 
        box={this.state.box} 
        imgUrl={this.state.imgUrl}/>
      
      </div>
    );
  }
}

export default App;

