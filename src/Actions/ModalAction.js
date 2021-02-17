export const setDescription=(payload)=>{

    return {
        type:'setDescription',
        payload:payload
    }
}

export const setPriority = (payload) =>{
    return {
        type:'setPriority',
        payload:payload
    }
}

export const setPlannedDate=(payload)=>{
        return{
            type:'setPlannedDate',
            payload:payload
        }
}

export const setStatus=(payload)=>{
    return{
        type:'setStatus',
        payload:payload
    }
}

export const setAssignee=(payload)=>{
    return{
        type:'setAssignee',
        payload:payload
    }
}
export const setAttachment = (file) =>{
        return{
            type:'setAttachment',
            payload:file,
        }
}

