import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import AutoCompleteComponent from './AutoCompleteComponent.js'
import Description from './DescriptionComponent.js' 
import Priority from './PriorityComponent.js'
import PlannedDate from './PlannedDateComponent.js'
import Attachments from './AttachmentComponent.js'
// import Status from './StatusComponent.js'

import { setPriority,setPlannedDate ,setAttachment ,setStatus } from '../../Actions/ModalAction.js'


class ModalComponent extends React.Component
{
    constructor(props){
        super(props)
        this.state = { status:'' ,files:[] }

    }

    // uploadFile=(e)=>{

    //     let file =this.state.files.length!==0 ? ( [...this.state.files,e.target.files[0]] )  : ([e.target.files[0]])
    //     this.setState({files:[...file]})      
          
    // }

    onchangePriority=(e)=>{
        const {name}=this.props.info
        this.props.setPriority({taskName:name,parameter:"priority",value:e.target.value})
        this.updateTask("priority",e.target.value)
    }

    onchangePlannedDate=(e)=>{
        const {name}=this.props.info
        this.props.setPlannedDate({taskName:name,parameter:"plannedDate",value:e.target.value})
        this.updateTask("planneddate",e.target.value)
    }

    onchangeStatus=(e)=>{
        this.setState({status:e.target.value})
        this.updateTask("status",e.target.value)
    }

    closeModal=()=>{
        const {name}=this.props.info

        if(this.state.status!=='')
        this.props.setStatus({taskName:name,parameter:"status",value:this.state.status})
    }
    updateTask=(parameter,value)=>{
        let data={}
        data[parameter]=value
        axios({
            method:"PUT",
            url:"https://flask-jwt-pro.herokuapp.com/task/"+this.props.info.id+"",
            data:data,
            withCredentials:true
        })
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render()
    {
        const {id,name,description,priority,status,plannedDate,isDescriptionContentSet,updateContent ,assignee}=this.props.info

        return(
            <div className="container">            
            <div className="modal fade" id={this.props.id}>  
                <div className="modal-dialog modal-lg">
                    <div className="modal-content" style={{ backgroundColor: "#F6F6F6" }}>

                        <div className="modal-header">
                            <h4 className="modal-title">{name}</h4>
                            <button type="button" onClick={this.closeModal} className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-8">
                                    <PlannedDate plannedDate={plannedDate} />

                                    <Priority  priority={priority}/>
                                    {/* <Status status={status}/> */}

                                    <Description id={id} taskName={name} DescriptionContent={description} isContentSet={isDescriptionContentSet} updateContent={updateContent} />

                                    <div className="">
                                         <h3><label htmlFor="reporter">Reporter</label></h3>
                                         <input type="text" className="form-control" readOnly value="Chandan" />
                                     </div>

                                    <div id="assignee">    
                                    <h3><label htmlFor="assignee">Assignee</label></h3>                        
                                    <AutoCompleteComponent id={id} taskName={name} assigneeName={assignee} members={this.props.members}/>
                                     </div>  

                                     {/* <Attachments files={this.state.files} />   */}
                                </div>
                                <div className="col-md-4">
                                    <div className="priority" >
                                        <h3><label htmlFor="priority">Priority</label></h3>
                                <select  defaultValue={priority} name="priority" onChange={this.onchangePriority} className="form-control">
                                         <option  value="Major">Major</option>
                                    <option value="Normal">Normal</option>
                                            <option value="Minor">Minor</option>
                                        </select>
                                    </div>
                                    <div className="priority">
                                        <h3>Planned Date</h3>
                                        <input type="date" onChange={this.onchangePlannedDate} className="form-control" />
                                    </div>
                                    <div className="priority">
                                        <h3><label htmlFor="Status">Status</label></h3>
                                        <select defaultValue={status}  name="Status" id="" onChange={this.onchangeStatus} className="form-control">
                                            <option value="Todo">To Do</option>
                                            <option value="InProgress">In Progress</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    </div>        
                                    {/* <div id="attachment">
                                        <h3><label htmlFor="Attachment">Attachment</label></h3>
                                        <input type="file" onChange={(e)=> this.props.setAttachment(e.target.files[0])}  />
                                     </div> */}

                                    </div>
                            </div>
                        </div>

                        {/* <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Save</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>

        )
    }
    
}


const mapStateToProps=(state)=>{
    return {
        members:state.teamBoard.TeamData.members,
        dummy:state.teamBoard.TeamData.Tasks
        
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setPriority:(payload)=>dispatch(setPriority(payload)) ,
        setPlannedDate:(payload)=>dispatch(setPlannedDate(payload)) ,
        setStatus:(payload)=>dispatch(setStatus(payload)),
        setAttachment : (file) => dispatch(setAttachment(file)) ,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalComponent)