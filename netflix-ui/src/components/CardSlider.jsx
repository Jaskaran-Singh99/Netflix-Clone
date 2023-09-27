import React, { useRef, useState } from "react";
import { Card } from "../components/Card";
import '../beauty/cardSlider.css'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const CardSlider = ({ title, data }) => {
  const listRef = useRef();
  const [show, setShow] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  
  
  const handleDirection = (direction)=>{
    let distance = listRef.current.getBoundingClientRect().x- 80
    console.log(sliderPosition)
    if(direction  == 'left' && sliderPosition > 0){
      listRef.current.style.transform = `translateX(${230 + distance}px)`
      console.log('left')
      setSliderPosition(sliderPosition - 1)
    }
    if(direction == 'right' && sliderPosition < 4){
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
      console.log('righta')
      setSliderPosition(sliderPosition + 1)
    }

    // console.log(list)
  }
  return (
    <div
      className="cardslider-container flex column"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <h2>{title}</h2>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !show ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineLeft
            onClick={() => handleDirection("left")}
          ></AiOutlineLeft>
        </div>

        <div className="flex slider " ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} key={movie.id} index={index}></Card>;
          })}
        </div>
        { /* right */}
        <div
          className={`slider-action right ${
            !show ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight
            onClick={() => handleDirection("right")}
          ></AiOutlineRight>
        </div>
      </div>
    </div>
  );
};
