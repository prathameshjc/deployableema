import React, { Component } from 'react'
import axios from 'axios'
export class AxiosTable extends Component {
    state={
        persons:[]
    }
  //   componentDidMount(){
  //     axios.get('http://localhost:8080/empdetails')
  //   .then(res => {
  //     const persons = res.data;
  //     this.setState(prevState => { persons: [...prevState.persons, persons] });
  //   })
  // }
   
    componentDidMount(){
        axios.get('http://localhost:8080/notes')
      .then(res => {
        const persons = res.data;
        console.log(persons)
        this.setState({ persons });
      })
    }
    
    //this is working code
    // componentDidMount () {
    //   axios.get("http://localhost:8080/notes").then(response => {
    //       console.log(response);
    //     })
    // }
    // componentDidMount(){
    //   axios.get('http://localhost:8080/notes')
    //   .then(json => console.log(json))
    // }
    render() {
      // console.log(this.state);
        return (
            <div className="App">
            <div className="left">
            <table className="table table-hover table-dark">
             <tbody>
             <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Email</th>
               
             </tr>
             { this.state.persons.map(person => 
               <tr>
                 <td>{person.id}</td>
                 <td>{person.fullName}</td>
                 <td>{person.email}</td>
                 
                 
                 </tr>
               )}
               </tbody>
             </table>
           </div>    
           </div>
        )
    }
}

export default AxiosTable
