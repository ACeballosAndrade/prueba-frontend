import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
import {ImLocation2, ImPhone} from 'react-icons/im'
import {TiWorld} from 'react-icons/ti'

const Third = () => {
  return (
    <div className='grid grid-cols-1 gap-3'>
      <h1>
        OUR CONTACTS
      </h1>
      <div className='border border-primary w-28 h-0'></div>
      <div>
        <ul className='grid gap-3'>
          <li>
            <Item
              icono={<ImLocation2/>}
              text="1023 Carolina US,"
              text2="34/5 Leavenworth Street, Us"
            />
          </li>
          <li>
            <Item
              icono={<ImPhone/>}
              text="+1 246 912 5491"
              text2="+1 246 912 5492"
            />
          </li>
          <li>
            <Item
              icono={<TiWorld/>}
              text="support@inbuild.com"
              text2="www.yourcompany.com"
            />
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Third