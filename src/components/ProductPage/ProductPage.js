import React, { useEffect, useRef, useState } from 'react'
import "./ProductPage.css";
import { useParams } from 'react-router-dom';
import products from "./../../data/webtech-ecomm.products.json"

function ColorStyle(props) {
  return (
    <>
      <input type='radio' value={props.type} radioGroup='type' id={props.type} checked={props.selectedColor === props.type} onChange={props.handleChange} />
      <label className='colorsTags' id={props.type} htmlFor={props.type} style={{backgroundColor: props.type}}></label>
    </>
  )
}

function ProductPage() {
  const {id} = useParams();

  const product = products.filter((x)=>{
    return x._id.$oid == id
  })[0];

  

  console.log(product,"-----------");
  // console.log(id);
  // const [product,setProduct] = useState({});
  // console.log(data);

  // useEffect(()=>{
  //   fetch(`http://localhost:4041/api/products/${id}`).then((res)=>{
  //     if(res.ok){
  //       return res.json();
  //     }
  //     console.log(res);
  //     throw new Error("SOme error")
  //   }).then((data)=>{
  //     console.log(data.product);
  //     setProduct(data.product);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // },[])

  const dprice = useRef();
  const [selectedColor, setSelectedColor] = useState(product.remarks.colors[0].color);
  // const category = ["Toys & Games", "Board Games", "New Product" , "What is this?", "Yahh Great"];
  // const colors = ["green", "yellow", "Black","pink"];

  function handleChange(event) {
    console.log(event.target.value);
    setSelectedColor(event.target.value);

  }

  function addToCart(e){
    let cart = JSON.parse(localStorage.getItem("cart"));
    if(!cart){
      localStorage.setItem("cart",JSON.stringify([]));
      cart = [];
    }
    let pr = cart.filter((x)=>{
      return x._id.$oid == id;
    });

    cart.push({
      ...product,selected:{
        color:selectedColor
      },
    });
    window.alert("Product added to cart successfully...!");
    localStorage.setItem("cart",JSON.stringify(cart));
  }


  let dPrice = parseFloat(product?.price - product?.price*product?.discount/100).toPrecision(4); 

  return (
    <div>
        {/* ProductPage */}
        <div className='ProductBox'>
            <div className='ProductImgContainer'>
                <img className='ProductImg' src={product.images[0].img} alt='Shoes'></img>
            </div>
            <div className='ProductDetails'>
                <span className='pname'> <strong>{product?.name}</strong> </span>
                <span className='multiCategory'> {product?.category?.map((type) => (<span className='categoryTags'>{type}</span>))} </span>
                <span>Ratings : <span> <strong> {product?.averageStar} </strong> </span> out of 5 star</span> 
                <hr className='hrLine'/>
                <span className='discounttag'> -{product.discount}% <span className='priceTag'>₹{dPrice}</span> </span>
                <span className='productMRP'>M.R.P.: <s>₹ {product?.price} </s></span>
                <span> Inclusive of all taxes | <span><strong> No of Order: {product?.noOfOrder} </strong></span></span>
                <span className='colorHeading'><strong> Color: </strong></span>
                <span className='multiColor'> {product?.remarks?.colors?.map((type) => (<ColorStyle type={type.color}  selectedColor={selectedColor} handleChange={handleChange}/>))} </span>
                <div> <button className='addToCartBtn' onClick={addToCart}><strong>Add to Cart</strong></button></div>
                <span> <button className='buyNowBtn'><strong>Buy Now</strong></button></span>
                
            </div>
            <div className='ProductDetailDiscription'>
              <span className='dscriptionHeader'> <strong>Product Discription:</strong> </span>
                <span className='productBand'> <strong>Brand:</strong> <span>{product.brand}</span> </span>
                <span className='productDiscription'> {product.description}</span></div>
        </div>
    </div>
  )
}

export default ProductPage