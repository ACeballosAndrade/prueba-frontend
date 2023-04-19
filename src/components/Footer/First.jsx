import React from 'react'
import Logo from '../../assets/logo_negativo.png'

const First = () => {
  return (
    <div className='grid grid-cols-1 gap-3'>
      <div>
        <img src={Logo} alt="logo" className="md:cursor-pointer h-5" />
      </div>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue... <br/><br/>Sed arcu non odio euismod lacinia at quis risus sed. Nisi est sit amet facilisis magna.
      </p>
      
    </div>
  )
}

export default First