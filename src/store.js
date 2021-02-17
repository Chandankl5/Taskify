import { createStore , combineReducers} from 'redux'
// import UpdateModal  from './Reducers/ModalReducer.js'
import TeamBoard from './Reducers/TeamBoardReducer.js'

const rootReducer=combineReducers({ teamBoard:TeamBoard})
const store=createStore(rootReducer)

// store.subscribe(()=>console.log(store.getState()))
export default store