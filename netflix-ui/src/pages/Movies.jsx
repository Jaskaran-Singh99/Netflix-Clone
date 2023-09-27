import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { fetchMovies, getGenres } from '../store'
import '../beauty/netflix.css'
import { useDispatch, useSelector } from 'react-redux'
import { NotAvailable } from '../components/NotAvailable'
import Slider from '../components/Slider'
// import { SelectGenres } from '../components/SelectGenres'


export default function Movies() {
  const navigate = useNavigate()
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
  const movies = useSelector((state)=>state.netflix.movies)
  const genres = useSelector((state)=>state.netflix.genres)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getGenres())
  },[genresLoaded])

  useEffect(()=>{
    console.log('movies effect')
    if(genresLoaded) dispatch(fetchMovies({type:'movie'}))
  }, [genresLoaded])



  return (
    <>
    <div className='movies-container'>
        <div className="navbar">
            <Navbar></Navbar>
        </div>
        {/* <SelectGenres genres={genres} type='movie'></SelectGenres> */}
      
        <div className='data'>
            {movies.length ? <Slider movies={movies} ></Slider> : <NotAvailable></NotAvailable>}
        </div>
    </div>
    </>
  )
}

