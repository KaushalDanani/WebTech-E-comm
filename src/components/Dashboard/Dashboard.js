import React from 'react'
import NavBar from './NavBar'
import "./Dashboard.css"
import Filter from './Sort'

function Dashboard() {
  return (
    <>
    <div>
        <NavBar />
    </div>
    <div>
        <Filter />
    </div>
    </>
  )
}

export default Dashboard