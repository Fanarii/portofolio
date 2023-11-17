import React from 'react'

import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="flex p-5 mt-5 md:max-w-[70%] md:grid md:grid-cols-2 md:gap-8 md:ring-1 md:rounded-xl md:ring-fourth md:justify-between">
      <div className="text-left md:text-center">
        <div className="mt-5">
          <p className="text-xs text-third">Hello World!</p>
          <h2 className="text-3xl font-semibold">
            I am <span className="text-third">Sigit Fajar Desfian</span>
          </h2>
          <p className="text-sm mt-2">A Junior Front-End Web Developer</p>
          <div className="mt-9">
            <Link className="bg-third my-2 rounded-full p-3 text-xs text-white">
              HIRE ME
            </Link>
            <Link to='/projects' className="border-fourth rounded-full p-3 text-xs border-[1px] ml-3 hover:bg-third hover:text-fourth hover:border-0">
              MY WORKS
            </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className="mt-10 md:mt-0 rounded-full w-44 h-44 object-cover ring-1 ring-fourth overflow-hidden object-bottom">
          <img className="" src="./images/profil.png" alt="profile image" />
        </div>
      </div>
    </div>
  )
}

export default Profile
