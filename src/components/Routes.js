import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect  } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './dashboard/dashboard.jsx'
import  TeamBoardComponent from './TeamBoard/TeamBoardComponent.js'
import HomePage from './indexPage/index.jsx';
import {Register} from './login/register.jsx'
import  Login from './login/login.jsx';

class Routes extends Component{

    constructor(props){
        super(props)

    }

    
     render= ()=> {

        // let a= await axios({
        //     method:"GET",
        //     url:"https://flask-jwt-pro.herokuapp.com/user",
        //     withCredentials:true
        //   })
        //   .then((response)=>{
        //     console.log(response) 
        //     // this.setState({isUserLoggedIn:true})
        //     return true
        //   })
        //   .catch(err=>{
        //       console.log("Not loogedin")
        //       return false
        //   })



        const isUserLoggedIn=false
        console.log(isUserLoggedIn)

        return(

         <div>
        {
        isUserLoggedIn ? 
        <div>
        <Route exact path="/user/dashboard"  component={Dashboard} />
        <Route exact path="/user/board"  component={TeamBoardComponent} /> 
         <Route path="*"  component={Dashboard} />
         </div>	 :
        <div>	
        <Route exact path="/login"  component={Login}/>
        <Route exact path="/"  component={HomePage}/>
        <Route exact path ="/register:inviteID" component={Register} />
        
        <Route path="*" component={Login}  />

        </div>    
         }
        
      </div>
        )



    }
}

export default Routes