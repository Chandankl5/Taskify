import React from 'react'

export function Priority(props) {
    
    if(props.priority==="")
    return null 
    return (
        <div>
        <div><h3>Priority</h3></div>
        <p>{props.priority}</p>
        </div>
    
    )
}


export default Priority