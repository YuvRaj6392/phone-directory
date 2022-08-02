import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Aaaddsubscriber extends Component {
    constructor(){
        super()
        this.state={
            id:0,
            name:'',
            phone:''
        }

    }
    onInputHandler=(e)=>{
       const state=this.state;
       state[e.target.name]=e.target.value;
       this.setState(state)
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.addSubscribersHandler(this.state);
        this.setState({ id: 0, name: '', phone: ' ' });
    }
   cleanCode(){
    this.setState({
        id:0,
        name:'',
        phone:''
    })
   }
  render() {
    return (
      <div>
      <Link to='/'><button>BACK</button></Link>
      
        
        <br />
        <form  onSubmit={this.onFormSubmit.bind(this)}>
        Name: 
        <input type="text" name='name' autoComplete='off' value={this.state.name} onInput={this.onInputHandler}  /><br />
        Phone:
        <input type="text" name='phone' autoComplete='off' value={this.state.phone} onInput={this.onInputHandler} /><br />
        <br />
        The subscribers to be added are <br />
        <span>Name: {this.state.name} </span><br />
        <span>Phone: {this.state.phone} </span><br />
        <button type='submit' onClick={this.cleanCode}>ADD</button>
        </form>
       
      </div>
    )
  }
}
