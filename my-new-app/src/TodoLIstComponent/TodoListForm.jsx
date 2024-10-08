import React, { useState } from 'react'

function TodoListForm({addTodo}) {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value){
            addTodo(value);
            setValue(" ");
        }
    }
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
        <input 
        type="text"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        className="todo-input"
        placeholder="Add Somthing to your List" />
        <button type="submit" className="todo-btn">Add</button>
    </form>
  )
}

export default TodoListForm