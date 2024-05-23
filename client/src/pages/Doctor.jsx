import React from 'react'
import HeroSection from '../components/doctorComponents/HeroSection'
import AboutSection from '../components/doctorComponents/AboutSection'
import ServiceSection from '../components/doctorComponents/ServiceSection'
import FaqSection from '../components/doctorComponents/FaqSection'
import MessageSection from '../components/doctorComponents/MessageSection'
import ContactSection from '../components/doctorComponents/ContectSection'
import VideoSection from '../components/doctorComponents/VideoSection'
import HighlightSection from '../components/doctorComponents/HighlightSection'
import Layout from '../layouts/Layout'

function Doctor() {
  return (
    <Layout>
      <HeroSection/>
      <ServiceSection/>
      <AboutSection/>
      <HighlightSection/>
      <VideoSection/>
      <FaqSection/>
      <ContactSection/>
      <MessageSection/>
    </Layout>
  )
}

export default Doctor
