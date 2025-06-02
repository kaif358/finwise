import React from 'react'

const Features = () => {
  return (
    <div className="w-323px h-431px ">
        <div className='text-gray-300 font-outfit text-[20px] flex flex-col m-auto w-[320px]  md:w-[760px]  md:flex-row lg:w-[1020px] gap-4 md:gap-8 lg:gap-12  my-5'>FEATURED ON</div>
        <div className='flex flex-col m-auto w-[320px] h-[340px] md:w-[760px] md:h-[90px] md:flex-row lg:w-[1020px] gap-4 md:gap-8 lg:gap-12 justify-center items-center my-5 bg-[#16134c]'>
          <img src="finwise/b1.png" loading='lazy' alt="brand1" className='md:w-[178px]'/>
          <img src="/brand2.png" loading='lazy' alt="brand2" className='md:w-[178px]'/>
          <img src="/brand3.png" loading='lazy' alt="brand3" className='md:w-[178px]'/>
          <img src="/brand4.png" loading='lazy' alt="brand4" className='md:w-[178px]'/>
        </div>
    </div>
  )
}

export default Features
