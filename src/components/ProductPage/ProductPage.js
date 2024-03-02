import React, { useEffect, useRef, useState } from 'react'
import "./ProductPage.css";

function ColorStyle(props) {
  return (
    <>
      <input type='radio' value={props.type} radioGroup='type' id={props.type} checked={props.selectedOption === props.type} onChange={props.handleChange} />
      <label className='colorsTags' id={props.type} htmlFor={props.type} style={{backgroundColor: props.type}}></label>
    </>
  )
}

function ProductPage() {

  const dprice = useRef();
  const [selectedOption, setSelectedOption] = useState();
  const category = ["Toys & Games", "Board Games", "New Product" , "What is this?", "Yahh Great"]
  const colors = ["green", "yellow", "Black", "Orange"]

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  

  return (
    <div>
        {/* ProductPage */}
        <div className='ProductBox'>
            <div className='ProductImgContainer'>
                <img className='ProductImg' src='https://m.media-amazon.com/images/I/71+20a0lvVL._SY675_.jpg' alt='Shoes'></img>
            </div>
            <div className='ProductDetails'>
                <span className='pname'> <strong>FZ Forza Brace Lucio Badminton Shoes </strong> </span>
                <span className='multiCategory'> {category.map((type) => (<span className='categoryTags'>{type}</span>))} </span>
                <span>Ratings : <span> <strong> {/* Enter Star rating */} </strong> </span> out of 5 star</span> 
                <hr className='hrLine'/>
                <span className='discounttag'> -64% <span className='priceTag'>₹4599 </span> </span>
                <span className='productMRP'>M.R.P.: <s>₹8999</s></span>
                <span> Inclusive of all taxes | <span><strong> No of Order: 1208 </strong></span></span>
                <span className='colorHeading'><strong> Color: </strong></span>
                <span className='multiColor'> {colors.map((type) => (<ColorStyle type={type} selectedOption={selectedOption} handleChange={handleChange}/>))} </span>
                <div> <button className='addToCartBtn'><strong>Add to Cart</strong></button></div>
                <span> <button className='buyNowBtn'><strong>Buy Now</strong></button></span>
                
            </div>
            <div className='ProductDetailDiscription'>
              <span className='dscriptionHeader'> <strong>Product Discription:</strong> </span>
                <span className='productBand'> <strong>Brand:</strong> <span>Bata</span> </span>
                <span className='productDiscription'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic eum impedit quod expedita possimus placeat magni eos repellendus qui, illum itaque aut nihil in temporibus atque cupiditate dicta aperiam doloribus, et perspiciatis commodi esse! Deleniti illum repellendus corrupti perspiciatis saepe maiores modi, cupiditate ullam porro amet laudantium, velit architecto explicabo ex. Ratione aut rerum, saepe numquam consectetur iusto vel, quaerat suscipit pariatur earum sit ex ipsum quae. Obcaecati, reiciendis praesentium? Dicta optio qui ea doloremque consequatur corrupti molestiae ducimus? </span></div>
        </div>
    </div>
  )
}

export default ProductPage