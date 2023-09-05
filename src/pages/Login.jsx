import React from "react";
import Header from "../components/Header";
import Background from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../beauty/signup.css";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import {firebaseAuth} from '../utils/firebase-config.js'

const Login = () => {
  const navigate = useNavigate();
  const login = false;
  const [loginForm, setLoginForm] = useState({
    email:'',
    password:''
  })
  const handleLogin = async()=>{
    try{
      await signInWithEmailAndPassword(firebaseAuth, loginForm.email , loginForm.password)
    }
    catch(err){
      console.log(err)
    }
  } 

  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(currentUser){
      navigate('/')
    }
  })
  return (
    <div className="container">
      <Background></Background>
      <div className="content">
        <Header login={login}></Header>
        <div className="loginForm">
          <div className=" flex column a-center j-center">
          <h1 className="a">Login</h1>
            <input className="loginInput"
            placeholder="Enter your Email"
            type="email"
            value={loginForm.email}
            onChange={(e)=>setLoginForm({...loginForm, email:e.target.value})}
            ></input>

            <input className="loginInput"
            placeholder="Enter your password"
            type="password"
            value={loginForm.password}
            onChange={(e)=>{setLoginForm({...loginForm, password:e.target.value})}}
            ></input>
             <button onClick={()=>handleLogin()} className="loginBtn">Login</button>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Login;
