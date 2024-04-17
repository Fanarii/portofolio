import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import github from '../../icons/github.svg'
import linkedin from '../../icons/linkedin.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState('home')
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
    setIsActive(location.pathname)
  }, [location.pathname])

  return (
    <nav className='bg-primary min-w-[100%] md:flex md:justify-between'>
      <button
        className='text-4xl text-third p-2 md:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <a href='https://github.com/Fanarii' className='hidden md:flex'>
        <img src={github} alt="github" className='w-10 m-4'/>
      </a>
      <ul
        className={`text-fourth text-1xl flex flex-col items-center 
          md:justify-center md:flex md:items-center gap-1 md:flex-row md:space-x-4 ${
          isOpen ? 'block md:hidden' : 'hidden md:block'
        }`}
      >
        <li className={`py-3 flex flex-col items-center justify-center ${isActive === '/' ? 'opacity-100' : 'opacity-50'}`}>
          <Link className='px-4 py-2 ' to='/'>
            Home
          </Link>
          <div className={`rounded-lg bg-fourth w-7 h-1 ${isActive === '/' ? '' : 'hidden'}`}></div>
        </li>
        <li className={`py-3 flex flex-col items-center justify-center ${isActive === '/about' ? 'opacity-100' : 'opacity-50'}`}>
          <Link className='px-4 py-2' to='/about'>
            About Me
          </Link>
          <div className={`rounded-lg bg-fourth w-7 h-1 ${isActive === '/about' ? '' : 'hidden'}`}></div>
        </li>
        <li className={`py-3 flex flex-col items-center justify-center ${isActive === '/projects' ? 'opacity-100' : 'opacity-50'}`}>
          <Link className='px-4 py-2' to='/projects'>
            Projects
          </Link>
          <div className={`rounded-lg bg-fourth w-7 h-1 ${isActive === '/projects' ? '' : 'hidden'}`}></div>
        </li>
      </ul>
      <a href="https://www.linkedin.com/in/sigit-fajar-desfian-0a226a291/" className='hidden md:flex'>
        <img src={linkedin} alt="" className='w-10 m-3'/>
      </a>
    </nav>
  )
}

export default Navbar
