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
      imgUrl: ''
    }
  }

  onInputChange = (event)=> {
    this.setState({input: event.target.value});
  }



  onSubmit = () => {
    this.setState({imgUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    },
    function(err) {
      // there was an error
    }
  );
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
        <Result imgUrl={this.state.imgUrl}/>
      </div>
    );
  }
}

export default App;

