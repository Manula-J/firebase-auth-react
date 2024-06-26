import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase/auth';


function Navbar() {
  const { currentUser } = useAuth();

  const onLogOut = async () => {
    if (currentUser) {
      doSignOut();
    }
  }
  return(
    <div className='navbar-container'>
      <h1>Logo</h1>
      <div className='nav-link-container'> 
        {currentUser ? <button className='nav-link' onClick={onLogOut}>Log out</button> 
        : <div>
            <Link to="/login" className='nav-link'>Log in</Link>
            <Link to="/signup" className='nav-link'>Sign up</Link>
          </div>}
        
      </div>
    </div>
  );
}

export default Navbar;