import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import { Netflix, Login, Signup } from './pages/Netflix';

import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Signup from './pages/Signup';
import Player from './pages/Player';
import './index.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path='/' element={<Netflix></Netflix>}></Route>
        <Route  exact path='/login' element={<Login></Login>}></Route>
        <Route exact path='/player' element={<Player></Player>}></Route>
        <Route  exact path='/signup' element={<Signup ></Signup>}></Route>
      </Routes>
    </BrowserRouter>
    // <div><Login></Login></div>
  );
}

export default App;
