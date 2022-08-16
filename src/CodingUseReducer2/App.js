import React, { useReducer } from 'react'
function reducer(state,action)
{
switch(action.type)
{
    case "setFirstName":
        return {
            ...state,
            firstName:action.payload
        }
    case "setLastName":
        return {
            ...state,
            lastName:action.payload
        }
    default:
        return state
}
}
export default function App() {
    const [state,dispatch]=useReducer(reducer,{firstName:"",lastName:""})
    const dispatch1=(e)=>{
        dispatch({
            type:"setFirstName",
            payload:e.target.value
        })
    }
    const dispatch2=(e)=>{
        dispatch({
            type:"setLastName",
            payload:e.target.value
        })
    }
  return (
    <div>
   <input type="text" onInput={dispatch1} />
   <input type="text" onInput={dispatch2}/>
   {state.firstName} {state.lastName}
    </div>
  )
}
