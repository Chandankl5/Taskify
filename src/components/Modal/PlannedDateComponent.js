import React from 'react'

function PlannedDate(props) {
    if(props.plannedDate===null)
    return null

    return (
        <div>
        <div><h6>PLANNED DATE</h6> </div>
        <div>{props.plannedDate}</div>
         </div>

         )
}

export default PlannedDate