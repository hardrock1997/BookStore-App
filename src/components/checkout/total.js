import React from 'react'
import classes from './checkout.module.css'

function total(props) {
    return (
        <div className={classes.total}>
            <div>Amount: <strong>Rs {props.value.cartTotal}</strong></div>
        </div>
    )
}

export default total
