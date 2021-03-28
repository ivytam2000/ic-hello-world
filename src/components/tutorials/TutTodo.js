import React from "react"

function TutTodo({tutTodo, toggleCompleteTutToDo, removeTutTodo}){
    function handleCheckboxClick(){
        toggleCompleteTutToDo(tutTodo.id)
    }

    function handleRemoveClick(){
        removeTutTodo(tutTodo.id)
    }

    return(
        <div style = {{display: "flex"}}>
        <input type="checkbox" onClick={handleCheckboxClick}/>
        <li
        style={{
            color: "blue",
            textDecoration: tutTodo.completed ? "line-through" : null,
            listStyle: "none"
        }}>{tutTodo.task}</li>
        <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default TutTodo;