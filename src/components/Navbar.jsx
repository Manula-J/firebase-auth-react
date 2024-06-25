import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';


function Navbar() {
  return(
    <div className='navbar-container'>
      <h1>Logo</h1>
      <div className='nav-link-container'>
        <Link to="/login" className='nav-link'>Log in</Link>
        <Link to="/signup" className='nav-link'>Sign up</Link>
      </div>
    </div>
  );
}

export default Navbar;