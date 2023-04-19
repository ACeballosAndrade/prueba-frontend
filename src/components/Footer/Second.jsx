import React from 'react'
import { Link } from 'react-router-dom'

const Second = () => {
  return (
    <div className='grid grid-cols-1 gap-3'>
      <h1>
        USEFULL LINKS
      </h1>
      <div className='border border-primary w-28 h-0'></div>
      <ul className='grid grid-cols-1 gap-5'>
        <li>
          <Link>About Us</Link>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>Portfolio</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
      </ul>
    </div>
  )
}

export default Second