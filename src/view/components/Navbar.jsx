import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav className='bg-primary'>
        <button className='text-4xl text-third p-2' onClick={() => setIsOpen(!isOpen)}>☰</button>
        {isOpen
          ? (
            <ul className='text-third text-2xl flex flex-col items-center gap-1'>
                <li><Link className='px-4 py-2 hover:underline' to='/'>Home</Link></li>
                <li><Link className='px-4 py-2 hover:underline' to='/about'>About Me</Link></li>
                <li><Link className='px-4 py-2 hover:underline' to='/projects'>Projects</Link></li>
                <li><Link className='px-4 py-2 hover:underline' to='/contact'>Contact Me</Link></li>
            </ul>
            )
          : ''}
    </nav>
  )
}

export default Navbar
