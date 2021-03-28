import React, {useState} from "react"
export function SummaryPage({lecs}) {

  // const [lecs, setLecs] = useState({
  //   id:"", 
  //   lecTitle:"",
  //   time:"", 
  //   completed: false
  // })

  function renderTableData() {
    return lecs.map((lec) => {
      const { id, lecTitle, time, completed } = lec
      return (
              <tr key={id}>
                <td>{id}</td>
                <td>{lecTitle}</td>
                <td>{time}</td>
                <td>{completed}</td>
              </tr>
             )
    })
  }

  return (
    <div>
      <h1 id='title'>React Dynamic Table</h1>
      <table id='students'>
          <tbody>
            {renderTableData()}
          </tbody>
      </table>
    </div>
  )
}

