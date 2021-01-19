import React from 'react'
import classes from './cartitem.module.css'
import {Link} from 'react-router-dom'

function CartTotal(props) {
    return (
        <div className={classes.total}>
            <div>Total: <strong>Rs {props.value.cartTotal}</strong></div>
            <button onClick={() => {
                props.value.clearCart()
            }}>Clear Cart</button>
            <Link to={'/checkout'}>Place Order</Link>
        </div>
    )
}

export default CartTotal
