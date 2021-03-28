import '../../subjects/Form.css';
import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function PPForm({addPP}) {

  const [pp, setPP] = useState({
    id: "", 
    subject: "",
    ppName:"",
    questions: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    setPP({ ...pp, id: uuidv4()})
    if (pp.subject.trim()) {
      addPP(pp);
      // reset task input
      setPP({...pp, title : ""})
    }
  }


  function inputHandler(e) { 
    setPP({ ...pp, [e.target.name]: e.target.value});
  }

  return (
    <form className="pp-form" onSubmit={handleSubmit}>
      <div className="add-entry">
      <TextField
        type="text"
        name="subject"
        placeholder="Subject"
        value={pp.subject}
        onChange={inputHandler}
      />
      <TextField
        type="text"
        name="ppName"
        placeholder = "Past Paper Year"
        value={pp.ppName}
        onChange={inputHandler}
      />
      <TextField
        type="text"
        name="questions"
        placeholder = "Notes"
        value={pp.questions}
        onChange={inputHandler}
      />
      <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}