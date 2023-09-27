import React from "react";
import Header from "../components/Header";
import Background from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../beauty/signup.css";
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {firebaseAuth} from '../utils/firebase-config.js'

const Signup = () => {
  const navigate = useNavigate();
  const login = false;
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleForm = async () => {
    try{
      await createUserWithEmailAndPassword(firebaseAuth, formValues.email, formValues.password)
    }
    catch(err){
      console.log(err)
    }
  };

 

  return (
    <div className="container">
      <Background></Background>
      <div className="content">
        <Header login={login}></Header>
        <div className="body flex column a-center">
          <div className="text flex column">
            <h1>Unlimited Movies, TV shows and More</h1>
            <h4>Watch Anywhere, Anytime</h4>
            <h6>Ready to Watch? Signup and Start watching now</h6>
          </div>
          <form className="form">
            <input
              placeholder="Enter Your Email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  email: e.target.value,
                })
              }
            ></input>
            {showPassword ? (
              <input
                placeholder="Enter Your Password"
                name="password"
                type="password"
                value={formValues.password}
                onChange={(e)=>setFormValues({...formValues,password:e.target.value})}
              ></input>
            ) : (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </form>
          <button onClick={() => handleForm()}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
