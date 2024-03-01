import React from 'react'
import WebLogo from './WebLogo'
import "./NavBar.css"
import SearchBar from './SearchBar'
import Account from './Account'
import Cart from './Cart'
import Filter from './Sort'
import { Link } from 'react-router-dom'

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
        <Link to={'/cart'} className='cartLink cartDiv'><div className='cartDiv'>
            <Cart />
        </div></Link>
    </div>
  )
}

export default NavBar