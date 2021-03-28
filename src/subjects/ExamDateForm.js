import './Form.css';
import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function ExamDateForm({addExamDate}) {

  const [examDate, setExamDate] = useState({
    id: "", 
    subject: "",
    lectures:"",
    date: "", 
    time: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    setExamDate({ ...examDate, id: uuidv4()})
    if (examDate.subject.trim()) {
      addExamDate(examDate);
    }
  }


  function changeHandler(e) { 
    setExamDate({ ...examDate, [e.target.name]: e.target.value});
  }

  return (
    <form className="subject-form" onSubmit={handleSubmit}>
      <div className="add-entry">
      <TextField
        type="text"
        name="subject"
        placeholder="Subject"
        value={examDate.subject}
        onChange={changeHandler}
      />
      <TextField
        type="date"
        name="date"
        value={examDate.date}
        onChange={changeHandler}
      />
      <TextField
        type="time"
        name="time"
        value={examDate.time}
        onChange={changeHandler}
      />
      <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}