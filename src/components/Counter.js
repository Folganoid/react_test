import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  
  const addCash = () => {
    dispatch({type: "ADD_CASH", payload: 5})
  }

  const getCash = () => {
    dispatch({type: "GET_CASH", payload: 5})
  }

  return (
    <div className='app'>
        <div style={{fontSize: "3rem"}}>{cash}</div>
        <div style={{display: "flex", margin: "10px", height: "30px", width: "30px"}}>
            <button onClick={() => getCash()}>(-)</button>
            <button onClick={() => addCash()}>(+)</button>
        </div>
    </div>
  )
}
