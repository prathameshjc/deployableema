import React, { Component } from 'react';
import axios from 'axios';

class NewAxios extends Component {
  constructor(props) {
      super(props);
      this.state = {
          persons: []
      }
   }      

  componentDidMount() {
      axios.get('http://localhost:8080/empdetails', {
        method: 'GET',
        
    })
      .then((response) => {
          this.successShow(response);
      })
      .catch((error) => {
          this.successShow(error);
      });
  }
  successShow = response => {
    this.setState({
      // response format {"Table":[{"id":1001,"first_name":"Adam","last_name":"Quda",.....}]}
      person: response.data && response.data.Table
    });
  };

  render() {
      return (
        <div>
        <table className="table">
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
          {this.state.persons.map(person => (
            <tr>
              <td>{person.id}</td>
              <td>{person.fullName}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </table>
      </div>

         );
        }
   }

   export default NewAxios