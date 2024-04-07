import React from 'react'
import Header from '../components/headers/Header'
import FooterSection from '../components/footers/FooterSection'

function HomeLayout({children}) {
  return (
    <div>
      <Header/>
      {children}
      <FooterSection/>
    </div>
  )
}

export default HomeLayout
