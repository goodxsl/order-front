import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  state={name:''};
  componentDidMount(){
    axios.get('api1/users').then(res=>{
      this.setState({name:res.data.list[0].name})
      console.log(res.data.list);
    },err=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="username" /><br/>
        <input type="password" placeholder="password" /><br/>
        <button>提交</button>
        <div>{this.state.name}</div>
    </div>
    )
  }
}
