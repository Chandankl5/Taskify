import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './components/indexPage/index';
import { Login, Register } from './components/login/index';
import  Dashboard  from './components/dashboard/dashboard';
import './App.css';
import  TeamBoardComponent from './components/TeamBoard/TeamBoardComponent.js'
class App extends Component {
  constructor(props){
    super(props)
    this.state={isUserLoggedIn:false}
  }
  render() {
    return (
      <div >
        <BrowserRouter>
				<Route exact path='/' component={HomePage} />
				<Route exact path="/login" component={Login}/>
				<Route exact path='/register/:invite_id' component={Register} />
				<Route exact path='/dashboard/:user_id' component={Dashboard} />
        <Route path="/user/:user_ID/team/:team_ID" component={TeamBoardComponent}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
