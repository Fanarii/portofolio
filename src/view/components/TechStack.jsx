import React, { useState } from 'react'

import reactIcon from '../../icons/react-svgrepo-com.svg'
import htmlIcon from '../../icons/html-5-svgrepo-com.svg'
import cssIcon from '../../icons/css-3-svgrepo-com.svg'
import javascriptIcon from '../../icons/javascript-svgrepo-com.svg'
import expressIcon from '../../icons/express-svgrepo-com.svg'
import gitIcon from '../../icons/git-svgrepo-com.svg'
import postmanIcon from '../../icons/postman-icon-svgrepo-com.svg'

const TechStack = () => {
  const [display, setDisplay] = useState('tech')

  return (
    <>
      <ul className='flex text-fourth mt-5 gap-2'>
        <li
          className={`opacity-50 cursor-pointer ${
            display === 'tech' ? 'opacity-100' : ''
          }`}
          onClick={() => setDisplay('tech')}
        >
          Tech Stack
        </li>
        <li
          className={`opacity-50 cursor-pointer ${
            display === 'tools' ? 'opacity-100' : ''
          }`}
          onClick={() => setDisplay('tools')}
        >
          Tools
        </li>
      </ul>

      <div
        className={`p-5 md:max-w-[70%] gap-4  ${
          display === 'tech' ? 'grid grid-cols-5' : 'hidden'
        }`}
      >
        {display === 'tech' && (
          <>
            <TechCard label="HTML" icon={htmlIcon} />
            <TechCard label="CSS" icon={cssIcon} />
            <TechCard label="JavaScript" icon={javascriptIcon} />
            <TechCard label="React" icon={reactIcon} />
            <TechCard label="Express" icon={expressIcon} />
          </>
        )}
      </div>

      <div
        className={`p-5 md:max-w-[70%] gap-4 grid grid-cols-5 ${
          display === 'tools' ? '' : 'hidden'
        }`}
      >
        {display === 'tools' && (
          <>
            <TechCard label="Git" icon={gitIcon} />
            <TechCard label="Postman" icon={postmanIcon} />
          </>
        )}
      </div>
    </>
  )
}

// eslint-disable-next-line react/prop-types
const TechCard = ({ label, icon }) => (
  <div className='justify-between card flex p-2 items-center gap-4 ring-1 rounded-md ring-fourth hover:ring-third hover:text-third cursor-pointer'>
    <p>{label}</p>
    <img src={icon} alt={`${label} Logo`} className='h-8 w-8' />
  </div>
)

export default TechStack
