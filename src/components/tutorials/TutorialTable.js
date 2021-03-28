import '../../subjects/Form.css'
import React from "react"

export function TutorialTable({tutorials, removeTutorial}){

  function renderTableData() {
    return tutorials.map((tutorial) => {
      const {id, subject,tutorialName,questions} = tutorial
      return (
              <tr key={id}>
                <td>{subject}</td>
                <td>{tutorialName}</td>
                <td>{questions}</td>
                <td><button onClick={() => removeTutorial(id)}>×</button></td>
              </tr>
             )
    })
  }

  return (
    <div>
      <h1 className="table-titles" id='title'>Tutorials</h1>
      <table className="tutorials" id='tutorials'>

      <tbody>
          <tr>
            <td><b>Subject</b></td>
            <td><b>Tutorial</b></td>
            <td><b>No of Questions To Do</b></td>
            <td><b>Delete</b></td>
          </tr>
          {renderTableData()}
        </tbody>

      </table>
    </div>
  )
}
