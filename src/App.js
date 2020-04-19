import React, { Component } from 'react';
import Logo from './components/Logos/Logo.js';
import SignOut from './components/SignOut/SignOut.js';
import Header from './components/Header/Header.js';
import Rank from './components/Rank/Rank.js';
import InputLink from './components/InputLink/InputLink.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event)=> {
    console.log(event.target.value);
  }



  onSubmit = () => {
    console.log("blick")
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
        {/*  <Result /> */}
      </div>
    );
  }
}

export default App;

