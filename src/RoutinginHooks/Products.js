import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Products extends Component {
  render() {
    return (
      <div>This is the products page!
      <br />
      Choose the products of your choice <br />
      <Link to='/products/101'><button style={{marginBottom:'5px'}}>Product1</button><br /></Link>
      
      <Link to='/products/102'><button>Product2</button><br /></Link>

      
      

      
      </div>
    )
  }
}
