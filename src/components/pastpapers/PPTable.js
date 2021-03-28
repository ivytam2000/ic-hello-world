import '../../subjects/Form.css'
import React from "react"

export function PPTable({pps, removePP}){

  function renderTableData() {
    return pps.map((pp) => {
      const {id, subject,ppName,questions} = pp
      return (
              <tr key={id}>
                <td>{subject}</td>
                <td>{ppName}</td>
                <td>{questions}</td>
                <td><button onClick={() => removePP(id)}>×</button></td>
              </tr>
             )
    })
  }

  return (
    <div>
      <h1 className="table-titles" id='title'>Past Papers</h1>
      <table className="pps" id='pps'>

      <tbody>
          <tr>
            <td><b>Subject</b></td>
            <td><b>Past Paper Year</b></td>
            <td><b>Notes</b></td>
            <td><b>Delete</b></td>
          </tr>
          {renderTableData()}
        </tbody>

      </table>
    </div>
  )
}
