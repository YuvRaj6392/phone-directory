import React, { useReducer } from 'react'
function reducer(state,action)
{
switch(action.type)
{
    case 'firstName':
        return {firstName:state.firstName}

        case 'lastName':
            return {lastName:state.lastName}

    default:
        return state
}
}
export default function App() {
    const [state,dispatch]=useReducer(reducer,{firstName:"sdjfh",lastName:"sdjfh"});
  return (
    <div>
      <span>{state.firstName} {state.lastName}</span><br />
      <input type="text" onInput={()=>dispatch({type:'firstName'})} />
      <input type="text" onInput={()=>dispatch({type:'lastName'})} />
    </div>
  )
}
