import React, {Component} from 'react'
import {Link} from 'react-router-dom'

let data = {}
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }


  onPart1Click = () => {
    const {username, password} = this.state

    data = {
      username: username,
      password: password
    }

    this.props.history.push('/part1', data)
  }


  render() {

    return (<div>
        Home

        <ul>
          <li>


            <div style={
              {margin: '20px', width: '400px', padding: '10px', backgroundColor: '#e2e2e2'}
            }>
              <div>用户名：<input onChange={(e) => this.setState({username: e.target.value})} type="text"/></div>
              <div>密码：<input onChange={e => this.setState({password: e.target.value})} type="text"/></div>
              <button onClick={this.onPart1Click}> 前往part1</button>
            </div>

          </li>
        </ul>
      </div>
    );
  }
}

export default Home
