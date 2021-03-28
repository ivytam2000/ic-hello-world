import React, {useState} from "react"
import { v4 as uuidv4 } from 'uuid'

export function LectureForm({addLec}){
  const[lec, setLec] = useState({
      id:"",
      subject:"",
      topic:"",
      hours:0,
      mins:0,
      watched:false
  })

  function handleTaskInputChange(e){
      setLec({...lec, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
      e.preventDefault();
      if(lec.title.trim()){
         addLec({...lec, id: uuidv4()})
         // reset task input
         setLec({...lec, title : ""})
      }
  }

  return(
    <form className="lecture-form" onSubmit={handleSubmit}>
      <div className="add-entry">
      <TextField
        type="text"
        name="subject"
        placeholder="Subject"
        value={lec.subject}
        onChange={handleTaskInputChange}
      />
      <TextField
        type="text"
        name="topic"
        placeholder="Lecture Topic"
        value={lec.topic}
        onChange={handleTaskInputChange}
      />
      <TextField
        type="number"
        name="hours"
        placeholder="Hours"
        value={lec.hours}
        onChange={handleTaskInputChange}
      />
      <TextField
        type="number"
        name="mins"
        placeholder="Minutes"
        value={lec.mins}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}