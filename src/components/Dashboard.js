import React from 'react'
import { ProfileNavbar } from './ProfileNavbar'
import { MainPage } from './MainPage'
import { Projects } from './Projects'
import { Footer } from './Footer'
import { Contact } from './Contact'
import { Languages } from './Languages'

const Dashboard = () => {
  return (
    <div className='min-vh-100'>
        <ProfileNavbar />
        <MainPage />
        <Projects />
        <Languages />
        <Contact />
        <Footer />
    </div>
  )
}

export default Dashboard