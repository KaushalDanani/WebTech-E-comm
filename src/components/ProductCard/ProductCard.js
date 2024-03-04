import React, { useEffect, useState } from 'react'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

  let discountedPrice = parseFloat(product.price - product.price*product.discount/100).toPrecision(4);
  return (
    <Link to={`/product/${product._id.$oid}`} className={styles.product_card}>
      <div className={styles.image}>
        <img src={product.images[0].img} alt={product.name}/>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          {product.name}
        </div>
        <div className={styles.brand}>
          {product.brand}
        </div>
        <div className={styles.averageStar}>Average Rating: {product.averageStar}/5</div>
        <div className={styles.pricing}>
          <div className={styles.discounted}>
            <span>M.R.P:</span>
            <span className={styles.price}>{discountedPrice}</span>
          </div>
          <div className={styles.original}>
            <span className={styles.price}>{product.price}</span>
          </div>
          <div className={styles.discount}>
            ( {product.discount}% off ) 
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard