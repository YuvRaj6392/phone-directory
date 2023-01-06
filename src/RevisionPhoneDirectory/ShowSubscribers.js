import React from "react";
import { useState } from "react";
import Header from "./Header";

import  {Link} from "react-router-dom";

export default function ShowSubscribers(props) {
console.log(props.subscriberList)
  return (
    <>
      <Header title={"Phone Directory"} />

      <Link to="/add"><button>Add</button></Link>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
          {
            props.subscriberList.map(ele=>{
              return <tr key={ele.id}>
                <td>{ele.name}</td>
                <td>{ele.phone}</td>
                <td><button onClick={props.deleteHandler(ele.id)}>Delete</button></td>
              </tr>
            })
          }
        </table>
      </div>
    </>
  );
}
