import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
    <div className='flex md:mx-[130px] md:my-[40px] md:px-0 md:py-0 lg:mx-[194px] lg:my-[24px] justify-between items-center px-9 py-6'>
      <h2 className='text-2xl font-bold md:text-12 cursor-pointer'>Finwise</h2>
      <ul className='hidden md:flex space-x-8 text-white text-lg font-semibold md:font-normal'>
        <li className='navlis'>Home</li>
        <li className='navlis'>About</li>
        <li className='navlis'>Contact</li>
        <li className='navlis'>Pricing</li>
      </ul>

      <div className="md:hidden">
        <button className="text-2xl" onClick={() =>{setIsOpen(!isOpen)}}>
          &#9776; 
        </button> 
      </div>

    </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-white text-gray-800 shadow-md">
          <a href='#' className='hover:text-blue-600 md:text-[22px]'>Home</a>
        <a href='#' className='hover:text-blue-600 md:text-[22px]'>About</a>
        <a href='#' className='hover:text-blue-600 md:text-[22px]'>Contact</a>
        <a href='#' className='hover:text-blue-600 md:text-[22px]'>Pricing</a>
        </div>
      )}    
    </>
  )
}

export default Navbar
