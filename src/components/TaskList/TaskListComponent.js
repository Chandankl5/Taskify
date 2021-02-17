import React from 'react'
import axios from 'axios'
import './style.css'
import TaskViewComponent from '../Task/TaskComponent.js'
import {connect} from 'react-redux'
import {composeCard} from '../../Actions/TeamBoardAction.js'

class TaskListComponent extends React.Component 
{
    constructor(props) 
    {   
        super(props)
        this.state = { tasks:this.props.tasks, taskCompose:false,composeTitle:""}
    }
    addCard = () => {
        this.setState({taskCompose:true})
    }

    composeCard=()=>{
        this.setState({taskCompose:false})

        axios({
            method:"POST",
            url:"https://flask-jwt-pro.herokuapp.com/admin/createtask/"+this.props.teamID+"",
            data:{status:this.props.title,title:this.state.composeTitle,priority:"Normal"},
            withCredentials:true
        })
        .then((response)=>{
            this.props.composeCard({id:response.data.id,status:this.props.title,composeTitle:this.state.composeTitle})

        }).catch((err)=>{
            console.log(err)
        })

    }
    oncomposeTitleChange=(e)=>{
        this.setState({composeTitle:e.target.value})
    }

    render()
    {
        let taskComposer = this.state.taskCompose ? (<TaskComposer composeCard={this.composeCard} oncomposeTitleChange={this.oncomposeTitleChange} /> ) : ((this.props.title==='Todo') ? <AddCardButton addCard={this.addCard} /> :(null))
        
        let tasks= this.props.tasks.map((task)=> <TaskViewComponent listName={this.props.title} info={task} key={task.name}  /> )
        return(
            <div className="col-md-2">
            <div className="card " id="card">
                <div className="card__header" ><p>{this.props.title}</p></div>
                    <div className="card-body">
                    {tasks}
                    {taskComposer}
                    </div>
            </div> 
            </div>

        )
    }

}   

function AddCardButton(props)
{

    return (
        <div className="add-task-button" onClick={()=>props.addCard()}>
        <span><i className="fa fa-plus fa-lg" aria-hidden="true"></i></span>
        <span>Add another card</span>
    </div>

    )
}

function TaskComposer(props){
    return(
        <form action="" >
        <div className="form-group add-task-button">
            <textarea className="form-control" rows="2" id="comment" placeholder="Enter a title for this card.." onChange={(event)=> props.oncomposeTitleChange(event)}></textarea>
        </div>
        <div className="composer-buttons">
            <span><button className="btn btn-success" onClick={()=>props.composeCard()}>Add card</button></span>
            <span><button className="btn" >X</button></span></div>
    </form>

    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        composeCard:(payload)=>dispatch(composeCard(payload))
    }
}
export default connect(null,mapDispatchToProps)(TaskListComponent)