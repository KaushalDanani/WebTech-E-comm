import React from 'react'
import { Link } from 'react-router-dom'

export default function CartHeader() {
    return (
        <div id='CartHeader'>
            <Link to={'/'}><button id='backbtn'/></Link>
            <label id='HeaderTitle'>Your Cart</label>
            <label id='CartLabel' />
        </div>
    )
}
