import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../beauty/header.css'

export default function Header(props){
  const navigate = useNavigate()
  return (
    <div className='headerContainer flex a-center j-between'>
      <div className='logo' >
        <img src={logo} ></img>
       
      </div>
      <button onClick={()=>{ navigate(props.login ?'/login' : '/signup') }}>
          {props.login ? 'Login' : 'Signup'}
        </button>
    </div>
  )
}

