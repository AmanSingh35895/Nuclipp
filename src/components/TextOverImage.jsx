import React from 'react'
import logo from '../assets/images/LOGO_final 3.png'

const TextOverImage = ({text1, text2, image = logo })=> {
  return (
    <div className="relative w-full h-full overflow-hidden border-2 border-gray-300 group rounded-3xl">
      <img
        src={image}
        alt="Placeholder"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-4 text-white space-y-2">
          <h3 className="text-xl font-bold">{text1}</h3>
          <p className="text-sm">{text2}</p>
        </div>
      </div>
    </div>
  )
}

export default TextOverImage