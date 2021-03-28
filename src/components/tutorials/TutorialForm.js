import '../Form.css';
import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function TutorialForm({addTutorial}) {

  const [tutorial, setTutorial] = useState({
    id: "", 
    subject: "",
    tutorial:"",
    questions: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    setExamDate({ ...tutorial, id: uuidv4()})
    if (tutorial.subject.trim()) {
      addTutorial(tutorial);
    }
  }


  function changeHandler(e) { 
    setTutorial({ ...tutorial, [e.target.name]: e.target.value});
  }

  return (
    <form className="tutorial-form" onSubmit={handleSubmit}>
      <div className="add-entry">
      <TextField
        type="text"
        name="subject"
        placeholder="Subject"
        value={tutorial.subject}
        onChange={changeHandler}
      />
      <TextField
        type="text"
        name="tutorial"
        value={tutorial.tutorial}
        onChange={changeHandler}
      />
      <TextField
        type="number"
        name="questions to do"
        value={tutorial.questions}
        onChange={changeHandler}
      />
      <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}