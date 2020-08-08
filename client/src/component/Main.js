import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
// import {loadUserInfo} from '../../actions/news.js';

import './Main.css';
class Main extends Component {
    constructor(props) {
        super(props);
        }

        onLogout=function (data) {
              this.props.history.push({
                pathname: '/details',
                 state: {
                    key: data
                } 
            });  
        }

    render() {
      let moviestorender = '';

      if(this.props.news.newsArray && this.props.news.newsArray.length === 10 && this.props.news.userProfile && this.props.news.userProfile.length === 10){

     moviestorender = this.props.news.newsArray.map((data, i) => {
          if (i < 9)
          {
            return (<tr key={data.id} data-item={data} onClick={()=>this.onLogout(data)}>
                        <td className="title">{data.title}</td>
                        <td className="row">{data.score}</td>
                        <td className="row">{data.by}</td>
                        <td className="row">{data.karma}</td>
                        <td className="row">{data.created}</td>
                </tr>)
          }
        })
      }

      return(

        <div className="mainStart">
            <table>
                <tbody>
                    <tr>
                        <th className="title">Title</th>
                        <th className="row">Score</th>
                        <th className="row">Author</th>
                        <th className="row">Author's Karma</th>
                        <th className="row">Date Created</th>
                    </tr>{moviestorender}
                </tbody>
            </table>

        </div>
      )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); //  this is used to get the history object from with router and to connect to store