import React, { useState, useEffect } from 'react';
import { Link ,withRouter} from 'react-router-dom'
import axios from 'axios';
import './dashstyle.module.css';
import NavbarComponent from '../Navbar/NavbarComponent.js'
import Cookies from 'js-cookie'

 class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {teams: []}
        // console.log(props.match.params.user_id);
        // Cookies.set('name','chandan')
    }
    // {"name": "team1"},{"name": "team2"},{"name": "team3"},{"name": "team3"},{"name": "team4"}
    componentDidMount() {
        // console.log('ye')
        axios({
            method: 'GET',
            url:'https://flask-jwt-pro.herokuapp.com/teams',
                withCredentials: true,
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            this.setState({teams:[...res.data]})
            // console.log(res.data);
                
          }).catch(err => {
          })
    }

    render() {
        const { teams } = this.state;
        const card = teams.map(team => 
            <div key={team.name}  onClick={()=> {  Cookies.remove('teamID') 
            Cookies.remove('teamName')
            Cookies.set('teamID',''+team.id+'')     
            Cookies.set('teamName',''+team.name+'')
             this.props.history.push('/user/board')} }  >
                <div className="card card-item" style={{cursor: "pointer"}}>
                    <div className="card-title">
                        <h5>{team.name}</h5>
                    </div>
                </div>
            </div>
        )

        return (
            <div>
                <NavbarComponent />
                <div className="dashboard">
                    <h2 style={{color: "whitesmoke", fontWeight: 700, fontSize: 2.5+"rem"}}>Teams</h2>
                    <div className="username">
                        <h1 style={{color: "black", fontSize: 1.75+"rem", textAlign: 'center'}}>Welcome {Cookies.get('name')}</h1>
                    </div>
                    <div className="container cardList">
                        {card}
                    </div>
                </div>
                
            </div>
            
        );
    }
}


export default withRouter(Dashboard)