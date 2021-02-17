import TaskBuilder from './TaskBuilder.js'

class TeamDataUpdater {
    
    constructor(Tasks){
        this.Tasks=[...Tasks]
        // console.log('before',this.lists)

    }

    addCard(id,status,composeTitle){

        // this.lists.map((list)=>{
        //     if(list.name===status){

                const builder=new TaskBuilder()
                const Task=  builder.setName(composeTitle)
                                    .setDescription()
                                    .setPriority()
                                    .setStatus(status)
                                    .setPlannedDate()
                                    .setID(id)
                                    .build()
    
        //         list.Tasks=[...list.Tasks,Task]
        //     }

        // })

        return [...this.Tasks,Task]
    }
    

    update(TaskName,parameter,value){
        // console.log(listName,TaskName,parameter,value)
        this.Tasks.forEach((task)=>{
            
            // if(list.name===listName){
            //     list.Tasks.forEach((task)=>{
                    
                    if(task.name===TaskName){
                        task[parameter]=value
                         
                        // if(parameter==='assignee'){
                        //     task[parameter]=[value]
                        // }
                        if(parameter==='description'){
                            task["isDescriptionContentSet"]=true 
                            task["updateContent"]=false

                        }
                        
                    }})
                    
        //         })
        //     }

        // })
        return this.Tasks
    }  
}

export default TeamDataUpdater