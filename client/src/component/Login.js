import React, { Component } from 'react'
import '../css/myform.css'
import axios from 'axios'
// import {domainUrl} from '../Common'
// const uname='admin';
// const pass='pass';

class Login extends Component {
constructor(props) {
  
  super(props)
  
  this.state = {
        // uname:'admin',
        // pass:'pass',      
        username:'',   
        password:''
        
  }
}

usernameHandler=event=>{
  this.setState({
    username:event.target.value,
    
  })
}
passwordHandler=event=>{
  this.setState({
  password:event.target.value
  })
}

submitHandler=event=>{
  var data = new FormData();
  let {username,password}=this.state;
  // var {history}=this.props;
  
  data.append("username",username)
  data.append("password",password)
  // var {history}=this.props;  
//   var data = {
//     username: "prathamesh",
//     password: "admin",
    
// };
  event.preventDefault()
  var {history}=this.props;
    console.log("----------------------",this.state);
    
		axios.post('http://localhost:8080/note', data,{
      headers: {'Content-Type':'application/json'}
    }).then(function(res){
      console.log("----------------------response",res);
      let statuscode=res.status;
      console.log('status code is :',statuscode)
      switch(statuscode){

        case 201: 
          console.log("case 1")
          history.push('./Datajc')
          alert('login successful') 
          break;
        case 202: 
          console.log('case 2')
          alert('login unsuccessful') 
          break;
        default:
          break;
      }
    }).catch(function(err){
      console.log('errror....',err);
    })
    
      // submitHandler=event=>{
      //   // const { username, uname, password, pass } = this.state;
      //   const {history}=this.props;
      //   const {username,password}=this.state;
      //   if ((username==='admin') && (password==='pass')) {
      //     console.log("Successfully Login")
      //     history.push('./Datajc')
      //   } else {
      //     alert("Invalid Credentials")
      //     console.log("Login Failed")
      //   }
      
  // const { username, uname, password, pass } = this.state;
  //hard code authentication start
  // const {history}=this.props;
  // const {username,password}=this.state;
  // if ((username==='admin') && (password==='pass')) {
  //   console.log("Successfully Login")
  //   history.push('./Datajc')
  // } else {
  //   alert("Invalid Credentials")
  //   console.log("Login Failed")
  // }
//hard code authentication end

//   if ((uname==={username:event.target.value}) && (pass==={password:event.target.value})) {
//   return (
//     console.log('successful logged in')
//   )
// } else {
//   console.log('failed')
// }
}
  render() {
    const {username, password}=this.state
        return (
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
                    onChange={this.usernameHandler}
                  /><br></br>
                  
                
                  <label htmlFor="password">Password</label>
                  <input className='custom_input'
                    placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.passwordHandler}
                  />
                  <button type="submit" >Login</button>
                </div>
                
                </form>
                
            </div>
          </div>
        )
    }
}

export default Login
