import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Customer() {

  const dispatch = useDispatch();
  const customers = useSelector(state => state.customers.customers);
  
  const addCustomer = () => {
    dispatch({type: "ADD_CUSTOMER", payload: 100});
  }

  const getCustomer = () => {
    dispatch({type: "GET_CUSTOMER", payload: 100});
  }

  return (
    <div className='app2'>
        <div style={{fontSize: "3rem"}}>{customers.toString()}</div>
        <div style={{display: "flex", margin: "10px", height: "30px", width: "30px"}}>
            <button onClick={() => getCustomer()}>(-)</button>
            <button onClick={() => addCustomer()}>(+)</button>
        </div>
    </div>
  )
}
