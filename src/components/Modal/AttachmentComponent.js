import React from 'react'

function Attachments(props) {
    
    const files=props.files
    if(files.length===0)
    return null 

    return(
        files.map((file)=>
            <div id="attachments" className="container">
            <h3><label htmlFor="Attachments">Attachments</label></h3>
            <div className="row">
                <div className="col-md-3"><div className="file-thumb"><p style={{paddingTop:"40px"}}>.{file.name.split(".")[1].toUpperCase()}</p></div></div>
                <div className="col-md-9">
                    <div>{file.name}</div>
                    <div>{file.size/1000} KB</div>
                </div>
            </div>
                </div>
        
        )

    )

}

export default Attachments