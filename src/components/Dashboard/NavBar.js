import React from 'react'
import WebLogo from './WebLogo'
import "./NavBar.css"
import SearchBar from './SearchBar'
import Account from './Account'
import Cart from './Cart'
import Filter from './Sort'

function NavBar() {
  return (
    <div className='nav'>
        <div className='weblogoDiv'>
            <WebLogo />
        </div>
        <div className='srcBarDiv'>
            <SearchBar />
        </div>
        
        <div className='accDiv'>
            <Account />
        </div>
        <div className='cartDiv'>
            <Cart />
        </div>
    </div>
  )
}

export default NavBar