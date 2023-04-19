import React from 'react'

const Item = ({icono, text, text2}) => {
  return (
    <div className='flex flex-row items-center gap-2'>
      <div className='bg-neutral-700 w-10 h-10 flex items-center justify-center text-2xl  cursor-pointer hover:text-primary'>
        {icono}
      </div>
      <div className='flex flex-col'>
        <span>{text}</span>
        <span>{text2}</span>
      </div>
    </div>
  )
}

export default Item