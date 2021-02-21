import TaskBuilder from './TaskBuilder.js'

const TeamDataBuilder=(lists)=>{
    let Tasks=[] 
    lists.forEach((list)=>{
        list.tasks.forEach(( {id,title,status,planneddate,description,priority,assigne_id,reporter_name})=>{

            const builder=new TaskBuilder()
            const Task=  builder.setName(title)
                                .setDescription(description)
                                .setPriority(priority)
                                .setStatus(status)
                                .setPlannedDate(planneddate)
                                .setID(id)
                                .setAssignee(assigne_id)
                                .setReporter(reporter_name)
                                .build()

            Tasks.push(Task)
        })

        
    })

    return Tasks
}



export default TeamDataBuilder