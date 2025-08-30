import React from 'react'

const MainForm = ({children}) => {
  return (
    <div className='flex flex-col justify-center bg-gray-200 m-auto w-[50%] h-128 my-[6%] rounded-3xl shadow-lg text-black font-bold'>
        {children}
    </div>
  )
}

export default MainForm