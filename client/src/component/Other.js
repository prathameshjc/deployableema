import React from 'react';

let id = 0;
function createData(option, type) {
  id += 1;
  return { id, option, type };
}

let rows = [
  createData('Setting One', 'Private'),
  createData('Setting Two', 'Public'),
  createData('Setting Three', 'Group'),
  createData('Setting Four', 'Private'),
];

export default class Other extends React.Component {

    // edit = (rows) => { 
    //     rows.map((row, key) => (
    //         console.log({row.type})
    //     ))
    // }
    
  render() {
    return(
      <table>
        <tr>
          <th>ID</th>
          <th>Option</th>
          <th>Type</th>
        </tr>  
      {rows.map((row, key) => (
        <tr key={row.id}>
          <td onClick={() => this.edit(row)}>{row.option}</td>
          <td>{row.type}</td>
        </tr>
      ))}
      </table>
    )
  }

}