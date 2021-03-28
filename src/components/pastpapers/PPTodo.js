import React from "react"

function PPTodo({ppTodo, toggleCompletePPToDo, removePPTodo}){
    function handleCheckboxClick(){
        toggleCompletePPToDo(ppTodo.id)
    }

    function handleRemoveClick(){
        removePPTodo(ppTodo.id)
    }

    return(
        <div style = {{display: "flex"}}>
        <input type="checkbox" onClick={handleCheckboxClick}/>
        <li
        style={{
            color: "blue",
            textDecoration: ppTodo.completed ? "line-through" : null,
            listStyle: "none"
        }}>{ppTodo.task}</li>
        <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default PPTodo;