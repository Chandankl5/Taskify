import React, { useState, useEffect } from 'react';
import { Link ,withRouter} from 'react-router-dom'
import axios from 'axios';
import './dashstyle.css';
// import NavbarComponent from '../navbar/NavbarComponent';

 class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {teams: []}
        // console.log(props.match.params.user_id);
    }
    // {"name": "team1"},{"name": "team2"},{"name": "team3"},{"name": "team3"},{"name": "team4"}
    componentDidMount() {
        axios({
            method: 'GET',
            url:'https://flask-jwt-pro.herokuapp.com/teams',
            withCredentials: true,
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            this.setState({teams:[...res.data]})
            console.log(res.data);
                
          }).catch(err => {
          })
    }

    render() {
        const { teams } = this.state;
        let url = "https://taskifywebapp.herokuapp.com/user/board"
        const card = teams.map(team => 
            <a key={team.name} href={url}>
                <div className="card card-item">
                    <div className="card-title">
                        <h5>{team.name}</h5>
                    </div>
                </div>
            </a>
        )

        return (
            <div>
                {/* <NavbarComponent /> */}
                <div className="dashboard">
                    <h2 style={{color: "whitesmoke"}}>Teams</h2>
                    <div className="container cardList">
                        {card}
                    </div>
                </div>
                
            </div>
            
        );
    }
}


export default Dashboard