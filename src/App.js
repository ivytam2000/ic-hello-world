import './App.css';
import Tabs from "./components/Tabs"; 
import { useState, useEffect } from "react";
import { SubjectForm } from './subjects/SubjectForm';
import { SummaryPage } from './subjects/SummaryPage';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { ExamDateForm } from "./components/exams/ExamDateForm"
import { ExamDateTable } from "./components/exams/ExamDateTable"

import { LectureForm } from "./components/lectures/LectureForm"
import { LectureTable, printDuration } from "./components/lectures/LectureTable"

const LOCAL_STORAGE_KEY = "ic-hello-world-43-todos"
function App() {

  const [subjects, setSubjects] = useState([])
  const [todos,setTodos] = useState([])
  const [lecs, setLecs] = useState([])
  const [examDates, setExamDates] = useState([])
  const [cat, setCat] = useState(-1);

  useEffect(()=>{
    const storageDates = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageDates){
      setExamDates(storageDates);
    }
  }, [])
  
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(examDates))
  }, [examDates])

  const getClassName = (index) => {
    if (index === cat) {
      return "form-content-active";
    }
    return "form-content";
  }

  /** Common Functions */
  function toggleComplete(id, dataset, setData){
    setData(
      dataset.map(d =>{
        if(d.id === id){
          return{
            ...d,
            completed: !d.completed
          }
        }
      })
    )
  }

  function addData(data, dataSet, setData) {
    setData([data, ...dataSet]);
  }

  function removeData(id, dataset, setData) {
    setData(dataset.filter(d => d.id !== id));
  }

  /** ToDos */

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleCompleteToDo(id) {
    toggleComplete(id, todos, setTodos);
  }

  /** Lectures */

  function addLec(lec) {
    addData(lec, lecs, setLecs);
  }

  function removeLec(id) {
    removeData(id, lecs, setLecs);
  }

  function toggleWatch(id) {
    toggleComplete(id, lecs, setLecs);
  }

  /** Exams */

  function addExamDate(examDate) {
    addData(examDate, examDates, setExamDates);
  }

  function removeExamDate(id) {
    removeData(id, examDates, setExamDates);
  }

  return (
    <div>
      <div className="header"><h1 className="h-text">Revision Progress Tracker</h1></div>
      {/*-- BUTTONS FOR FORMS --*/}
      <div className="form-buttons">
        <button onClick={() => setCat(0)}>+ Lecture</button>
        <button onClick={() => setCat(1)}>+ Tutorial</button>
        <button onClick={() => setCat(2)}>+ Past Year Paper</button>
      </div>
      {/*-- FORMS --*/}
      <div className={getClassName(0)}> LECTURE TO WATCH:<p></p>
      <TodoForm addTodo={addTodo}/> 
      <TodoList 
        todos={todos} 
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}/></div>
      <div className={getClassName(1)}> 
      TUTORIALS TO DO: <p></p>
      <TodoForm addTodo={addTodo}/> 
      <TodoList 
        todos={todos} 
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}/></div>
      <div className={getClassName(2)}> PAST YEARS TO DO: <p></p>
      <TodoForm addTodo={addTodo}/> 
      <TodoList 
        todos={todos} 
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}/></div>
      <Tabs>
        {/* Exam Dates */}
        <div label="Exam Dates">
          <ExamDateForm addExamDate={addExamDate} />
          <ExamDateTable examDates={examDates} removeExamDate={removeExamDate} />
        </div>
        {/* Lectures */}
        <div label="Lectures">
          <LectureForm addLec={addLec}/> 
          <LectureTable 
            lecs={lecs} 
            toggleWatch={toggleWatch}
            removeLec={removeLec} />
        </div>
        {/* Tutorials */}
        <div label = "Tutorial"></div>
      </Tabs>
      
    </div>
  );

}

export default App;
