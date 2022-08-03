import React, { Component } from 'react'

export default class AaaaBrowserDirectory extends Component {
    constructor()
    {
        super();
        this.state={
            id:0,
            name:''
        }
    }
    onInputHandler=(e)=>{
       const state=this.state;
       state[e.target.name]=e.target.value;
       this.setState(state) 
    }
    
    formSubmit=(e)=>{
        e.preventDefault()
        this.props.addFolderHandler(this.state)
    }
     
  render() {
    return (
      <div>
      <h1>Browser Directory </h1>
        <form action="" onSubmit={this.formSubmit.bind(this)}>
            <input type="text" name='name' onInput={this.onInputHandler} />&nbsp;&nbsp;&nbsp; 
            <button type='submit'>Add</button>
        </form>
     <div>
       <h3>List of Directories</h3>
     </div>
        <div>
        {
            this.props.showFolders.map(ele=>{
                return <div key={ele.id}>
                         {ele.name}
                </div>
            })
        }
        </div>
      </div>
    )
  }
}
