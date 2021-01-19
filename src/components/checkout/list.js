import React from 'react'
import Item from './items'

function list({value}) {
    const {cart} = value;
  return (
    <div>
      {cart.map(item => {
        return <Item key={item.bookID} item={item}  />
      })}
    </div>
  )
}

export default list
