import React from 'react'
import { useState } from 'react';
import "./Login.css"

export default function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return(
    <div className='login-container'>
      <h2>Login</h2>
      <form>
        <label>Email</label>
        <input type='text' value={email} onChange={handleEmail} />
        <label>Password</label>
        <input type='password' value={password} onChange={handlePassword} />
        <input type='submit' className='btn-submit'/>
      </form>
    </div>
  );
}