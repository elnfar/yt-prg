import React from 'react'

const Button = ({type,onClick,click}) => {
  return (
    <button type={type} onClick={onClick} className='uppercase border-2 p-2'>{click}</button>
  )
}

export default Button