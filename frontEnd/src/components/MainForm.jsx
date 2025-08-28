import React from 'react'

const MainForm = ({children}) => {
  return (
    <div className='flex items-center justify-center bg-gray-200 m-auto w-[50%] max-h-[50%] h-128 my-[6%] rounded-3xl shadow-lg'>
        {children}
    </div>
  )
}

export default MainForm