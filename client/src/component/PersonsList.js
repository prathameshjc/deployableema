import React, { Component } from 'react'
import axios from 'axios'

class PersonsList extends Component {
    state={
        persons:[]
    }
    componentDidMount(){
        axios.get("http://localhost:8080/empdetails_id/1")
        .then(res=>{
            console.log(res)
            this.setState({
                persons:res.data
            })
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.persons.map(person=>
                        <li>{person.name}</li>
                        
                        )}
                </ul>
                
            </div>
        )
    }
}

export default PersonsList

