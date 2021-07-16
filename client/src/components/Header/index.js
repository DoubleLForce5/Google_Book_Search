import React from 'react';
import './style.css'

function Header () {
  return (
    <div className="header text-center border border-2 border-dark rounded flex-column mt-4 mb-4 pb-5 pt-2" >
      <h1>(React) Google Books Search</h1>
      <h4>Search for and Save Books of Interest</h4>
    </div>
  )
}

export default Header; 