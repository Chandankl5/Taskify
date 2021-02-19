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
        this.state={isUserLoggedIn:false , hasUserRegistered:false ,userID:""}

    }

    componentDidMount= async()=>{

    //   var a= await new Promise( ( resolve,reject) =>{

    //     axios({
    //         method:"GET",
    //         url:"https://flask-jwt-pro.herokuapp.com/user",
    //         withCredentials:true
    //       })
    //       .then((response)=>{
    //         console.log(response) 
    //         // this.setState({isUserLoggedIn:true})
    //         resolve(true)
    //       })
    //       .catch(err=>{
    //           console.log("Not loogedin")
    //           reject(false)
    //       })

    //   })

    //   alert(a)

      }

    render() {

        let isUs
      
        const isUserLoggedIn=this.state.isUserLoggedIn
        return(
            <div>
            {/* {
            isUserLoggedIn ?  */}
            <div>
            <Route exact path="/user/dashboard"  component={TeamBoardComponent} />
            <Route exact path="/user/board"  component={TeamBoardComponent} /> 
             {/* <Route path="*" render={()=> <Redirect to="/user/dashboard"/> } /> */}
             </div>	
            <div>			
            <Route exact path="/login"  component={Login}/>
            <Route exact path="/"  component={HomePage}/>
            <Route exact path ="/register:inviteID" component={Register} />
            
            {/* <Route path="*" render={()=> <Redirect to="/login"/> } /> */}

            </div>    
            {/* } */}
            
          </div>
          
              )

    }
}

export default Routes