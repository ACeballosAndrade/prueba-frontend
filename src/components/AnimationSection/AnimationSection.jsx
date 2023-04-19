import React from 'react'
import CardInfo from './CardInfo'
import ruta from '../../assets/imagen1.jpg'
import rutaTwo from '../../assets/imagen2.jpg'
import CardInfoTwo from './CardInfoTwo'

const AnimationSection = () => {
  return (
    <div className='flex flex-col gap-4 px-3 md:px-40'>
      <CardInfo
        title={"With all package services"}
        description={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam voluptate non hic recusandae, dolore, provident numquam quam ad fugiat eius accusamus minima autem.</p>}
        buttonText={"Read more"}
        ruta={ruta}
      />
      <CardInfoTwo
        title={"With all package services"}
        description={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam voluptate non hic recusandae, dolore, provident numquam quam ad fugiat eius accusamus minima autem.</p>}
        buttonText={"Read more"}
        ruta={rutaTwo}
      />
    </div>
  )
}

export default AnimationSection