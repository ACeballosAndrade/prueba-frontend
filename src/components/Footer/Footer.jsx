import React from 'react'
import ItemsContainer from './ItemsContainer'

const Footer = () => {
  return (
    <footer className='bg-neutral-900 text-white'>
      <ItemsContainer/>
      <div className='grid grid-cols-1 bg-neutral-950 sm:grid-cols-2 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
        <span>©2023 All Rights Reserved.</span>
        <span>Privacy Policy | Terms of Use | Our Support</span>
      </div>
    </footer>
  )
}

export default Footer