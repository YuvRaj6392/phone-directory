import React, { Component } from 'react'
import FuncProp from './FuncProp'
import Main from './Main'
export default class App extends Component {
  render() {
    return (
      <div>
        <Main count={0} />
        <div style={{margintop:'100px'}}>
            <FuncProp count={20} />
        </div>
      </div>
    )
  }
}
