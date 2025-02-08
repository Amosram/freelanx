import React from 'react'

const Button = ({buttonText}) => {
  return (
    <div className='bg-grad px-6 py-[5px] hover:cursor-pointer shadow-md rounded-[30px] text-gray-100'>
        <p>{buttonText}</p>
    </div>
  )
}

export default Button