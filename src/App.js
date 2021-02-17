import React, { Component } from 'react';
import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent.js'
import MenuComponent from './components/MenuComponent.js'
import  TeamBoardComponent from './components/TeamBoard/TeamBoardComponent.js'
class App extends Component {
  render() {
    return (
      <div >
        <NavbarComponent/>
        <TeamBoardComponent/> 
      </div>
    );
  }
}

export default App;
