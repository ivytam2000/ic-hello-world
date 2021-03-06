import React from "react"

function Todo({todo, toggleCompleteToDo, removeTodo}){
    function handleCheckboxClick(){
        toggleCompleteToDo(todo.id)
    }

    function handleRemoveClick(){
        removeTodo(todo.id)
    }

    return(
        <div style = {{display: "flex"}}>
        <input type="checkbox" onClick={handleCheckboxClick}/>
        <li
        style={{
            color: "blue",
            textDecoration: todo.completed ? "line-through" : null,
            listStyle: "none"
        }}>{todo.task}</li>
        <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Todo;