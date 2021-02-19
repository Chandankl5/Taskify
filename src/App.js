import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './components/Routes.js'
import './App.css';
import axios from 'axios'
import Dashboard from './components/dashboard/dashboard.jsx'
import  TeamBoardComponent from './components/TeamBoard/TeamBoardComponent.js'
import HomePage from './components/indexPage/index.jsx';
import {Register} from './components/login/register.jsx'
import  Login from './components/login/login.jsx';

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

  // requireAuth=async(nextState, replace, next)=>{

  //       alert(a)
  //       next();


  //   })



  
  render() {
    return (
      <div >
        <BrowserRouter>
          {/* <Redirect to="/user/dashboard" />: <Login setUserID={this.setUserID}  setIsUserLoggedIn ={ this.setIsUserLoggedIn} hasUserRegistered={this.state.hasUserRegistered}/> }/> */}
          {/* <Route path="*" render={()=> <Routes/> } /> */}
          <Route  path ="/register/:inviteID" component={Register} />
          <Route  path="/login"  component={Login}/>
        <Route exact path="/"  component={HomePage}/>
          <Route  path="/user/dashboard"  component={Dashboard} />
        <Route  path="/user/board"  component={TeamBoardComponent} /> 

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
