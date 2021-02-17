import TeamBoard from "../Reducers/TeamBoardReducer"

export const setTeamBoardData=(TeamBoardData)=>{
    return {
        type:'setTeamBoardData',
        payload:TeamBoardData
    }
}

// export const setTeamBoardSortedData=(TeamBoardSortedData)=>{
//     return{
//         type:'setTeamBoardSortedData',
//         payload:TeamBoardSortedData
//     }
// }

export const composeCard=(payload)=>{
    return{
        type:'composeCard',
        payload:payload
    }
}

