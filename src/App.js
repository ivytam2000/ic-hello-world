import './App.css';
import Tabs from "./components/Tabs"; 
import { useState, useEffect } from "react";
import { SubjectForm } from './subjects/SubjectForm';
import { SummaryPage } from './subjects/SummaryPage';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { ExamDateForm } from "./subjects/ExamDateForm"
import { ExamDateTable } from "./subjects/ExamDateTable"
import {TutorialForm} from "./components/tutorials/TutorialForm"
import {TutorialTable} from "./components/tutorials/TutorialTable"

const LOCAL_STORAGE_KEY = "ic-hello-world-43-todos"
function App() {

  const [todos,setTodos] = useState([])
  const [lecs, setLecs] = useState([])
  const [examDates, setExamDates] = useState([])
  const [tutorials, setTutorial] = useState([])
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

  function toggleComplete(id){
    setTodos(
      todos.map(todo =>{
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
      })
    )
  }

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  /** Lectures */

  function addLec(lec) {
    setLecs([lec, ...lecs])
  }

  function removeLec(id) {
    setLecs(lecs.filter(l => l.id !== id))
  }

  
  /** Exams */

  function addExamDate(examDate) {
    setExamDates([examDate, ...examDates])
  }

  function removeExamDate(id) {
    setExamDates(examDates.filter(ed => ed.id !== id));
  }

  const getClassName = (index) => {
    if (index === cat) {
      return "form-content-active";
    }
    return "form-content";
  }

  /** Tutorials */
  function addTutorial(tutorial){
    setTutorial([tutorial, ...tutorials]);
  }

  function removeTutorial(id){
    setTutorial(tutorials.filter(t=>t.id !==id));
  }

  return (
    <div>
      <div className="header"><h1 className="h-text">Revision Progress Tracker</h1></div>
      <div className="subject-add">
        {/* <SubjectForm addSubject={addSubject} /> */}
      </div>
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
          {/* <LectureForm addLec={addLec}/> 
          <LectureTable 
            lectures={lecs} 
            toggleComplete={toggleComplete}
            removeLecture={removeLec} /> */}
          {/*-- TODO: ADD LEC SUMMARY --*/}
        </div>
        <div label = "Tutorial">
          <TutorialForm addTutorial={addTutorial} />
          <TutorialTable tutorials={tutorials} removeTutorial={removeTutorial} />
        </div>
      </Tabs>
     
      

      {/*-- TABLE --*/}
      {/* <SummaryPage lecs={[{id:1, lecTitle:"hi", time:22, completed:false}]} /> */}


      {/*-- EXAM DATES --*/}
      
    </div>
  );

}

export default App;
