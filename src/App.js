import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from './components/ForgotPassword';
import { AuthProvider } from "./contexts/authContext";
import UpdateProfile from './components/UpdateProfile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
