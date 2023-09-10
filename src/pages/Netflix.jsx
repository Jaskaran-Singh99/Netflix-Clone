import React from 'react'
import Navbar from '../components/Navbar'
import backgroundImage from '../assets/home.jpg'
import movieLogo from '../assets/homeTitle.webp'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { useState } from 'react'
import '../beauty/netflix.css'



function Netflix(){
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return ()=>(window.onscroll === null) 
  }

  return (
    <>
    <Navbar isScrolled={isScrolled}></Navbar>
    <div className='hero'>
        <img src={backgroundImage} className='backgroundImage'></img>
          <div className='container'>
            <img src={movieLogo} className='movieLogo'></img>
          
          <div className='buttons flex'>
            <button className='flex j-center a-center'> <FaPlay></FaPlay>Play</button>
            <button className='flex j-center a-center'><AiOutlineInfoCircle></AiOutlineInfoCircle>More Info</button>
          </div> 
          </div>

          
    </div>
    </>
  )
}

export default Netflix


