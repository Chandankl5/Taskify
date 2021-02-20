import React, { Component } from 'react';
import { BrowserRouter, Route ,Redirect,Switch} from 'react-router-dom';
import Routes from './components/Routes.js'
import './App.css';
import axios from 'axios'
import Dashboard from './components/dashboard/dashboard.jsx'
import  TeamBoardComponent from './components/TeamBoard/TeamBoardComponent.js'
import HomePage from './components/indexPage/index.jsx';
import {Register} from './components/login/register.jsx'
import  Login from './components/login/login.jsx';
import Cookies from 'js-cookie'
class App extends Component {
  constructor(props){
    super(props)
    this.state={isUserLoggedIn:false , hasUserRegistered:false ,userID:""}
  }

  setHasUserRegistered=()=>{
    this.setState({hasUserRegistered:true})
  }
  setIsUserLoggedIn=()=>{
    this.setState({isUserLoggedIn:true})
  }

  setUserID=(userID)=>{
    this.setState({userID:userID})
  }
  
 
  render() {
    // const isUserLoggedIn=Cookies.get('userID')
      
    return (
        <BrowserRouter>
          {/* <Redirect to="/user/dashboard" />: <Login setUserID={this.setUserID}  setIsUserLoggedIn ={ this.setIsUserLoggedIn} hasUserRegistered={this.state.hasUserRegistered}/> }/> */}
          <Route path="*" render={()=> <Routes/> } />
          {/* <Route path="/user/dashboard"  component={Dashboard} /> */}

        
        </BrowserRouter>
    );
  }
}

export default App;
