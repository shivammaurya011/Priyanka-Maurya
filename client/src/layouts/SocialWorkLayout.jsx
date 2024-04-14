import React from 'react'
import SocialWorkHeader from '../components/headers/SocialWorkHeader'
import SocalWorkFooter from '../components/footers/SocalWorkFooter'

function SocialWorkLayout({children}) {
  return (
    <div>
      <SocialWorkHeader/>
      {children}
      <SocalWorkFooter/>
    </div>
  )
}

export default SocialWorkLayout
