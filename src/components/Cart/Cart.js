import React from 'react'
import './Cart.css'
import CartHeader from './CartHeader'
import CartPanel from './CartPanel'
import DemoCart from './DemoCartList'

export default function Cart() {
    return (
        <div id='CartPage'>
            <CartHeader/>
            <CartPanel/>
        </div>
    )
}
