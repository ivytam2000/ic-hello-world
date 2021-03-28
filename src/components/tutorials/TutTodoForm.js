import '../Components.css';
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import React, {useState} from "react"
import { v4 as uuidv4 } from 'uuid'

function TutTodoForm({addTutTodo}){
    const[tutTodo, setTutTodo] = useState({
        id:"",
        task: "",
        completed: false
    })

    function handleTaskInputChange(e){
        setTutTodo({...tutTodo, task: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        if(tutTodo.task.trim()){
           /* AudioDestinationNode({})*/
           addTutTodo({...tutTodo, id: uuidv4()})
           // reset task input
           setTutTodo({...tutTodo, task : ""})
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            name = "task"
            type = "text"
            value = {tutTodo.task}
            onChange={handleTaskInputChange}
            />
            <button className="submit-button" type = "submit">Submit</button>
        </form>
    )
}

export default TutTodoForm;