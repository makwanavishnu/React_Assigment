import React from 'react'


export default function Todos({task, deleteTodo, editTodo, toggleComplete}) {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={()=> toggleComplete(task.id)} >{task.task}</p>
        <div>
        <button className="edit-icon"  onClick={()=> editTodo(task.id)}>Edit</button>
        &nbsp;  
        <button className="delete-icon"  onClick={()=> deleteTodo(task.id)}>Delete</button>
        </div>
    </div>
  )
}
