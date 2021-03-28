import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function SubjectForm({addSubject}) {

  const [subject, setSubject] = useState({
    id: "", 
    name: ""
  });

  function handleSubjInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setSubject({ ...subject, name: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (subject.name.trim()) {
      addSubject({ ...subject, id: uuidv4() });
      setSubject({ ...subject, name: "" });
    }
  }

  return (
    <form className="subject-form" onSubmit={handleSubmit}>
      <TextField
        label="Subject Name"
        type="text"
        name="Subject Name"
        value={subject.name}
        onChange={handleSubjInputChange}
      />
      <Button type="submit">Add Subject</Button>
    </form>
  );
}