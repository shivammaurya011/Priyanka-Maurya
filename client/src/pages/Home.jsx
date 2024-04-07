import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import {Button} from 'flowbite-react'
import HeroSection from '../components/home/HeroSection'
function Home() {
  return (
    <HomeLayout>
      <HeroSection/>
    </HomeLayout>
  )
}

export default Home
