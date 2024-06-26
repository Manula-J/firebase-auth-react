import { React, useState } from 'react';
import { useAuth } from '../contexts/authContext';
import { Navigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../firebase/auth';


export default function Login() {

  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)
      await doSignInWithEmailAndPassword(email, password)
    }
  }

  return(
    <div className='login-container'>
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input type='text' value={email} onChange={handleEmail} />
        <label>Password</label>
        <input type='password' value={password} onChange={handlePassword} />
        <input type='submit' className='btn-submit'/>
      </form>
    </div>
  );
};