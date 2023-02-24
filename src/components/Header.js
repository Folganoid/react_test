import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

const showOrders = (props) => {
  let summa = props.orders.reduce((a, b) => a + Number.parseFloat(b.price), 0);
  return (
    <div>
      {props.orders.map(el => (
        <Order key={el.id} item={el} onDelete={props.onDelete}/>
      ))}
      <p className='summa'>Total: {summa.toFixed(2)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Empty cart</h2>
  </div>)
}

export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='Logo'>House staff</span>
        <ul className='nav'>
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>

        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()
            }
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
