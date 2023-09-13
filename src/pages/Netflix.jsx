import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import backgroundImage from '../assets/home.jpg'
import movieLogo from '../assets/homeTitle.webp'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getGenres } from '../store'
import '../beauty/netflix.css'
import { useDispatch } from 'react-redux'



function Netflix(){
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getGenres())
  },[])

  const navigate = useNavigate()
  return (
    <>
    <Navbar ></Navbar>
    <div className='hero'>
        <img src={backgroundImage} className='backgroundImage'></img>
          <div className='netflixContainer'>
            <img src={movieLogo} className='movieLogo'></img>
          
          <div className='buttons flex'>
            <button className='flex j-center a-center'> <FaPlay onClick={()=>navigate('/player')}></FaPlay>Play</button>
            <button className='flex j-center a-center'><AiOutlineInfoCircle></AiOutlineInfoCircle>More Info</button>
          </div> 
          </div>

          
    </div>
    </>
  )
}

export default Netflix


