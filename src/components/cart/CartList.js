import React from 'react'
import CartItem from './CartItem'

function CartList({value}) {
  const {cart} = value;
  return (
    <div>
      {cart.map(item => {
        return <CartItem key={item.bookID} item={item} value={value} />
      })}
    </div>
  )
}

export default CartList

