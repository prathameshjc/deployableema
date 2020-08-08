import React from 'react';
// import Datajc from './Datajc'

const Infojc = (props) => {
      console.log(props);
 return(
      // var xyz= {this.props.history.location.state.myitem};


      //  <Datajc/>
    // Using Props handleClick as callback function
          <div >
                {/* <p> {props.history.location.state.myitem.id} </p>
                <p> {props.history.location.state.myitem.fullName} </p>
                <p> {props.history.location.state.myitem.region} </p> */}
                <table className="table">
                  <tbody align='center'>
                    <tr>
                     <td >ID</td>
                     <td>{props.history.location.state.myitem.id}</td>
                    </tr> 
                    
                    <tr>
                     <td>Full Name</td>
                     <td>{props.history.location.state.myitem.fullName}</td>
                   </tr>

                   <tr>
                     <td>Email Id</td>
                     <td>{props.history.location.state.myitem.email}</td>
                   </tr>
                   <tr>

                   <td>Mobile No.</td>
                     <td>{props.history.location.state.myitem.mobile}</td>
                   </tr>

                   <tr>
                   <td>Age</td>
                     <td>{props.history.location.state.myitem.age}</td>
                   </tr>

                   <tr>
                   <td>Joining Date </td>
                     <td>{props.history.location.state.myitem.joiningDate}</td>
                   </tr>

                   <tr>
                   <td>Salary</td>
                     <td>{props.history.location.state.myitem.salary}</td>
                   </tr>

                  </tbody>    
                </table> 
           </div>
 );
}
export default Infojc;


// import React, { Component } from 'react'
// import Datajc from './Datajc'
// class Infojc extends Component {
//     constructor(props) {
//         super(props)
//         // this.props.func(item)
    
//     //     this.state = {
//     //          selectedRow:{
//     //             id: "",
//     //             title: "",
//     //             name: ""
//     //          }
//     //     }
//     //     // this.getRow = this.getRow.bind(this);
//     }
//     // getRow(row){
//     //     this.setState({selectedRow: row});
//     //   }
//     render() {
//         return (
//             <div>
//                 {/* <p>Data from table</p> */}
//                 {/* {} */}
//                 {/* <p> getRow={this.getRow}</p>
//                 <p> row={this.state.selectedRow}</p> */}
//                     <p>Id : {this.props.item.id}</p> 
//                      <p>Title : {this.props.item.title}</p>
//                     <p>Name : {this.props.item.name}</p>
//             </div>
//         )
//     }
// }

// export default Infojc
