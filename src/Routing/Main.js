import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Main extends Component {
  render() {
    return (
      <div>
      
        <Link to='/'>Home</Link><br />
        <Link to='/about'>About</Link><br />
         <Link to='/products'>Products</Link>

      </div>
    )
  }
}
