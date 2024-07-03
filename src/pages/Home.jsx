import React from 'react'
import { useAuth } from '../contexts/authContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { currentUser } = useAuth();
  return(
    <>
      <h2>This is the default home page</h2>
      {currentUser ? <h2> Hello {currentUser.email}, you are now logged in.</h2>
      : <h2> please sign in</h2>}
      {currentUser ? <Link to="/update-profile"><button>Update Profile</button></Link> : <></>}
    </>
  );
}