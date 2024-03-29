import React from 'react';
import './style.css';

function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">Google Books</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="/">Search</a>
        <a className="nav-link" href="/saved">Saved</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar;