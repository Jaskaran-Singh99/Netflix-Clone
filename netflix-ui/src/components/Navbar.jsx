import React from 'react'
import logo from '../assets/logo.png'
import {Link, useNavigate}from 'react-router-dom'
import { useState } from 'react'
import {FaSearch, FaPowerOff} from 'react-icons/fa'
import {firebaseAuth} from '../utils/firebase-config'
import { signOut } from 'firebase/auth'
import '../beauty/navbar.css'

function Navbar(){
    const links = [
        {name:'Home', link:'/'},
        {name:'TV', link:'/tv'},
        {name:'Movies', link:'/movies'},
        {name:'My List', link:'/mylist'},
    ]
    const [showSearch, setShowSearch] = useState(false)
    const [inputHover, setInputHover] = useState(true)
    const navigate = useNavigate()
  return (
    <div className='container'>
        <nav className='flex nav'>
            <div className='left flex a-center j-center'>
                <div className='brand flex a-center j-center'>
                    <img src={logo} className='logoImg'></img>
                </div>
                    <ul className='links flex'>
                        {links.map(({name, link})=>{
                            return <li key={name}>
                                <Link key={name} to={link}>{name}</Link>
                                </li>
                        })}
                    </ul>
                
            </div>
            <div className='right flex a-center'>
                    <div className={`search ${showSearch ? 'showSearch': ''}`}>
                        <button onClick={()=>{setShowSearch(true)} }> 
                            <FaSearch></FaSearch>
                        </button>
                        <input placeholder='Search'></input>
                    </div>
                    <button onClick={()=>{
                        try{
                            signOut(firebaseAuth)
                            navigate('/login')
                        }
                        catch(err){
                            console.log(err)   
                        }     
                    }}><FaPowerOff></FaPowerOff></button>
                </div>
        </nav>
    </div>
  )
}

export default Navbar