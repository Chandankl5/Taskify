import React, { useState ,useCallback } from 'react';
import {useDispatch} from 'react-redux'
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { setAssignee } from '../../Actions/ModalAction.js'

const AutoCompleteComponent = (props) => {

  const [selected, setSelected] = useState([]);
  
  // console.log(props.assigneeName)
  const dispatch=useDispatch()

    // let data=["virat","rohith" ,"rohith" ,"rohith" ,"rohith" ,"rohith" ,"rohith" ,"rohith" ,"rohith" ,"rohith" ,"rohith" ,"rohith","chandan" ]

    const onAssigneeChange=useCallback((e)=>{

      setSelected(e)
      if(e.length!=0){
        dispatch(setAssignee({taskName:props.taskName,parameter:"assignee",value:e}))

      let data={}
      data["assigne_id"]=e[0].id

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

      }



    })

  return (
    <Typeahead
      id="basic-example"
      multiple
      onChange={ (e) => onAssigneeChange(e)}
      options={props.members}
      placeholder="Choose a state..."
      selected={selected}
      maxResults={1} 
      labelKey="name"
    />
  );
};

export default AutoCompleteComponent