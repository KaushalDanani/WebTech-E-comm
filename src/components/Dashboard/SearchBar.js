import React, { useState } from 'react'
import "./SearchBar.css"

function SearchBar(props) {

  const [search, setSearch] = useState("");
  const [products,setProducts] = useState([]);


  function SearchHandler() {
    setSearch(document.getElementById('src').value);
  }

  function searchProduct() {
    fetch(`http://localhost:4041/api/products/search/?query=${search}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include other headers if needed
      },
      mode: 'cors', // Ensure the request is a CORS request
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Access the products from the response data
        // console.log(data.products); // This will log the array of products to the console
        setProducts(data.products);

        props.setSrcProducts(data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });

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