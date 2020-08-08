import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios'

class Datajc extends Component {
constructor(props) {
    super(props)

    this.state = {
      search: '',
    //   newSearch:'',
      sort: 'ASC',
      Data:[]
      //   Data:[
    //         {
    //             id: 1,
    //             fullName: 'Prathamesh Jadhav',
    //             region: 'Karad',
    //             email:'prathameshjc@gmail.com',
    //             joiningdate: '05/08/2020',
    //             post: 'Solution Analyst',
    //             // project:'Employee Management Application',
    //             frontend: 'Reactjs',
    //             backend:'Nodejs',
    //             database:'PostgreSQL'
    //         },
    //         {
    //             id: 2,
    //             fullName: 'Sahil Mulla',
    //             region: 'Karad',
    //             email:'sahilmullaiq@gmail.com',
    //             joiningdate: '01/08/2020',
    //             post: 'Solution Analyst',
    //             frontend: 'Vue Js',
    //             backend:'Flask',
    //             database:'SQLite'
    //         },
    //         {
    //             id: 3,
    //             fullName: 'Saee Dharasurkar',
    //             region: 'Karad',
    //             email:'saeedharasurkar@gmail.com',
    //             joiningdate: '10/08/2020',
    //             post: 'Solution Analyst',
    //             frontend: 'Reactjs',
    //             backend:'Phoenix',
    //             database:'Neo4j'
    //         },
    //         {
    //             id: 4,
    //             fullName: 'Shahrukh Attar',
    //             region: 'Karad',
    //             email:'shahrukhattar224@gmail.com',
    //             joiningdate: '05/08/2020',
    //             post: 'Solution Analyst',
    //             frontend: 'Web2Py',
    //             backend:'Web2Py',
    //             database:'SQLite'
    //         },
    //         {
    //             id: 5,
    //             fullName: 'Sanskruti Gupta',
    //             region: 'Karad',
    //             email:'sanskrutis.gupta16@gmail.com',
    //             joiningdate: '05/08/2020',
    //             post: 'Solution Analyst',
    //             frontend: 'Angular 8',
    //             backend:'Django',
    //             database:'PostgreySQL'
    //         },
    //         {
    //             id: 6,
    //             fullName: 'Shubham Sonawane',
    //             region: 'Karad',
    //             email:'sonawaneshubham22@gmail.com',
    //             joiningdate: '10/08/2020',
    //             post: 'Solution Analyst',
    //             frontend: 'Angular 8',
    //             backend:'Django',
    //             database:'MandoDB'
    //         },
    
    //      ]
    }
}
componentDidMount(){
    axios.get('http://localhost:8080/employees')
  .then(res => {
    const Data = res.data;
    console.log(Data)
    this.setState({ Data });
  })
}
updateSearch(event){
    
    this.setState({
        search : event.target.value
        
    });
    console.log(event.target.value);

}
sort(column) {
    const sortedList = [...this.state.Data];
    const newOrder = this.state.order === "ASC" ? "DESC" : "ASC";
    const sortValue = (v1, v2) => {
      if (column === 'id') return v1.id - v2.id;
      return (v1[column] ?? '')
        .toLowerCase()
        .localeCompare((v2[column] ?? '').toLowerCase())
    }
    if (newOrder === "ASC") {
      sortedList.sort((a, b) => sortValue(a, b));
    } else {
      sortedList.sort((a, b) => sortValue(b, a));
    }
    this.setState({ Data: sortedList, order: newOrder });
  }
// sortById() {
//     let sortedList = [...this.state.Data];
//     let newSort = this.state.sort === 'ASC' ? 'DESC' : 'ASC';
//     if (newSort === 'ASC') {
//       sortedList.sort((a, b) => a.id - b.id)
//     } else {
//       sortedList.sort((a, b) => b.id - a.id)
//     }
    
//     this.setState({ Data: sortedList, sort: newSort });
//   } 
// sortByName() {
//     let sortedList = [...this.state.Data];
//     let newSort = this.state.sort === 'ASC' ? 'DESC' : 'ASC';
//     if (newSort === 'ASC') {
//       sortedList.sort((a, b) => a.fullName > b.fullName)
//     } else {
//       sortedList.sort((a, b) => b.fullName < a.fullName)
//     }
    
//     this.setState({ Data: sortedList, sort: newSort });
//   }
clickMe(item){
    // myid:{item.id}
    // mytitle:{item.title}
    // myname:{item.name}
    const {history}=this.props;
    alert('clicked');
    console.log(item);
    // history.push('/Infojc')
    history.push({
        pathname: '/Infojc',
        state: { myitem: item }
            
    })
    //   <Infojc />
    // history.push('/Infojc', { id: [item.id], title: [item.title], name:[item.name] })
    // return(
    //     <Infojc func ={this.clickMe} />
    // )
}


    render() {
        // let filtered=this.state.Data.filter((item)=>{
        //     return item.name.toLowerCase().includes(this.state.search.toLowerCase())
        // })
        return (
            
            <div className="container">
                <div className="card-header">
                        <b><h1>Employee List</h1></b>
                </div>
                <input type="text" className="form-control" placeholder="Enter here to search"  value={this.state.search} onChange={this.updateSearch.bind(this)} />
                
                <table className="table table-hover table-primary">
                
                <tbody>
                    <tr>
                        <th onClick={() => this.sort('id')}>ID<i className="fas fa-sort text-right"/></th>
                        <th onClick={() => this.sort('fullName')}>Full Name<i className="fas fa-sort text-right"/></th>
                        <th onClick={() => this.sort('email')}>Email<i className="fas fa-sort text-right"/></th>
                    </tr>
                    { 
              this.state.Data.filter((item) => {
            return !(this.state.search) // if search is not set, return all items
                    || item.fullName.match(RegExp(this.state.search, 'i'))
                    || item.email.match(RegExp(this.state.search, 'i'))
          }).map((item,index)=>(                    <tr key={item.id}>
                       
                        <td >{item.id}</td>
                    <Router>    
                        <td ><Link to={'/Infojc'} onClick={this.clickMe.bind(this,item)}>{item.fullName}</Link></td>
                    </Router>
                        <td>{item.email}</td>
                    </tr>
                ))
                }
                </tbody>
                </table>

            </div>
        )
    }
}

export default Datajc
