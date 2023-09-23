import React from 'react'
import {CardSlider} from '../components/CardSlider'
export default function Slider({movies}) {
  function getMoviesSliced(from, to){
    return movies.slice(from,to)
  }

  return (
  
      <>
      <CardSlider title='Trending Now' data={getMoviesSliced(0, 10)}></CardSlider>
      <CardSlider title='New Releases' data={getMoviesSliced(10, 20)}></CardSlider>
      <CardSlider title='Blockbuster Movies' data={getMoviesSliced(20, 30)}></CardSlider>
      <CardSlider title='Popular Movies' data={getMoviesSliced(30, 40)}></CardSlider>
      <CardSlider title='Action Movies' data={getMoviesSliced(40, 50)}></CardSlider>
      <CardSlider title='Epics' data={getMoviesSliced(50, 60)}></CardSlider>
      </>
  )
}
