import React from 'react'

const CardServices = ({icon, title, description, link}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div>
        <div className="flex items-center justify-start h-24 text-2xl px-4 text-primary">
          {icon}
        </div>
      </div>
      <div className="px-4 py-0">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-4 py-2">
        <a
          href={link}
          className="text-primary font-semibold text-sm hover:text-sky-300 hover:cursor-pointer"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default CardServices