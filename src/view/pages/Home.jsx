import React from 'react'
import Profile from '../components/Profile'
import TechStack from '../components/TechStack'

const Home = () => {
  return (
    <div className='min-w-screen bg-primary min-h-screen w-full text-fourth md:flex md:flex-col md:items-center'>
        <Profile />
        <TechStack />
    </div>
  )
}

export default Home
