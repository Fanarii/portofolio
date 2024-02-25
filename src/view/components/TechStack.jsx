import React, { useState } from 'react'

import reactIcon from '../../icons/react-svgrepo-com.svg'
import htmlIcon from '../../icons/html-5-svgrepo-com.svg'
import cssIcon from '../../icons/css-3-svgrepo-com.svg'
import javascriptIcon from '../../icons/javascript-svgrepo-com.svg'
import expressIcon from '../../icons/express-svgrepo-com.svg'
import gitIcon from '../../icons/git-svgrepo-com.svg'
import postmanIcon from '../../icons/postman-icon-svgrepo-com.svg'
import nodejsIcon from '../../icons/node-js-svgrepo-com.svg'
import mysqlIcon from '../../icons/mysql-svgrepo-com.svg'
import postgresqlIcon from '../../icons/postgresql-svgrepo-com.svg'
import prismaIcon from '../../icons/prisma-svgrepo-com.svg'
import awsIcon from '../../icons/aws-svgrepo-com.svg'
import figmaIcon from '../../icons/figma-svgrepo-com.svg'
import tailwindIcon from '../../icons/tailwind-svgrepo-com.svg'
import sequelizeIcon from '../../icons/sequelize-svgrepo-com.svg'
import webpackIcon from '../../icons/webpack-svgrepo-com.svg'
import jestIcon from '../../icons/jest-snapshot-svgrepo-com.svg'
import eslintIcon from '../../icons/eslint-svgrepo-com.svg'

import TechCard from './TechCard'

const TechStack = () => {
  const [display, setDisplay] = useState('tech')

  return (
    <div className='w-full mt-2 flex flex-col md:items-center'>
      <ul className='transtition flex text-fourth gap-6 font-semibold'>
        <li
          className={`cursor-pointer ${
            display !== 'tools' ? 'text-third scale-110 border-b-2' : 'opacity-50'
          }`}
          onClick={() => setDisplay('tech')}
        >
          Tech Stack
        </li>
        <li
          className={`cursor-pointer ${
            display !== 'tech' ? 'text-third scale-110 border-b-2' : 'opacity-50'
          }`}
          onClick={() => setDisplay('tools')}
        >
          Tools
        </li>
      </ul>

      <div
        className={`mt-4 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:gird-cols-6  ${
          display === 'tech' ? '' : 'hidden'
        }`}
      >
        {display === 'tech' && (
          <>
            <TechCard label="HTML" icon={htmlIcon} link='https://developer.mozilla.org/en-US/docs/Web/HTML'/>
            <TechCard label="CSS" icon={cssIcon} link='https://www.w3.org/Style/CSS/Overview.en.html' />
            <TechCard label="JavaScript" icon={javascriptIcon} link='https://developer.mozilla.org/en-US/docs/Web/javascript' />
            <TechCard label="React" icon={reactIcon} link='https://react.dev/' />
            <TechCard label="Express" icon={expressIcon} link='https://expressjs.com/' />
            <TechCard label="Node.js" icon={nodejsIcon} link='https://nodejs.org/en' />
            <TechCard label="MySQL" icon={mysqlIcon} link='https://www.mysql.com/' />
            <TechCard label="PostgreSQL" icon={postgresqlIcon} link='https://www.postgresql.org/' />
          </>
        )}
      </div>

      <div
        className={`mt-4 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:gird-cols-6 ${
          display === 'tools' ? '' : 'hidden'
        }`}
      >
        {display === 'tools' && (
          <>
            <TechCard label="Git" icon={gitIcon} link='https://github.com/' />
            <TechCard label="Postman" icon={postmanIcon} link='https://www.postman.com/' />
            <TechCard label="Prisma" icon={prismaIcon} link='https://www.prisma.io/' />
            <TechCard label="AWS" icon={awsIcon} link='https://aws.amazon.com/en/' />
            <TechCard label="Figma" icon={figmaIcon} link='https://www.figma.com/' />
            <TechCard label="Tailwind" icon={tailwindIcon} link='https://tailwindcss.com/' />
            <TechCard label="Jest" icon={jestIcon} link='https://jestjs.io/' />
            <TechCard label="Webpack" icon={webpackIcon} link='https://webpack.js.org/' />
            <TechCard label="Sequelize" icon={sequelizeIcon} link='https://sequelize.org/' />
            <TechCard label="Eslint" icon={eslintIcon} link='https://eslint.org/' />
          </>
        )}
      </div>
    </div>
  )
}

export default TechStack
