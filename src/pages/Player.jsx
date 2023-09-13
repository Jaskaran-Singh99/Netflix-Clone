import React from 'react';
import {BsArrowLeft} from 'react-icons/bs';
import video from '../assets/videoplayback.mp4'
import { useNavigate } from 'react-router-dom';
import '../beauty/player.css'
function Player() {
    const navigate = useNavigate()
  return (
    <div className='player'>
        <div className='back'>
            <BsArrowLeft onClick={()=>navigate(-1)}></BsArrowLeft>
        </div>
        <video src={video} autoPlay loop controls muted></video>
    </div>
  )
}
export default Player
