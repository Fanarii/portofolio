import React from 'react'

import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="profile md:m-6 md:mt-10 w-full h-full flex flex-col p-5 md:pt-5 md:max-w-[70%] md:flex md:flex-row-reverse md:gap-10 md:rounded-xl md:ring-fourth md:justify-between">
      <div className='flex justify-center'>
        <div className="mt-10 md:mt-0 rounded-full w-50 h-50 md:w-100 md:h-100 object-cover ring-1 ring-fourth overflow-hidden object-bottom">
          <img className="" src="./images/profil.png" alt="profile image" />
        </div>
      </div>
      <div className="text-center md:text-left max-w-lg">
        <div className="mt-5">
          <p className="text-md text-third">Hello World!</p>
          <h2 className="text-4xl font-semibold">
            I am <span className="text-third">Sigit Fajar Desfian</span>
          </h2>
          <p className='mt-1 font-md'>A Web Developer</p>
          <p className='mt-2'>I am currently looking for a company to start my career in, I can take position in either
            back-end or front-end web developer, but I do prefer to work as a front-end web developer
          </p>
          <div className="p-5 md:p-0 md:mt-5">
            <Link to='/about' className="bg-third my-2 rounded-full p-3 text-xs text-white">
              About Me
            </Link>
            <Link to='/projects' className="border-fourth rounded-full p-3 text-xs border-[1px] ml-3 hover:bg-third hover:text-fourth hover:border-0">
              My Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
