 import { ADD_TODO, DEL_TODO,EDIT_TODO, REMOVE_ALL } from "./actionTypes";
 export const  addTodo = (data)=>{
  return {type:ADD_TODO,
         payload:data,}  
 }
 export const delTodo = (id)=>{
     return {type: DEL_TODO,id}
 }
 export const editTodo = (data)=>{
     return {type: EDIT_TODO, payload: data}
 }
 
 export const removeAll = ()=>{
     return {type: REMOVE_ALL}
 }
