import { useState, createContext, useContext,UserContext } from "react";
function Component2() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
export default Component2



// import { useState,createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";
// import Demo from "./Demo";
// export const UserContext = createContext();
// function Login(){
//     const [user,setUser] = useState("Krishna");
//     return (
//         <UserContext.Provider value={user}>
//         <div>
//             <h1>Login Page</h1>
//             <Home2 user={user}/>
//         </div>
//         </UserContext.Provider>
//     )
// }
// function Home2({user}){
//     return(
//         <div>
//             <h1>Home Page</h1>
//             <Cart user={user}/>
//         </div>
//     )
// }
// function Cart({user}){
//     return(
//         <div>
//             <h1>{user}'s Cart</h1>
//             <Payment user={user}/>
//         </div>
//     )
// }
// function Payment(){
//     const user = useContext(UserContext);
//     return(
//         <div>
//             <h1>{user}'s Payment Page</h1>
// 			<Demo/>
//         </div>
//     )
// }
// export default Login;



// import { useContext } from 'react';
// import {UserContext} from './Login';
// function Demo(){
//   const user = useContext(UserContext);
//   return(
//     <div>
//       <h1>{user}'s Information in another component</h1>
//     </div>
//   )
// }
// export default Demo;