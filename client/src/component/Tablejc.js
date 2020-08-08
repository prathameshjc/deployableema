import React from 'react'
import ListItemjc from './ListItemjc';

export class Tablejc extends React.Component {

// Dummy data for the table
state = {
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

getData = (rowData) => {
// This is the row data from ChildComponent
// const {history}=this.props;
// history.push('/Listjc')  
console.log(rowData);
}

render(){
     return(
          <div>                 
              {this.state.data.map(item => (
                   <ListItemjc rowData={item} handleClick={this.getData}/>
              ))}
       </div>               
        );
    }
}

