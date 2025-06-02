import React from 'react'

const Hero = () => {
  return (
    <section className='section min-h-[calc(100vh-80px)] px-4 sm:px-6 md:px-10 lg:px-16 items-center'>
        <div className="w-[280px] h-[612px] md:w-[764px] md:h-[464px] lg:w-[1137px] lg:h-[464px] flex flex-col md:flex-row md:items-center justify-center text-white">
            <div className='order-1 md:order-2 w-full md:w-1/2 flex justify-center items-centerhidden' >
                <img src="/finance-image.png" alt="finance Illustration" />
            </div>
            <div className='order-2 md:order-1 w-full md:w-1/2  '>                
                <h1 className='text-4xl md:text-[55px] lg:text-[83px] color-white font-bold my-5 leading-none'>Take Control of Your Finances</h1>
                <p className='font-roboto text-base md:text-[18px] md:w-[334px] lg:w-[415px]'>Finwise helps you track your expenses, savings, and budgeting in one simple dashboard.</p>
                <div className="flex flex-col my-5 gap-2 md:flex-row md:gap-4">
                    <button className='text-xs w-[147px] md:w-[160px] md:h-[57px] h-[42px] bg-[#8080D6] hover:bg-transparent hover:border-2 hover:border-[#8BD2D2] hover:scale-105  transition-transform duration-300 ease-in-out rounded-full lg:text-xl lg:font-normal'>Try for Free</button>
                    <button className='text-xs w-[147px] md:w-[160px] md:h-[57px] h-[42px] bg-transparent hover:bg-[#8080D6]  hover:scale-105 transition-transform duration-300 ease-in-out rounded-full lg:text-xl lg:font-normal border border-[#8BD2D2]'>See Features</button>
                </div>
            </div>
        </div>      
    </section>
  )
}

export default Hero
