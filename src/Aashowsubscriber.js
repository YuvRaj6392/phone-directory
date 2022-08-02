import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Aashowsubscriber extends Component {
   onDeleteClick=(subId)=>
    {
        this.props.deleteSubscribersHandler(subId);
    }
  render() {
    return (
      <div>
      <Link to='/add'><button>ADD</button></Link>
      
      
        <table>
            <tr>
                <th>Name</th>
                <th>Phone</th>
            </tr>
            {
                this.props.showSubscribersList.map(ele=>{
                  return  <tr key={ele.id}>
                        <td>{ele.name}</td>
                        <td>{ele.phone}</td>
                        <td><button onClick={this.onDeleteClick.bind(this,ele.id)}>DELETE</button></td>
                    </tr>
                })
            }
        </table>
      </div>
    )
  }
}
