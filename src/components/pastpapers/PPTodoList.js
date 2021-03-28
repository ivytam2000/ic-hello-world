import React from "react"
import TutTodo from "./PPTodo"

function PPTodoList({ppTodos, toggleCompletePPToDo, removePPTodo}){
  
    return(
        <ul>
            {ppTodos.map(ppTodo =>(
                <TutTodo
                key={ppTodo.id} 
                ppTodo={ppTodo} 
                toggleCompletePPToDo={toggleCompletePPToDo}
                removePPTodo = {removePPTodo}/>
            ))}
        </ul>
    )

}

export default PPTodoList;