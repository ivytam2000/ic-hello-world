import '../Components.css';
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import React, {useState} from "react"
import { v4 as uuidv4 } from 'uuid'

function PPTodoForm({addPPTodo}){
    const[ppTodo, setPPTodo] = useState({
        id:"",
        task: "",
        completed: false
    })

    function handleTaskInputChange(e){
        setPPTodo({...ppTodo, task: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        if(ppTodo.task.trim()){
           /* AudioDestinationNode({})*/
           addPPTodo({...ppTodo, id: uuidv4()})
           // reset task input
           setPPTodo({...ppTodo, task : ""})
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            name = "task"
            type = "text"
            value = {ppTodo.task}
            onChange={handleTaskInputChange}
            />
            <button className="submit-button" type = "submit">Submit</button>
        </form>
    )
}

export default PPTodoForm;