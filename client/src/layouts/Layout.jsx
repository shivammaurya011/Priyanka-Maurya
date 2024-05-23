import React from 'react'
import Header from '../components/headers/Header'
import Footers from '../components/footers/Footers'

function Layout({children}) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
        <Header />
      </div>
      <main className="mt-16">{children}</main>
      <footer className="mt-auto">
        <Footers />
      </footer>
    </div>
  )
}

export default Layout
