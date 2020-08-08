import React, { Component } from 'react'
import axios from 'axios'
export class NewLogin extends Component {
    constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
			
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.username]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
    render() {
        const { username, password} = this.state
        return (
            <div>
                <div className="custom_wrapper">
            <div className="custom_form-wrapper">
              <h1>SIGN IN INTO YOUR ACCOUNT</h1>
              <form onSubmit={this.submitHandler} >
                <div className="custom_username" >
                  <label htmlFor="username">User Name</label>
                  <input className='custom_input'
                    placeholder="example@email.com"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.changeHandler.bind(this)}
                  /><br></br>
                  
                
                  <label htmlFor="password">Password</label>
                  <input className='custom_input'
                    placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.changeHandler.bind(this)}
                  />
                  <button type="submit" >Login</button>
                </div>
                
                </form>
                
            </div>
          </div>
            </div>
        )
    }
}

export default NewLogin
