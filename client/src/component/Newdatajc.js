import React, { Component } from 'react'
import ListItemjc from './ListItemjc'

class Newdatajc extends Component {
state={
    data: [
        {
          company:"sankeyjc",
          contact:'1 yr',
          country: 'india' 
        },
        {
            company:"infosys",
            contact:'2 yr',
            country: 'india' 
         },
         {
            company:"wallstar",
            contact:'1 yr',
            country: 'india'
             }
    ]
}
getData=(rowData)=>{
console.log(rowData);
}
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr >
                {
                    this.state.data.map((item) => (
                        <ListItemjc rowData={item} handleClick={this.getData}/>
                   ))}
                    
                        <td >{item.title}</td>
                        <td >{item.title}</td>
                        <td>{item.name}</td>
                    </tr>
                ))
                }
                </table>
            </div>
        )
    }
}

export default Newdatajc
