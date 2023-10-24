import React from 'react'

const Profile = () => {
  return (
    <div className="p-5 xl:grid xl:grid-cols-2 xl:gap-8">
      <div className="text-left xl:text-center">
        <div className="mt-5">
          <p className="text-xs text-third">Hello World!</p>
          <h2 className="text-3xl font-semibold">
            I am <span className="text-third">Sigit Fajar Desfian</span>
          </h2>
          <p className="text-sm">A Junior Front-End Web Developer</p>
          <div className="mt-4">
            <button className="bg-third my-2 rounded-full p-3 text-xs text-white">
              HIRE ME
            </button>
            <button className="border-fourth rounded-full p-3 text-xs border-[1px] ml-3">
              MY WORKS
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 xl:mt-0">
        <img className="w-full h-auto rounded-xl" src="./images/profil.png" alt="profile image" />
      </div>
    </div>
  )
}

export default Profile
