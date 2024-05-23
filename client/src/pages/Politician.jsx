import React from 'react'
import HeroSection from '../components/politicianComponent/HeroSection'
import CommunitySection from '../components/politicianComponent/CommunitySection'
import IndiaSection from '../components/politicianComponent/IndiaSection'
import RegisterSection from '../components/politicianComponent/RegisterSection'
import ObjectiveSection from '../components/politicianComponent/ObjectiveSection'
import SayAboutSection from '../components/politicianComponent/SayAboutSection'
import EventSection from '../components/politicianComponent/EventSection'
import Layout from '../layouts/Layout'

function Politician() {
  return (
    <Layout>
        <HeroSection/>
        <CommunitySection/>
        <IndiaSection/>
        <RegisterSection/>
        <ObjectiveSection/>
        <SayAboutSection/>
        <EventSection/>
    </Layout>
  )
}

export default Politician
