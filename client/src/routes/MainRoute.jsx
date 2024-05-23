import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Doctor from '../pages/Doctor'
import Politician from '../pages/Politician'
import SocalWork from '../pages/SocalWork'
import Home from '../pages/Home'

function MainRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctor' element={<Doctor/>}/>
      <Route path='/politician' element={<Politician/>}/>
      <Route path='/social-work' element={<SocalWork/>}/>
    </Routes>
  )
}

export default MainRoute
