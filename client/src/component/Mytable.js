import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Employeedata from './Employeedata'

class Mytable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            employee: [
                {
                    id: 1,
                    fullName: 'Prathamesh Jadhav',
                    email:'prathameshjc@gmail.com',
                    joiningdate: '05/08/2020',
                    // post: 'Solution Analyst',
                    // project:'Employee Management Application',
                    // frontend: 'Reactjs',
                    // backend:'Nodejs',
                    // database:'PostgreSQL'
                },
                {
                    id: 2,
                    fullName: 'Sahil Mulla',
                    email:'sahilmullaiq@gmail.com',
                    joiningdate: '01/08/2020',
                    // post: 'Solution Analyst',
                    // frontend: 'Vue Js',
                    // backend:'Flask',
                    // database:'SQLite'
                },
                {
                    id: 3,
                    fullName: 'Saee Dharasurkar',
                    email:'saeedharasurkar@gmail.com',
                    joiningdate: '10/08/2020',
                    // post: 'Solution Analyst',
                    // frontend: 'Reactjs',
                    // backend:'Phoenix',
                    // database:'Neo4j'
                },{
                    id: 4,
                    fullName: 'Shahrukh Attar',
                    email:'shahrukhattar224@gmail.com',
                    joiningdate: '05/08/2020',
                    // post: 'Solution Analyst',
                    // frontend: 'Web2Py',
                    // backend:'Web2Py',
                    // database:'SQLite'
                },
                {
                    id: 5,
                    fullName: 'Sanskruti Gupta',
                    email:'sanskrutis.gupta16@gmail.com',
                    joiningdate: '05/08/2020',
                    // post: 'Solution Analyst',
                    // frontend: 'Angular 8',
                    // backend:'Django',
                    // database:'PostgreySQL'
                },
                {
                    id: 6,
                    fullName: 'Shubham Sonawane',
                    email:'sonawaneshubham22@gmail.com',
                    joiningdate: '10/08/2020',
                    // post: 'Solution Analyst',
                    // frontend: 'Angular 8',
                    // backend:'Django',
                    // database:'MandoDB'
                },
        
            ]
        }
    }
    showData=()=>{
      const elist=employee.map(empl=><Employeedata key={empl.id} empl={empl}/>)
        return(
          <div>
            {elist}
          </div>
        )
        
    }
    renderTableData() {
        return this.state.employee.map((emp, index) => {
           const { id, fullName, email, joiningdate } = emp //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td><Link onClick={this.showData}>{fullName}</Link></td>
                 <td>{email}</td>
                 <td>{joiningdate}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.employee[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
    render() {
        return (
            <div>
                <h1>React Dynamic Table</h1>
                <table id='employee'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
            </div>
        )
    }
}

export default Mytable
