import React from 'react'

const Product = ({imagen, titulo, subtitulo}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden items-center hover:cursor-pointer">
      <img src={imagen} alt={titulo} className="w-56 h-52 object-cover mx-auto" />
      <div className="p-4">
        <h2 className="text-2xl text-center font-bold mb-2">{titulo}</h2>
        <p className="text-gray-600">{subtitulo}</p>
      </div>
    </div>
  )
}

export default Product