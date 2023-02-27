import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from '../asyncAction/customers';
import { addCustomerAction, getCustomerAction } from '../store/customerReducer';

export default function Counter() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  
  const addCash = () => {
    dispatch({type: "ADD_CASH", payload: 5})
  }

  const getCash = () => {
    dispatch({type: "GET_CASH", payload: 5})
  }

  const getCustomer = (customer) => {
    dispatch(getCustomerAction(customer))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer));
  }

  return (
    <div className='app'>
        <div style={{fontSize: "3rem"}}>{cash}</div>
        <div style={{display: "flex", margin: "10px", height: "30px", width: "30px"}}>
            <button onClick={() => getCash()}>(-)</button>
            <button onClick={() => addCash()}>(+)</button>
            <button onClick={() => addCustomer(prompt('add name'))}>ADD CUSTOMER</button>
            <button onClick={() => dispatch(fetchCustomers())}>ADD MANY USERS</button>
        </div>
        <div>{customers.length === 0 ? "empty" : 
          customers.map(customer => 
            <div key={customer.id} onClick={() => {
              getCustomer(customer);
            }}>{customer.name}</div>
          )
        }</div>
    </div>
  )
}
