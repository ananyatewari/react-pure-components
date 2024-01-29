import React, { Component } from 'react'

export default class Simple extends Component {
  constructor() {
    super()
    this.state = {
      count : 0,
      toggle : false
    }
  }

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState({
        count : ++this.state.count
      })
    }
    else {
        this.setState({
            count : this.state.count
        })
    }
  }

  setToggle = () => {
    this.setState({
      toggle : this.state.toggle ? false : true
    })
  }

  render() {
      console.log("this is simple component")
    return (
      <div>
        <h1>Simple Component</h1>
        <div>{this.state.count}</div>
        <button onClick={this.setToggle}>Set Toggle</button>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}
