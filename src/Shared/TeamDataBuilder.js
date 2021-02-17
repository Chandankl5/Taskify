import TaskBuilder from './TaskBuilder.js'

const TeamDataBuilder=(lists)=>{
    let Tasks=[] 
    lists.forEach((list)=>{
        list.tasks.forEach(( {id,title,status,planneddate,description,priority,assigne_id})=>{

            const builder=new TaskBuilder()
            const Task=  builder.setName(title)
                                .setDescription(description)
                                .setPriority(priority)
                                .setStatus(status)
                                .setPlannedDate(planneddate)
                                .setID(id)
                                .setAssignee(assigne_id)
                                .build()

            Tasks.push(Task)
        })

        // Lists.push(new List(name,Tasks))
        
    })

    return Tasks
}


// var ob= new UpdateTeamData([{name:"todo",Tasks:[{name:"task1", priority:"High"}]}])
// console.log(ob.update("todo","task1","priority","Low"))

export default TeamDataBuilder