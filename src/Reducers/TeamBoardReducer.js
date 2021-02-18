import initialState from './initialState.js'
import TeamDataUpdater from '.././Shared/TeamDataUpdater.js'

const TeamBoard=(state=initialState,action)=>{
    let tasks,payload;

    switch(action.type){
        case 'setTeamBoardData':
        return{
            ...state,
            TeamData:action.payload
        }


        case 'composeCard':
            const obj=new TeamDataUpdater(state.TeamData.Tasks)
            tasks= obj.addCard(action.payload.id,action.payload.status,action.payload.composeTitle)
            return {
                ...state,
                TeamData:{...state.TeamData,Tasks:tasks}
            }

        case 'setDescription':  
        payload=action.payload
        tasks=updater(state.TeamData.Tasks,payload.taskName,payload.parameter,payload.value)
            return{
            ...state,
            TeamData:{...state.TeamData,Tasks:tasks}
            
      }

      case 'setPriority': 
      payload=action.payload
      tasks=updater(state.TeamData.Tasks,payload.taskName,payload.parameter,payload.value)
      return{
      ...state,
      TeamData:{...state.TeamData,Tasks:tasks}
      
        }

      case 'setPlannedDate':
        payload=action.payload
        tasks=updater(state.TeamData.Tasks,payload.taskName,payload.parameter,payload.value)
        return{
        ...state,
        TeamData:{...state.TeamData,Tasks:tasks}
        
        }
  
      case 'setStatus':
        payload=action.payload

        tasks=updater(state.TeamData.Tasks,payload.taskName,payload.parameter,payload.value)
        return{
        ...state,
        TeamData:{...state.TeamData,Tasks:tasks}
        
        }

    case 'setAssignee':
        payload=action.payload
        tasks=updater(state.TeamData.Tasks,payload.taskName,payload.parameter,payload.value)
        return{
        ...state,
        TeamData:{...state.TeamData,Tasks:tasks}

        } 

    case 'setAttachment' :
        let file =state.files.length!==0 ? ( [...state.files, action.payload] )  : ([action.payload])

          return{
              ...state,
              files:[...file]
          }   

        default:return state
    }
}

function updater(Tasks,taskName,parameter,value){
    const obj=new TeamDataUpdater(Tasks)

    return obj.update(taskName,parameter,value)


}

export default TeamBoard