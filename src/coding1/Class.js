import React, { Component } from 'react'

export default class Class extends Component {
unhideHandler()
{
  document.getElementById("meme").style.visibility='visible'
}
  render() {
    return (
      <div>
      <button onClick={this.unhideHandler}>show</button><br /><br />
              <p id='meme' style={{visibility:'hidden'}}></p>
      </div>
    )
  }
}
