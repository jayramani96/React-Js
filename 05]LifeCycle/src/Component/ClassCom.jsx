import React, { Component } from 'react'

export default class ClassCom extends Component {

    constructor(props){
        super();
        this.state = {count: 0, name: "jay"};
    }
    decrement = () => {
        this.setState({count: this.state.count - 1})
    }
    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    componentDidMount(){
        console.log("componentDidMounting")
    }
    componentDidUpdate(){
        console.log("componentDidUpdating")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
  render() {
    return (
      <div>
        <h1>ClassCom</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>

    )
  }
}
