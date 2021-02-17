// import initialState from './initialState.js'
// import TeamDataUpdater from '.././Shared/TeamDataUpdater.js'

// const UpdateModal=(state=initialState,action)=>{
        
//         // const listName,taskName,parameter,value
//         switch(action.type){
//             case 'setDescription':  
//             payload=action.payload
//              list=updater(state,payload.listName,payload.taskName,payload.parameter,payload.value)
//                 return{
//                 ...state,
//                 TeamBoardLists:[...list]
                
//           }

//           case 'setPriority': 
//           console.log(state)
//           payload=action.payload
//           list=updater(state,payload.listName,payload.taskName,payload.parameter,payload.value)

//           return{
//               ...state,
//               TeamBoardLists:[...list]
//           }

//           case 'setPlannedDate':
//             payload=action.payload
//              list=updater(state,payload.listName,payload.taskName,payload.parameter,payload.value)

//               return{
//                   ...state,
//                   TeamBoardLists:[...list]
//               }
            
//           case 'setAttachment' :
//             let file =state.files.length!==0 ? ( [...state.files, action.payload] )  : ([action.payload])

//               return{
//                   ...state,
//                   files:[...file]
//               }   

//           default:return initialState
//         }

// }

// export default UpdateModal

//                 // DescriptionContent:action.payload,
//                 // isDescriptionContentSet:true ,
//                 // updateContent:false
