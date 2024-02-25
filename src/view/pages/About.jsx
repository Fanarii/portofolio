import React from 'react'
import TechStack from '../components/TechStack'

const About = () => {
  return (
    <div className='bg-primary min-w-screen min-h-screen text-fourth'>
      <h1 className='text-3xl pt-5 px-10 md:text-center'>About Me</h1>
      <div className='flex flex-col w-full p-10 pt-7 items-center'>
        <section className='max-w-3xl'>
            <h2 className='text-xl md:text-center'>Bootcamp Student</h2>
            <p className='md:text-center'>I am a passionate web developer who has successfully completed a
            comprehensive coding bootcamp. Throughout the program, I gained a
            solid understanding of fundamental programming concepts and delved
            into advanced topics such as Progressive Web App (PWA) development,
            testing methodologies, clean code practices, and more.</p>
        </section>
        <section className='my-5 w-full'>
            <h2 className='text-xl md:text-center'>Skill Set</h2>
            <TechStack/>
        </section>
      </div>
    </div>
  )
}

export default About
