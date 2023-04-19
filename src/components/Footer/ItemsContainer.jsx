import React from 'react'
import Item from './Item'
import First from './First'
import Second from './Second'
import Third from './Third'
import Four from './Four'

const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:px-8 px-5 py-16'>
      <First/>
      <Second/>
      <Third/>
      <Four/>
    </div>
  )
}

export default ItemsContainer