import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchDataByGenre } from '../store'

export const SelectGenres = ({genres, type}) => {
    console.log(genres, type)
    const dispatch = useDispatch()
  return (
    <select className='flex' onChange={(e)=>{dispatch(fetchDataByGenre({genre:e.target.value, type}))}}>
        {genres.map((genre)=>{
            return <option value={genre.id} key={genre.id}>{genre.name}</option>
        })
        }
    </select>


  )
}
