import React from 'react'

function DescriptionContent(props) {
    

    return( <p onClick={()=>{props.updateContent(true)}}>{props.content}</p>)
}

export default DescriptionContent