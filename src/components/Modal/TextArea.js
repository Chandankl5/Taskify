import React, { useState ,useCallback} from 'react'
import axios from 'axios'

 function TextArea(props) {
    const[content,setContent]=useState("")

     const onTitleChange= useCallback(()=>{
        let data={}
        data["description"]=content

        props.updateContent(false)
        props.setDescription({taskName:props.taskName,parameter:"description",value:content})

        axios({
            method:"PUT",
            url:"https://flask-jwt-pro.herokuapp.com/task/"+props.id+"",
            data:data,
            withCredentials:true
        })
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })

     })

        return (
        <div>
        <textarea className="form-control"  rows="2" placeholder={(props.content==="")? ("Add a more detailed description.."):("")} defaultValue={props.content}  onChange={(e)=> setContent(e.target.value)} ></textarea>
        <button className="btn btn-success" onClick={onTitleChange} style={{marginTop:"10px"}} >Save</button>
        </div>

    )
}

export default TextArea