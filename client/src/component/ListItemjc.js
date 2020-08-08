import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom';

// import Listjc from './Listjc'
const ListItemjc = (props) => {
 return(
    // Using Props handleClick as callback function
    <div>
          <table>
                <tr>
                        <td>Company</td>
                        <td>Contact</td>
                        <td>Country</td>
                </tr>
                <tr onClick={()=> props.handleClick(props.rowData)}>
                        <Router><td><Link to={'Listjc'}> {props.rowData.company}</Link> </td></Router>
                        <td> {props.rowData.contact} </td>
                        <td> {props.rowData.country} </td>
                </tr>
          </table>
    </div>
      //     <div onClick={()=> props.handleClick(props.rowData)}>

      //           <p> {props.rowData.company} </p>
      //           <p> {props.rowData.contact} </p>
      //           <p> {props.rowData.country} </p>
      //      </div>
 );
}
export default ListItemjc;