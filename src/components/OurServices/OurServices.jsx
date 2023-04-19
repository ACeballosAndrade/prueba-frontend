import React from 'react'
import CardServices from './CardServices'
import {HiOutlineDesktopComputer, HiViewGrid, HiLightningBolt} from 'react-icons/hi'

const OurServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className='flex flex-col gap-3 px-4'>
        <h1 className='font-bold text-4xl'>Our great service</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sunt, eaque dolorem voluptatibus quis ea doloribus, temporibus velit laudantium commodi quisquam quo et veritatis saepe!...</p>
      </div>
      <CardServices
        icon={<HiOutlineDesktopComputer/>}
        title={"Unique"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ex."}
      />
      <CardServices
        icon={<HiViewGrid/>}
        title={"Unique"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ex."}
      />
      <CardServices
        icon={<HiLightningBolt/>}
        title={"Unique"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ex."}
      />
    </div>
  )
}

export default OurServices