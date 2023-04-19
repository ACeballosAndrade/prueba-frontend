import React from 'react'
import Product from './Product'
import MyProducts from './Products'

const Sells = () => {
  return (
    <div className="flex flex-col justify-center items-center px-3 md:px-40">
      <div>
        <h1 className="flex justify-center text-4xl font-bold">Branding Projects</h1>
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          MyProducts.map((p) => (
            <Product 
              key={p.name}
              imagen={p.imagen}
              titulo={p.titulo}
              subtitulo={p.subtitulo}
            />
          ))
        }
      </div>
      
    </div>
    
  )
}

export default Sells