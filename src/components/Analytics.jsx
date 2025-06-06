import React from 'react'

const Analytics = () => {
  return (
    <section className='section py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 items-center'>
      <div className="w-[280px] h-[612px] md:w-[764px] md:h-[464px] lg:w-[1137px] lg:h-[464px] flex flex-col md:flex-row md:items-center justify-center text-white">
            <div className='order-1 md:order-1 w-full md:w-1/2 flex justify-center items-center'>
                <img src="/analytics-img.png" loading='lazy' alt="analytics image" className='w-[200px] md:w-[350px] lg:w-[400px] h-auto' />
            </div>
            <div className='order-2 md:order-2 w-full md:w-1/2  '>
            <h2 className='text-gray-300 font-normal tracking-widest font-outfit text-[16px] flex flex-col w-[100px]  md:w-[100px]  md:flex-row lg:w-[136px] gap-4 md:gap-8 lg:gap-12  my-5'>ANALYTICS</h2>
                <h1 className='text-3xl md:text-[36px] lg:text-[50px] color-white font-medium my-5 leading-none'>Built-in Analytics To Track Your Nfts</h1>
                <p className='font-roboto text-gray-300 text-base md:text-[18px] md:w-[334px] lg:w-[415px]'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
                <div className="flex flex-col my-5 gap-2 md:flex-row md:gap-4">
                    <button className='text-base w-[185px] h-[46px] md:w-[243px] md:h-[64px] bg-[#8080D6] rounded-full lg:text-xl lg:font-normal hover:bg-transparent hover:border-2 hover:border-[#8BD2D2] hover:scale-105  transition-transform duration-300 ease-in-out'>view our pricing</button>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default Analytics
