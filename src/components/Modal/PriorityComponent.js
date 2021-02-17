import React from 'react'

export function Priority(props) {
    
    if(props.priority==="")
    return null 
   const m={Major:"w3-text-red" ,Normal:"w3-text-orange" , Minor:"w3-text-green"}
    let class_name=m[props.priority]

    return (
        <div>
        <div><h3>Priority</h3></div>
        <div >
            <h6 className={class_name} >{props.priority}</h6>
        </div>
        </div>
    
    )
}


export default Priority