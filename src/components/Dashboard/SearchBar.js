import React, { useState } from 'react'
import "./SearchBar.css"

function SearchBar() {

    const [search,setSearch] = useState("");

    function SearchHandler(event){
        setSearch(event.value);
    }

  return (
    <>
    <div className='srcBar'>
        <input className='srcInput' type='text' onChange={SearchHandler} value={search} placeholder='search product' />
    </div>
    <button className='srcBtn'>
        <div className='srcIcon'></div>
    </button>
    </>
  )
}

export default SearchBar