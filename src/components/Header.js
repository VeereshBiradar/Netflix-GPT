import React from 'react'
import { Netflix_Logo } from '../utils/Images'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={Netflix_Logo} alt="netflix-logo" />
    </div>
  )
}

export default Header