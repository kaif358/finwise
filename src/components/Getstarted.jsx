import React from 'react'

const Getstarted = () => {
  return (
    <section className='section py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16'>
        <div className='w-full max-w-[1065px] flex flex-col items-center text-center rounded-[24px] p-6 gap-5 md:p-12 lg:p-14' style={{ background: "linear-gradient(to right, #6B6BCE, #B8B8C5)",}}>
            
            <h2 className='text-black font-normal tracking-widest font-outfit text-sm md:text-base uppercase'>are you ready?</h2>
            <h1 className='text-[28px] md:text-[34px] max-w-4xl lg:text-[48px] text-white font-bold'>Start Taking Control Of Your Finances Today</h1>
            <button className='text-base bg-black hover:bg-gray-800 hover:scale-105 text-white rounded-full md:text-lg lg:text-xl px-6 py-3 
            md:px-8 md:py-4 lg:px-12 lg:py-5'>Get started For free</button>
            <p className='text-xs md:text-sm lg:text-base text-black/80'>*No credit card required · Cancel anytime</p>
        </div>
    </section>
  )
}

export default Getstarted
