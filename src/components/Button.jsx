import React from 'react'

function Button({btext="Click",bg="#222",tc="white", changeColor}) {
  return (
    <button onClick={()=>{changeColor(bg)}} className='w-fit px-5 py-1 rounded-md shadow-inner shadow-white' style={{backgroundColor:bg ,color:tc}}>{btext}</button>
  )
}

export default Button