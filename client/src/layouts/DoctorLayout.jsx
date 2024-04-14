import React from 'react'
import DoctorHeader from '../components/headers/DoctorHeader'
import DoctorFooter from '../components/footers/DoctorFooter'

function DoctorLayout({children}) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
        <DoctorHeader />
      </div>
      <main className="mt-16">{children}</main>
      <footer className="mt-auto">
        <DoctorFooter />
      </footer>
    </div>
  )
}

export default DoctorLayout
