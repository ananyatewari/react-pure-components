import React, { PureComponent } from 'react'

export default class Pure extends PureComponent {
    constructor(props) {
      super(props)
    
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
      }  
    
      setToggle = () => {
        this.setState({
          toggle : this.state.toggle ? false : true
        })
      }
      render() {
        console.log("this is pure component")
        return (
          <div>
            <h1>Pure Component</h1>
            <div>{this.state.count}</div>
            <button onClick={this.setToggle}>Set Toggle</button>
            <button onClick={this.handleIncrement}>Increment</button>
          </div>
        )
      }
}
