import React from 'react'

export function Status(props) {
    
    if(props.status==="")
    return null 
    return (
        <div>
        <div><h3>Status</h3></div>
        <p>{props.status}</p>
        </div>
    
    )
}


export default Status