import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './components/Routes.js'
import './App.css';
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
    return (
      <div >
        <BrowserRouter>
          {/* <Redirect to="/user/dashboard" />: <Login setUserID={this.setUserID}  setIsUserLoggedIn ={ this.setIsUserLoggedIn} hasUserRegistered={this.state.hasUserRegistered}/> }/> */}
          <Route path="*" component={Routes} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
