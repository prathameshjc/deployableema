import React from 'react';

const Listjc = (props) => {
 return(
    // Using Props handleClick as callback function
    <div>
          
                <tr>
                        <td>Company : {props.getData.company}</td>
                        <td>Contact : {props.getData.contact}</td>
                        <td>Country : {props.getData.country}</td>
                </tr>
                {/* <tr onClick={()=> props.handleClick(props.rowData)}>
                        <td> {props.rowData.company} </td>
                        <td> {props.rowData.contact} </td>
                        <td> {props.rowData.country} </td>
                </tr> */}
          
    </div>
      
 );
}
export default Listjc;