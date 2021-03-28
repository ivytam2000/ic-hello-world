import '../../subjects/Form.css';
import React from "react"

export function LectureTable({lecs, toggleWatch, removeLec}){

  function renderTableData() {
    return lecs.map((lec) => {
      const { id, subject, topic, hours, mins, watched } = lec
      return (
              <tr key={id}>
                <td>
                  <input type="checkbox" onClick={() => toggleWatch(id)}/>
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
            <td><b>Delete</b></td>
          </tr>
          {renderTableData()}
        </tbody>

      </table>
    </div>
  )
}

export function printDuration(hours, mins) {
  let res = "";
  if (hours > 0) {
    res += `${hours} hours `;
  }
  if (mins > 0) {
    res += `${mins} minutes`;
  }
  return res;
}

	