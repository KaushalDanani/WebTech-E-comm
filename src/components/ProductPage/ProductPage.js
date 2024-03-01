import React from 'react'
import "./ProductPage.css";

function ProductPage() {
  return (
    <div>
        {/* ProductPage */}
        <div className='ProductBox'>
            <div className='ProductImgContainer'>
                <img className='ProductImg' src='https://m.media-amazon.com/images/I/71+20a0lvVL._SY675_.jpg' alt='Shoes'></img>
            </div>
            <div className='ProductDetails'>
                <span className='pname'> <strong>Name</strong> </span>
                <span>Ratings : <span> </span> out of 5 star</span> 
                <hr></hr>
            </div>
        </div>
    </div>
  )
}

export default ProductPage