import React from 'react'
import PoliticianFooter from '../components/footers/PoliticianFooter'
import PoliticianHeader from '../components/headers/PoliticianHeader'

function PoliticianLayout({children}) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
        <PoliticianHeader />
      </div>
      <main className="">{children}</main>
      <footer className="mt-auto">
        <PoliticianFooter />
      </footer>
    </div>
  )
}

export default PoliticianLayout
