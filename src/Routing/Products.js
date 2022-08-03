import React, { Component } from 'react'
import Main from './Main'
import { useParams } from 'react-router-dom'
export default class Products extends Component {
    product1Handler()
    {
        alert("this is product 1")
    }
    product2Handler()
    {
        alert("this is product2")
    }
  render() {
    return (
        
      <div>
<div>
<Main />
</div>
        This is the Product page
        <button onClick={this.product1Handler}>Product1</button>
        <button onClick={this.product2Handler}> Product2</button>
      </div>
    )
  }
}
