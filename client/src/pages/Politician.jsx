import React from 'react'
import PoliticianLayout from '../layouts/PoliticianLayout'
import HeroSection from '../components/politicianComponent/HeroSection'
import CommunitySection from '../components/politicianComponent/CommunitySection'
import IndiaSection from '../components/politicianComponent/IndiaSection'
import RegisterSection from '../components/politicianComponent/RegisterSection'
import ObjectiveSection from '../components/politicianComponent/ObjectiveSection'
import SayAboutSection from '../components/politicianComponent/SayAboutSection'
import EventSection from '../components/politicianComponent/EventSection'

function Politician() {
  return (
    <PoliticianLayout>
        <HeroSection/>
        <CommunitySection/>
        <IndiaSection/>
        <RegisterSection/>
        <ObjectiveSection/>
        <SayAboutSection/>
        <EventSection/>
    </PoliticianLayout>
  )
}

export default Politician
