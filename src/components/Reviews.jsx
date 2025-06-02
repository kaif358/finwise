import React from 'react'

const Reviews = () => {
  return (
    <section className='section py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 items-center'>
      <div className='flex flex-col items-center justify-center gap-28 md:gap-28 lg:gap-30 text-center'>
        <div className='w-[250px] h-[90px] md:w-[323px] md:h-[104px] lg:w-[567px] lg:h-[150px] flex flex-col  items-center justify-center text-white'>
        <h2 className='text-gray-300 font-normal tracking-widest font-outfit text-[16px] flex flex-col w-[130px]  md:w-[130px] lg:w-[136px] gap-4 md:gap-8 lg:gap-12  my-5'>TESTIMONIALS</h2>
        <h1 className='text-3xl md:text-[36px] lg:text-[50px] color-white font-medium text-center leading-none'>Trusted By Users Around The World</h1>
      </div>
        <div className='flex flex-col md:flex-row lg:flex-row gap-20 md:gap-20 lg:gap-22 justify-center items-center'>
          <div className='bg-[#16134C] text-white rounded-2xl px-6 py-8 max-w-xs text-center shalow-lg   hover:scale-105  transition-transform duration-300 ease-in-out'>
          <img src="testimg1.png" loading='lazy' alt="testimonil image 1"
          className='w-29 h-29 rounded-full mx-auto -mt-[5.5rem] border-4 border-[#121447] bg-white' />
          <h3 className='mt-4 text-dm font-semibold tracking-widest uppercase'>olivia cole</h3>
          <p className='mt-3 text-sm leading-relaxed text-gray-300'>Finwise helped me cut down unnecessary spending and save over ₹15,000 in just 3 months!</p>
        </div>
        <div className='bg-[#16134C] text-white rounded-2xl px-6 py-8 max-w-xs text-center shalow-lg hover:scale-105  transition-transform duration-300 ease-in-out'>
          <img src="testimg2.png" loading='lazy' alt="testimonil image 2"
          className='w-29 h-29 rounded-full mx-auto -mt-[5.5rem] border-4 border-[#121447] bg-white' />
          <h3 className='mt-4 text-dm font-semibold tracking-widest uppercase'>evan White</h3>
          <p className='mt-3 text-sm leading-relaxed text-gray-300'>The analytics dashboard gave me full visibility into my finances — it’s a game changer.</p>
        </div>
        <div className='bg-[#16134C] text-white rounded-2xl px-6 py-8 max-w-xs text-center shalow-lg hover:scale-105  transition-transform duration-300 ease-in-out'>
          <img src="testimg3.png" loading='lazy' alt="testimonil image 3"
          className='w-29 h-29 rounded-full mx-auto -mt-[5.5rem] border-4 border-[#121447] bg-white' />
          <h3 className='mt-4 text-dm font-semibold tracking-widest uppercase'>Jessica Page</h3>
          <p className='mt-3 text-sm leading-relaxed text-gray-300'>I’ve tried budgeting apps before, but Finwise finally made it easy and effective - fully recommended for all.</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
