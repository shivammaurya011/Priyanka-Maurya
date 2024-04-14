import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Landing from '../pages/Landing'
import Doctor from '../pages/Doctor'
import Politician from '../pages/Politician'
import SocalWork from '../pages/SocalWork'
import About from '../pages/doctorPage/About'
import CommingSoonPage from '../pages/doctorPage/CommingSoonPage'
import Contact from '../pages/doctorPage/Contact'

function MainRoute() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/doctor' element={<Doctor/>}/>
      <Route path='/doctor/about' element={<About/>}/>
      <Route path='/doctor/blog' element={<CommingSoonPage/>}/>
      <Route path='/doctor/contact' element={<Contact/>}/>
      <Route path='/politician' element={<Politician/>}/>
      <Route path='/politician' element={<Politician/>}/>
      <Route path='/politician' element={<Politician/>}/>
      <Route path='/politician' element={<Politician/>}/>
      <Route path='/social-work' element={<SocalWork/>}/>
      <Route path='/social-work' element={<SocalWork/>}/>
      <Route path='/social-work' element={<SocalWork/>}/>
      <Route path='/social-work' element={<SocalWork/>}/>
    </Routes>
  )
}

export default MainRoute
