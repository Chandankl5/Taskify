import Task from './Task.js'


class TaskBuilder {

    setName(name){
        this.name=name
        return this
    }
    setID(id){
        this.id=id
        return this
    }

    setDescription(description){
        this.description=description
        return this
    }

    setPriority(priority){
        this.priority=priority
        return this
    }

    setStatus(status){
        this.status=status
        return this
    }

    setPlannedDate(plannedDate){
        this.plannedDate=plannedDate
        return this
    }

    setAssignee(assignee){
        if(assignee==null) {assignee=['h']}
        else{
        this.assignee=[assignee]
        }
        return this
    }

    setReporter(reporter){
        this.reporter=reporter
        return this
    }
    
    setFiles(files){
        this.files=[...files]
        return this
    }

    build(){
        return new Task(this.id,this.name,this.description,this.priority,this.plannedDate,this.status,this.assignee)
    }
}


export default TaskBuilder