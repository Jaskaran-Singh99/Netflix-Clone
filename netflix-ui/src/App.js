import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Tvshows from './pages/Tvshows'
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Signup from './pages/Signup';
import Player from './pages/Player';
import Movies from './pages/Movies';

import './index.css'
import { Mylist } from './components/list';
import {Userliked} from './pages/Userliked'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path='/' element={<Netflix></Netflix>}></Route>
        <Route  exact path='/login' element={<Login></Login>}></Route>
        <Route exact path='/player' element={<Player></Player>}></Route>
        <Route exact path='/movies' element={<Movies></Movies>}></Route>
        <Route exact path='/tv' element={<Tvshows></Tvshows>}></Route>
        <Route exact path='/mylist' element={<Userliked></Userliked>}></Route> 
        <Route  exact path='/signup' element={<Signup ></Signup>}></Route>
      </Routes>
    </BrowserRouter>
    // <div><Login></Login></div>
  );
}

export default App;
