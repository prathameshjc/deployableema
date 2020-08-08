import React from 'react';
// import NewLogin from './component/NewLogin';
// import PostForm from './component/PostForm';
// import SendData from './component/SendData';
// import { Tablejc } from './component/Tablejc';
// import Newdatajc from './component/Newdatajc';
// import Sorttable from './component/ProductTable'
// import Other from './component/Other';
// import ReactTable from "react-table";
import {BrowserRouter as Router,Switch,  Route} from 'react-router-dom'
// import Main from './component/Main';
// import Details from './component/Details';
import Login from './component/Login'
// import Emp from './component/Emp';
import Datajc from './component/Datajc';
import Infojc from './component/Infojc';
// import {domainUrl} from './Common'
// import Hrlogin from './component/Hrlogin';
// import PersonsList from './component/PersonsList';
// import AxiosTable from './component/AxiosTable';
// import Employeedata from "./component/Employeedata";
// import Mytable from './component/Mytable';
// import "react-table/react-table.css"
// import Swami from './component/Swami'
// import {Cards, Card} from './component/Myindex'
// import Pass from './component/Pass'

function App() {
  return (
    <div className="App">
    {/* <Pass/> */}
      {/* <NewLogin/> */}
      {/* <PostForm/> */}
      {/* <SendData/> */}
      {/* <Login/> */}
      {/* <AxiosTable/> */}
      {/* <Datajc/> */}
      {/* <Hrlogin/> */}
      {/* <Newdatajc/> */}
      {/* <Tablejc/> */}
      {/* <Datajc/> */}
      {/* <Sorttable/> */}
      {/* <Other/> */}
    {/* <Swami/>       */}
      {/* <Router path='/' component={Main}/>
      <Router path='/' component={Details}/> */}

      {/* <Route path='/' component={Mytable}/>    */}
     {/* />
        <Route path='emplyeedata' component={Employeedata}/>  */}
      {/* // employee management application */}
      <Router>
      <Switch>
      
      <Route exact={true} path='/' component={Login}/>
        <Route path='/Datajc' component={Datajc}/>
        
        <Route exact path='/infojc' component={Infojc}/>

     
       </Switch>
      </Router>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <Route exact path="/cards" component={Cards} />
//           <Route path="/cards/:id" component={Card} />
//         </div>
//       </Router>
//     </div>
//   );
// }


export default App;
