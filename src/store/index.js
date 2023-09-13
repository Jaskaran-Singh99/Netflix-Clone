import  {createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import {API_KEY, TMBD_URL} from '../utils/constants'
import axios from 'axios'

const initialState = {
    movies:[],
    genres:[],
    generesLoaded:false
}

export const getGenres = createAsyncThunk('netflix/geners',async()=>{
    const {data:{genres}} = await  axios.get(
        `${TMBD_URL}/genre/movie/list?api_key=${API_KEY}`
    )
    console.log(genres)
    return genres
})
const netflixSlice = createSlice({
    name:'Netflix',
    initialState,
    extraReducer:(builder)=>{
        builder.addCase(getGenres.fulfilled , (state,action)=>{
            state.genres = action.payload
            state.generesLoaded = true
        })
    }
})

export const store =  configureStore({
    reducer:{
        netflix:netflixSlice.reducer,
    }
})