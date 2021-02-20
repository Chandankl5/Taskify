import React from 'react';
import loginSVG from '../../login.svg';
import axios from 'axios';
import { Redirect  ,withRouter} from 'react-router-dom';
import "../login/style.module.css"
import Cookies from 'js-cookie'


 class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            user_id: ''
        }
    }

    submit(e) {
        e.preventDefault();
        const { name, password } = this.state;

        let formdata = new FormData()
        formdata.append('name', name)
        formdata.append('password', password)


        const url = 'https://flask-jwt-pro.herokuapp.com/login'
        axios({
            url: url,
            method: 'POST',
            withCredentials: true,
            headers: {'Content-Type': 'application/json'},
            data: formdata
        }).then(response =>  {
            console.log(JSON.stringify(response.data));
            Cookies.set('userID',''+response.data.id+'')
            this.props.history.push('/user/dashboard')
        }).catch( err => {
            console.log(err.message);
            // this.setState({redirect: false})
            alert("Incorrect username/password");
        })
    }

    render() {

        return (
            <div className="base-container " ref={ this.props.containerRef }>
                <div className="content" style={{marginTop:"30px"}}>
                    <div className="image">
                    <div className="header w3-center">Login</div>
                        <img src={loginSVG} alt=""/>
                    </div>
                    <form className="form" onSubmit={(e) => this.submit(e)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" onChange={e => this.setState({name: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={e => this.setState({password: e.target.value})} placeholder="Password" required/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default withRouter(Login)