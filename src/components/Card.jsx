import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import video from '../assets/video.mp4'
import {IoPlayCircleSharp} from 'react-icons/io5'
import {RiThumbUpFill, RiThumbDownFill} from 'react-icons/ri'
import {BsCheck} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiChevronDown} from 'react-icons/bi'
import '../beauty/card.css'



export const Card = ({movieData, isLiked=false}) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='card-container' >
      <img src={`https://image.tmdb.org/t/p/w500/${movieData.image}`} alt='movies'
      onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}
      />
      {isHovered &&(
        <div className='hover'>
          <div className='image-video-container'>
            {/* <img src={`https://image.tmdb.org/t/p/w500/${movieData.image}`} alt='movies'
              onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}/> */}
            <video src={video} autoPlay loop muted ></video>
          </div>
          <div className='info-container flex column'>
            <h3 className='name' >
                {movieData.name}
            </h3>
            <div className='icons flex j-between'>
              <div className='controls flex'>
                <IoPlayCircleSharp title='play' ></IoPlayCircleSharp>
                <RiThumbUpFill title='like'></RiThumbUpFill>
                <RiThumbDownFill title='dislike'></RiThumbDownFill>
                {isLiked ?(
                  <BsCheck title='Remove From List'></BsCheck>
                ): (
                  <AiOutlinePlus title='Add To My List'></AiOutlinePlus>
                )}
              </div>
              <div className='info'>
                <BiChevronDown title='More Info'></BiChevronDown>
              </div>
            </div>
            <div className='genres flex'>
              <ul className='flex'>
                {movieData.genres.map((genre)=>{
                    <li key={genre}>{genre}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    
    
      
    
    </div>
  )
}
