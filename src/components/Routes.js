import React, { Component } from 'react';
import { BrowserRouter, Route ,Redirect,Switch} from 'react-router-dom';
import axios from 'axios';
import Dashboard from './dashboard/dashboard.jsx'
import  TeamBoardComponent from './TeamBoard/TeamBoardComponent.js'
import HomePage from './indexPage/index.jsx';
import {Register} from './login/register.jsx'
import  Login from './login/login.jsx';
import Cookies from 'js-cookie'
class Routes extends Component{

    constructor(props){
        super(props)

    }
    
     render(){

        const isUserLoggedIn=Cookies.get('userID')
        console.log(isUserLoggedIn)
        return(
            <BrowserRouter>
            {
                isUserLoggedIn ? 
                <Switch>
                 <Route  exact path="/user/dashboard"  component={Dashboard} />
                <Route exact path="/user/board"  component={TeamBoardComponent} /> 
                 <Route path="/logout" render={()=><Redirect to="/login" />}   />
                 <Route path="*"  render={()=> <Redirect to="/user/dashboard" />} />
        
                 </Switch>	 :
                <Switch>	
                <Route exact path="/login"  component={Login}/>
                <Route exact path="/"  component={HomePage}/>
                <Route exact path="/register/:inviteID" component={Register} />    
                <Route path="*" render={()=> <Redirect to="/login" /> }  />
        
                </Switch>    
                 }

                 </BrowserRouter>
        
        )



    }
}

export default Routes