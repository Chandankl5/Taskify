
export const setTeamBoardData=(TeamBoardData)=>{
    return {
        type:'setTeamBoardData',
        payload:TeamBoardData
    }
}

export const composeCard=(payload)=>{
    return{
        type:'composeCard',
        payload:payload
    }
}

