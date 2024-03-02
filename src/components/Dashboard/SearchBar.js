import React, { useState } from 'react'
import "./SearchBar.css"
import pdata from '../../static/productData';

function SearchBar(props) {

  const [search, setSearch] = useState("");
  const [products,setProducts] = useState([]);


  function SearchHandler() {
    setSearch(document.getElementById('src').value);
  }

  function searchProduct() {

    // Convert the keyword to lowercase for case-insensitive matching
    const lowerKeyword = search.toLowerCase();
  
    // Filter the products array based on whether the keyword is present in the name, brand, category, or description
    const filteredProducts = pdata.filter(product =>
      product.name.toLowerCase().includes(lowerKeyword) ||
      product.brand.toLowerCase().includes(lowerKeyword) ||
      product.category.some(category => category.toLowerCase().includes(lowerKeyword)) ||
      product.description.toLowerCase().includes(lowerKeyword)
    );
  
    setProducts(filteredProducts);
    props.setSrcProducts(filteredProducts);
    console.log("SFSF",filteredProducts);
  }


  return (
    <>
      <div className='srcBar'>
        <input className='srcInput' type='text' id='src' onChange={SearchHandler} value={search} placeholder='search product' />
      </div>
      <button className='srcBtn'
        onClick={searchProduct}
      >
        <div className='srcIcon'></div>
      </button>
    </>
  )
}

export default SearchBar