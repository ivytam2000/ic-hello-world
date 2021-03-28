import './Form.css';
import React from "react"

export function LectureTable({lectures, toggleWatch, removeLecture}){

  function printDuration(hours, mins) {
    let res = "";
    if (hours > 0) {
      res += `${hours} hours `;
    }
    if (mins > 0) {
      res += `${mins} minutes`;
    }
    return res;
  }

  function renderTableData() {
    return examDates.map((examDate) => {
      const { id, subject, topic, hours, mins, watched } = examDate
      return (
              <tr key={id}>
                <td>
                  <input type="checkbox" onClick={() => toggleComplete(id)}/>
                </td>
                <td>{subject}</td>
                <td>{topic}</td>
                <td>{printDuration(hours, mins)}</td>
                <td>
                  <button onClick={() => removeLec(id)}>×</button>
                </td>
              </tr>
             )
    })
  }

  return (
    <div>
      <h1 className="table-titles" id='title'>Lectures</h1>
      <table className="lecture-table" id='lectures'>

        <tbody>
          <tr>
            <td><b>Watched</b></td>
            <td><b>Subject</b></td>
            <td><b>Topic</b></td>
            <td><b>Duration</b></td>
            <td><b>Mins</b></td>
            <td><b>Delete</b></td>
          </tr>
          {renderTableData()}
        </tbody>

      </table>
    </div>
  )
}

	