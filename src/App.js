import React from 'react';
import Logo from './components/Logos/Logo.js';
import SignOut from './components/SignOut/SignOut.js';
import Header from './components/Header/Header.js';
import Rank from './components/Rank/Rank.js';
import InputLink from './components/InputLink/InputLink.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <Logo />
        <SignOut />
     </Header>
      <Rank />
     <InputLink />
    {/*  <Result /> */}
    </div>
  );
}

export default App;

