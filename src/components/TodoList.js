import React from "react"
import Todo from "./Todo"

function TodoList({todos, toggleCompleteToDo, removeTodo}){
  
    return(
        <ul>
            {todos.map(todo =>(
                <Todo 
                key={todo.id} 
                todo={todo} 
                toggleCompleteToDo={toggleCompleteToDo}
                removeTodo = {removeTodo}/>
            ))}
        </ul>
    )

}

export default TodoList;