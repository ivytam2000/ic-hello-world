import './Form.css';
import React from "react"

export function ExamDateTable({examDates, removeExamDate}){

  function renderTableData() {
    return examDates.map((examDate) => {
      const { id, subject, lectures, date, time } = examDate
      return (
              <tr key={id}>
                <td>{subject}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td><button onClick={() => removeExamDate(id)}>×</button></td>
              </tr>
             )
    })
  }

  return (
    <div>
      <h1 className="table-titles" id='title'>Exam Dates</h1>
      <table className="exam-table" id='exam-date'>

        <tbody>
          <tr>
            <td><b>Subject</b></td>
            <td><b>Date</b></td>
            <td><b>Time</b></td>
            <td><b>Delete</b></td>
          </tr>
          {renderTableData()}
        </tbody>

      </table>
    </div>
  )
}

	