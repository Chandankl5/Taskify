import  React    from 'react'
import {connect} from 'react-redux'
import DescriptionContent from './DescriptionContent.js'
import TextArea from './TextArea.js'

import { setDescription } from '../../Actions/ModalAction.js'

class Description extends React.Component
{
    constructor(props){
        super(props)
        this.state={  updateContent:props.updateContent}
    }   



    updateContent=(value)=>{
        this.setState({updateContent:value})
    }

    render()
    {   
        let description=((this.props.isContentSet) && (!this.state.updateContent) ) ?( <DescriptionContent content={this.props.DescriptionContent} updateContent={this.updateContent} />) 
        : ( <TextArea id={this.props.id} taskName={this.props.taskName} setDescription={this.props.setDescription} content={this.props.DescriptionContent} updateContent={this.updateContent} /> )
        return(

            <div id="description">                                          
            <h3>Description</h3>
            {description}
          </div>

        )
    }
}

// const mapStateToProps=(state)=>{
//     return{
//         isContentSet:state.task.isDescriptionContentSet,
//         DescriptionContent:state.task.DescriptionContent,
//         updateContent:state.task.updateContent

//     }
// }

const mapDispatchToProps=(dispatch)=>{
    return{
        setDescription:(content)=>dispatch(setDescription(content))
    }
}


export default connect(null,mapDispatchToProps)(Description)