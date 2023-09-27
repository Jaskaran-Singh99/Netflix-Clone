import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { fetchMovies, getUsersLikedMovies } from '../store'
import '../beauty/netflix.css'
import { useDispatch, useSelector } from 'react-redux'
import { firebaseAuth } from '../utils/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { Card } from '../components/Card'
import '../beauty/userliked.css'

export const Userliked = () => {
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
  const movies = useSelector((state)=>state.netflix.movies)
  const dispatch = useDispatch()
  const [email , setEmail] = useState(undefined)
  const navigate = useNavigate()

  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(currentUser){
      setEmail(currentUser.email)
    }
    else{
      navigate('/login')
    }
  })

  useEffect(()=>{
    if(email){
      dispatch(getUsersLikedMovies(email))
    }
  },[email])



  return (
    <>
      <Navbar></Navbar>
      <div className="userContent flex column">
        <h1>My List</h1>
        <div className="flex userGrid">
          {movies.map((movie, index)=>{
            return(
              <Card movieData={movie} index={index} key={movie.id} isLiked={true}></Card>
            )
          })}
        </div>
      </div>
    </>
  )
}
