import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import  TeamBoardComponent from './components/TeamBoard/TeamBoardComponent.js'
class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
        <Route path="/user/:user_ID/team/:team_ID" component={TeamBoardComponent}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
