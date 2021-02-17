import React from 'react';
import ModalComponent from '../Modal/ModalComponent.js'
import {connect} from 'react-redux'
import './style.css'

class TaskViewComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }

    // static getDerivedStateFromProps(props,state) 
    // {
    //     return {title:props.title}
    // }

    componentDidUpdate=()=>{
        // if(this.props.info) {
            // console.log(this.props)
        // axios({
        //     method:"GET",
        //     url:"https://flask-jwt-pro.herokuapp.com/admin/user/"+this.props.tasks.assignee+""
        // })
        // .then((response)=>{
        //     console.log(response)
        // })

        // }

    }



    render() {
        const {name,priority,plannedDate}=this.props.info
        const colorMap={Major:"red" ,Normal:"orange" ,Minor:"green"}
        const color=colorMap[priority]
        var d = new Date(plannedDate);
        const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

        const assignee= (this.props.info.assignee[0].name!=='Not Assigned')?(
            <span className="w3-blue" 
            style={{marginRight:"2px" ,marginLeft:"2px" ,paddingLeft:"2px" ,paddingRight:"2px" ,paddingTop:"5px" ,paddingBottom:"5px"}}> {this.props.info.assignee[0].name} </span>
        ):(
            <span><i className="fa fa-user-circle"></i></span>
        )    
        console.log(assignee)
     return (
            <div>
                <div className="task-list" data-toggle="modal" data-target={'#'+name}>
                    <p >{name}</p>

                <div className="row">
                    <div className="col-md-2"> <i className="bi bi-arrow-up " style={{color:""+color+"" ,fontSize:"1.5rem"}}   > </i></div>
                    <div className="col-md-10"> <span style={{marginRight:"2px" ,marginLeft:"2px"}}> <small>{months[d.getMonth()]} {d.getDate()} </small> </span> {assignee}
                     </div>
                       </div>
                </div>
                
                <ModalComponent listName={this.props.listName} info={this.props.info} key={this.props.info.name} />

            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        data:state.teamBoard.TeamData
    }
}

export default connect(mapStateToProps,null )(TaskViewComponent)    

// export default TaskViewComponent