import React from "react";
import Header from "./Header";
export default function App() {
  let subscribers = [
    {
      id: 1,
      name: "Shilpa Bhat",
      phone: "8888888888",
    },
    {
      id: 2,
      name: "Srishti Gupta",
      phone: "9999999999",
    },
  ];
  const delteHandler=()=>{
    alert("Delete button has been clicked!");
  }
  return (
    <>
      <Header title={"Phone Directory"} />
      <button>Add</button>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
          {
            subscribers.map(ele=>{
              return <tr key={ele.id}>
                <td>{ele.name}</td>
                <td>{ele.phone}</td>
                <td><button onClick={delteHandler}>Delete</button></td>
              </tr>
            })
          }
        </table>
      </div>
    </>
  );
}
