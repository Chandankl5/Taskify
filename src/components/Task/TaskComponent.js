import React from 'react';
import ModalComponent from '../Modal/ModalComponent.js'
import {connect} from 'react-redux'
import './style.css'
class TaskViewComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }


    render() {
        let date=null,month=null
        const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const {name,priority,plannedDate}=this.props.info
        const modalID=name.split(" ").join("")
        const colorMap={Major:"red" ,Normal:"orange" ,Minor:"green"}
        const color=colorMap[priority]

        if(plannedDate) {

        var d = new Date(plannedDate);
         month=months[d.getMonth()]
        date=d.getDate()

        }

        const assignee= (this.props.info.assignee[0].name!=='Not Assigned')?(
            <span className="w3-blue" 
            style={{marginRight:"2px" ,marginLeft:"2px" ,paddingLeft:"2px" ,paddingRight:"2px" ,paddingTop:"5px" ,paddingBottom:"5px"}}> {this.props.info.assignee[0].name} </span>
        ):(
            <span><i className="fa fa-user-circle"></i></span>
        )  

     return (
            <div style={{cursor:"pointer"}}>
                <div className="task-list" data-toggle="modal" data-target={'#'+modalID}>
                    <p >{name}</p>

                <div className="row">
                    <div className="col-md-2"> <i className="bi bi-arrow-up " style={{color:""+color+"" ,fontSize:"1.5rem"}}   > </i></div>
                    <div className="col-md-10"> <span style={{marginRight:"2px" ,marginLeft:"2px"}}> <small>{month} {date} </small> </span> {assignee}
                     </div>
                       </div>
                </div>
                
                <ModalComponent listName={this.props.listName} id={modalID} info={this.props.info} key={this.props.info.name} />

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

