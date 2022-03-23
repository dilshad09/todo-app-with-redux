import { ADD_TODO, DEL_TODO, EDIT_TODO , REMOVE_ALL} from "./actionTypes"
const init = {
    list:[]
}
export const todoReducer = (state=init, action)=>{
     switch(action.type){
         case ADD_TODO: return {...state, list:[...state.list, action.payload]}
         case DEL_TODO :
             const newList = state.list.filter((el)=>{
                  return el.id !== action.id
             })
             return {...state, list: newList}
        case REMOVE_ALL: return {...state, list:[]}
         default :
         return state;
     }
}