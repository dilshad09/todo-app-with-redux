import React, {  useState } from "react"
import './Todo.css'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, delTodo,editTodo, removeAll } from "../redux/actions"
import { v4 as uuidv4 } from 'uuid';

export const Todo = ()=>{
   const [inputData, setInputData] = useState("")
   const list = useSelector((store)=>store.list)
  
   const dispatch = useDispatch()
    return <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="todo-icon.png" alt="" />
                <figcaption>Add your Todo List Here ✌</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" value={inputData } placeholder="✍ Add Items..." className="form-control" onChange={(e)=>{
                    setInputData(e.target.value)
                    
                }}/>
                 <i className="fa fa-plus add-btn" onClick={()=>{
                     dispatch(addTodo({id:uuidv4(), title:inputData}))
                     setInputData("")
                     }}></i>
                 {/* {toggleBtn ?   <i className="far fa-edit add-btn" onClick={()=>{addItems()}}></i> : <i className="fa fa-plus add-btn" onClick={()=>{addItems()}}></i>} */}
            </div>
            {/* show our items */}

            <div className="showItems">
               {list.map((el)=>{
                   return(
                    <div className="eachItem" key={el.id}>
                    <h3>{el.title}</h3>
                    <div className="todo-btn">
                    <i className="far fa-edit add-btn"></i>
                    <i className="fa fa-trash-alt add-btn" onClick={()=>dispatch(delTodo(el.id))} ></i>
                    </div>
                </div>
                   )
               })}
                    
                 
            </div>
            {/* remove all btn*/}
            <div className="showItems">
                <button className="btn effect04" data-sm-link-text="Remove All" onClick={()=>dispatch(removeAll())}><span>CHECK LIST</span></button>
            </div>
        </div>
    </div>
    
    </>
}