import React from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
export default function Home() {
  const dispatch=useDispatch();
  const [withdrawMoney, depositMoney]=bindActionCreators(actionCreators,dispatch);
  return (
    <div>
    <h2>State Bank of India</h2>
        <button onClick={()=>{
          withdrawMoney(100)
        }}>-</button>
        <span>Update Balance</span>
        <button onClick={()=>{
           depositMoney(100)
        }}>+</button>
    </div>
  )
}
