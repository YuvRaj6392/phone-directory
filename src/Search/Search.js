import React from 'react'

export default function Search({input,onInputChange}) {
  return (
    <div>
        <input type="text"
        value={input}
        onInput={e=>onInputChange(e.target.value)}
         />
    </div>
  )
}
