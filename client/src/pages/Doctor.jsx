import React from 'react'
import DoctorLayout from '../layouts/DoctorLayout'
import HeroSection from '../components/doctorComponents/HeroSection'
import AboutSection from '../components/doctorComponents/AboutSection'
import ServiceSection from '../components/doctorComponents/ServiceSection'
import FaqSection from '../components/doctorComponents/FaqSection'
import MessageSection from '../components/doctorComponents/MessageSection'
import ContactSection from '../components/doctorComponents/ContectSection'
import VideoSection from '../components/doctorComponents/VideoSection'
import HighlightSection from '../components/doctorComponents/HighlightSection'

function Doctor() {
  return (
    <DoctorLayout>
      <HeroSection/>
      <ServiceSection/>
      <AboutSection/>
      <HighlightSection/>
      <VideoSection/>
      <FaqSection/>
      <ContactSection/>
      <MessageSection/>
    </DoctorLayout>
  )
}

export default Doctor
