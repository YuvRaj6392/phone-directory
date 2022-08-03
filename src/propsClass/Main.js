import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            count:props.count
        }
    }
   addHandler=()=>{
    this.setState({
        count:this.state.count+1
    })
   }

  render() {
    return (
      <div>
        <button onClick={this.addHandler}>button1</button>
        <div>
            {this.state.count}
        </div>
      </div>
    )
  }
}
