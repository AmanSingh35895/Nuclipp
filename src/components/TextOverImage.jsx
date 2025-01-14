import React from 'react'

const TextOverImage = ({text1, text2})=> {
  return (
    <div className="h-[1000px] w-[1000px] bg-red-600 border border-black">
        <p>{text1}</p>
        <p>{text2}</p>
    </div>
  )
}

export default TextOverImage