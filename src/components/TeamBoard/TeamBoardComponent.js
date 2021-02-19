import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import TaskListComponent from '../TaskList/TaskListComponent.js'
import NavbarComponent from '../Navbar/NavbarComponent.js'
import MenuComponent from '../MenuComponent.js'
import './style.css'

import TeamDataBuilder from '../../Shared/TeamDataBuilder.js'

import { setTeamBoardData } from '../../Actions/TeamBoardAction.js'

class TeamBoardComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  listCompose:false ,listTitle:"" ,isListEmty:false}
    }

    componentDidMount=()=>{
        
        axios({
            method:"GET",
            // url:"https://flask-jwt-pro.herokuapp.com/team/"+this.props.match.params.team_ID+"",
            url:"https://flask-jwt-pro.herokuapp.com/team/1",

            withCredentials:true
        })
        .then((response)=>{
            // console.log(response.data.lists)
            const {id,description,lists,members}=response.data
            let Tasks=TeamDataBuilder(lists)
            this.props.setTeamBoardData({id:id,name:description,Tasks:Tasks,members:members })
        })

    }

    addList=()=>
    {
        this.setState({listCompose:true})

    }
    composeList=()=>
    {
        this.setState({listCompose:false})

    }

    render() {
        // let listComposer = this.state.listCompose ? (
        //     <form action="" >
        //         <div className="form-group add-list-button">
        //             <textarea className="form-control" rows="2" id="comment" placeholder="Enter a title for this List.." onChange={(event)=>this.setState({listTitle:event.target.value})}></textarea>
        //         </div>
        //         <div className="composer-buttons" >
        //             <span><button className="btn btn-success" onClick={this.composeList}>Add List</button></span>
        //             <span><button className="btn" >X</button></span></div>
        //     </form>

        // ) : (
        // <div className="col-md-2" >
        //     <div className="add-list-button"  onClick={this.addList}>
        // <span><i className="fa fa-plus fa-lg" aria-hidden="true"></i></span>
        // <span>Add new list</span>
        // </div>
        // </div>
        //         )

        let TodoTasks=[],InProgressTasks=[],CompletedTasks=[]
        if(this.props.TeamData.Tasks){

        this.props.TeamData.Tasks.forEach(task => {
            if(task.status==='Todo') TodoTasks.push(task)

            else if(task.status==='InProgress') InProgressTasks.push(task)

            else if(task.status==='Completed') CompletedTasks.push(task)
            
        }) 
    }  


             
        return (

            <div>
                <NavbarComponent teamID={this.props.match.params.team_ID}/>
                <MenuComponent userID={this.props.match.params.user_ID} teamID={this.props.match.params.team_ID}/>
            <div className="container-fluid">
                <div className="row">
                    <TaskListComponent title="Todo" tasks={TodoTasks} key={1} teamID={this.props.match.params.team_ID} />
                    <TaskListComponent title="InProgress" tasks={InProgressTasks} key={2} teamID={this.props.match.params.team_ID} />
                    <TaskListComponent title="Completed" tasks={CompletedTasks} key={3} teamID={this.props.match.params.team_ID} />
                    {/* {listComposer} */}
                </div>
             </div>
            </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(TeamBoardComponent)
