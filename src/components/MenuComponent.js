import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import TeamDataBuilder from '../Shared/TeamDataBuilder.js'
import { setTeamBoardData } from '../Actions/TeamBoardAction.js'

class MenuComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state={isSortByUserButtonSet:false , isSortByPriorityButtonSet:false , isSortByDateButtonSet:false}
  }

  sortByPriority=()=>{

    this.setState({isSortByUserButtonSet:false ,isSortByPriorityButtonSet:true ,isSortByDateButtonSet:false})

    axios({
        method:"POST",
        url:"https://flask-jwt-pro.herokuapp.com/admin/team/"+this.props.TeamData.id+"/sort",
        data:{"type":"priority"}
    })
    .then((response)=>{
        const {id,description,lists,members}=response.data
        let Tasks=TeamDataBuilder(lists)
        this.props.setTeamBoardData({id:id,name:description,Tasks:Tasks,members:members })

    })
    .catch((err)=>{
    })
  }

  sortByDate=()=>{

    this.setState({isSortByUserButtonSet:false ,isSortByPriorityButtonSet:false ,isSortByDateButtonSet:true})

    axios({
        method:"POST",
        url:"https://flask-jwt-pro.herokuapp.com/admin/team/"+this.props.TeamData.id+"/sort",
        data:{"type":"planneddate"}
    })
    .then((response)=>{
        console.log(response)
        const {id,description,lists,members}=response.data
        let Tasks=TeamDataBuilder(lists)
        this.props.setTeamBoardData({id:id,name:description,Tasks:Tasks,members:members })

    })
    .catch((err)=>{

    })
}

  sortByUser=()=>{
      
        this.setState({isSortByUserButtonSet:true ,isSortByPriorityButtonSet:false ,isSortByDateButtonSet:false})

      axios({
          method:"POST",
          url:"https://flask-jwt-pro.herokuapp.com/admin/team/"+this.props.TeamData.id+"/sort",
          data:{"type":"assigne_id" ,"id":""}
      })
  }

  clearSortResults=()=>{
    this.setState({isSortByUserButtonSet:false ,isSortByPriorityButtonSet:false ,isSortByDateButtonSet:false})


    axios({
        method:"GET",
        url:"https://flask-jwt-pro.herokuapp.com/admin/team/"+this.props.TeamData.id+"",
    })
    .then((response)=>{
        console.log(response)
        const {id,description,lists,members}=response.data
        let Tasks=TeamDataBuilder(lists)
        this.props.setTeamBoardData({id:id,name:description,Tasks:Tasks,members:members })

    })
    .catch((err)=>{

    })



   }
  render() {

    const list_style={
        marginLeft:"8x",
        marginRight:"8px"
      }
  
    let clear_btn=(this.state.isSortByDateButtonSet || this.state.isSortByPriorityButtonSet || this.state.isSortByUserButtonSet) ?(
        <button onClick={this.clearSortResults} className="btn btn-success " href="#"> Clear results</button>

    ) :(null)

    const {isSortByUserButtonSet,isSortByDateButtonSet ,isSortByPriorityButtonSet}=this.state
    let user_btn_class=isSortByUserButtonSet ? "btn nav-link w3-teal" : "btn nav-link w3-text-black"
    let priority_btn_class=isSortByPriorityButtonSet? " btn nav-link w3-teal":"btn nav-link w3-text-black "
    let date_btn_class=isSortByDateButtonSet?"btn nav-link w3-teal":"btn nav-link  w3-text-black"

    return (
      <nav className="navbar navbar-expand-md navbar-light">
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="">
          <ul className="navbar-nav">
            <li className="nav-item  " style={{border:"2px solid white" ,borderRadius:"8px", marginLeft:"8px" ,marginRight:"8px"}}>
              <a className=" nav-link w3-text-white " href="#"> { this.props.TeamData.name}</a>
            </li>
            <li className="nav-item nav-list w3-white" style={list_style}>
              <button onClick={this.sortByUser}  className={user_btn_class} href="#"> Only my tasks</button>
            </li>
            <li className="nav-item nav-list w3-white " style={list_style}>
              <button onClick={this.sortByPriority } className={priority_btn_class}  href="#"> Sort By Priority</button>
            </li>
            <li className="nav-item nav-list w3-white" style={list_style}>
              <button onClick={this.sortByDate } className={date_btn_class} href="#"> Sort By Due Date</button>
            </li>
   
            {clear_btn}

          </ul>
          </div>
        </div>
      </nav>


    )
  }
}

const mapStateToProps=(state)=>{
    return{
    TeamData:state.teamBoard.TeamData
   }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        setTeamBoardData:(TeamBoardData)=>dispatch(setTeamBoardData(TeamBoardData))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MenuComponent)
