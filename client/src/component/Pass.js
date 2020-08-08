import axios from 'axios'
import React,{Component} from 'react'
class Pass extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.post('http://localhost:8080/note')
      .then(response => this.setState({username: 'prathamesh'}))
  }

  render () {
    return (
      <div className='show_my__username'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.username}</p>
      </div>
    )
  }
}

export default Pass