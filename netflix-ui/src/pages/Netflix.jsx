import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import backgroundImage from '../assets/home.jpg'
import movieLogo from '../assets/homeTitle.webp'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'
import { fetchMovies, getGenres } from '../store'
import '../beauty/netflix.css'
import { useDispatch, useSelector } from 'react-redux'



function Netflix(){

  const navigate = useNavigate()
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
  const movies = useSelector((state)=>state.netflix.movies)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getGenres())
  },[])

  useEffect(()=>{
    if(genresLoaded) dispatch(fetchMovies({type:'all'}))
  }, [genresLoaded])

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
    <Slider movies={movies}></Slider>
    
    </>
  )
}

export default Netflix


