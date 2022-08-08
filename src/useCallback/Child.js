import React, { memo } from 'react'

 function Child(props) {
    console.log("child component has been rendered")
  return (
    <div>
      Hello I am my fathers child {props.count2}
    </div>
  )
}
export default memo(Child)
