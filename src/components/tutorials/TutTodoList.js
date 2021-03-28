import React from "react"
import TutTodo from "./TutTodo"

function TutTodoList({tutTodos, toggleCompleteTutToDo, removeTutTodo}){
  
    return(
        <ul>
            {tutTodos.map(tutTodo =>(
                <TutTodo
                key={tutTodo.id} 
                tutTodo={tutTodo} 
                toggleCompleteTutToDo={toggleCompleteTutToDo}
                removeTutTodo = {removeTutTodo}/>
            ))}
        </ul>
    )

}

export default TutTodoList;