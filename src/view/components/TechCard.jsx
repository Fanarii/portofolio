import React from 'react'

// eslint-disable-next-line react/prop-types
const TechCard = ({ label, icon, link }) => (
    <a href={link} rel='noreferrer' target='_blank' className='transtition card flex p-2 items-center gap-4 ring-1 rounded-md ring-fourth hover:ring-third hover:text-third cursor-pointer'>
        <img src={icon} alt={`${label} Logo`} className='h-8 w-8' />
        <p>{label}</p>
    </a>
)

export default TechCard
