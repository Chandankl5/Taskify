import axios from 'axios'
import React from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import styles from './style.module.css'
import Cookies from 'js-cookie'
class NavbarComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
    console.log(styles)
  }

  logout=()=>{

    axios({
      method:"POST",
      url:"https://flask-jwt-pro.herokuapp.com/logout",
      withCredentials:true
    })
    .then((response)=>{
      console.log(response)
      Cookies.remove('userID')
      Cookies.remove('name')
      this.props.history.push('/logout')
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  render() {

    const list_style={
      marginLeft:"8x",
      marginRight:"8px"
    }

    return (
      <nav className="navbar navbar-expand-md sticky-top ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          {/* <ul className="navbar-nav">
            <li className="nav-item nav-list" style={list_style}>
              <a className="nav-link" href="#"><i className="fa fa-home fa-lg" aria-hidden="true"></i></a>
            </li>
            <li className="nav-item nav-list" style={list_style}>
              <a className="nav-link" href="#"><i className="fa fa-columns fa-lg" aria-hidden="true"></i></a>
            </li>
          </ul> */}
          <ul className="navbar-nav logo mr-auto navbar-dark "  >
            <a className="navbar-brand" href="#">Taskify</a>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item dropdown nav-list-profile">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"><i className="fa fa-user-circle" style={{fontSize:"2.2rem"}}></i></a>
              <div className="dropdown-menu">
                <a className="dropdown-item" style={{cursor: "pointer"}} onClick={this.logout}>Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>


    )
  }
}
export default withRouter(NavbarComponent)
