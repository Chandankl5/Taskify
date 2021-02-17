class Task{
    constructor(id,name,description,priority='Normal',plannedDate,status,assignee=[{name:"Not Assigned"}],reporter='',isDescriptionContentSet=false,updateContent=false){
        this.id=id
        this.name=name
        this.description=description
        this.priority=priority
        this.plannedDate=plannedDate
        this.status=status
        this.assignee=assignee
        this.reporter=reporter
        // this.files=[...files]
        this.isDescriptionContentSet=isDescriptionContentSet
        this.updateContent=updateContent
    }
}




export default Task