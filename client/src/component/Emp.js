import React from 'react'
import './myform.css'
// import {Link} from 'react-router-dom'
// import Employeedata from './Employeedata'

const Emp=()=>{
    const employees=[
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
        },
        {
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
    
    
    // function rowSelect(event) {
    //     return(
    //     console.log('clicked',event)

    // function pushData() {
    //             const employee=employees.map(empl=><Employeedata empl={empl}/>)
    //             return(
    //                 <div>
                        
    //                 </div>
    //             )
    //   }

    // function fetchEmpDetails(index) {
        
    //     console.log(employees[index]);
        
    // } 
    
    const renderEmployee=(empl, index)=>{
        
        return(
            
            <tr key={index} >
                <td>{empl.id}</td>
                <td>
                  {empl.fullName}
                </td>
                <td>{empl.email}</td>
                <td>{empl.joiningdate}</td>
            </tr>
        )
    }
    
    
   

    return(
        <div className='emp'>
            
            <table className='border'>
                <thead>
                    <tr >
                        <th>Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Joining Date</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(renderEmployee)}
                </tbody>
            </table>
        </div>
    )
}

export default Emp