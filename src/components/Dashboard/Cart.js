import React from 'react'
import "./Cart.css";

function Cart() {

    const cartArr = JSON.parse(localStorage.getItem("cart"));

    return (
        <div className='cartMain'>
            {/* <div className='cartBadge'>
                {cartArr.length}
            </div> */}
            <div className='cartLogoDiv'>
                <div className='cartLogo'>
                    <img src="" />
                </div>
            </div>
        </div>
      )
}

export default Cart