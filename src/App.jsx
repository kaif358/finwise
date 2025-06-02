import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Analytics from './components/Analytics'
import Getapp from './components/Getapp'
import Access from './components/Access'
import Reviews from './components/Reviews'
import Getstarted from './components/Getstarted'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative overflow-hidden">      
      <div className="absolute top-[-250px] left-[180px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_#363676,_transparent)] opacity-80 blur-3xl pointer-events-none z-10" />
      <div className="absolute top-[300px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_#5B7489,_transparent)] opacity-20 blur-2xl pointer-events-none z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Analytics />
        <Access />
        <Getapp />
        <Reviews />
        <Getstarted />
        <Footer />
      </div>

    </div>
  )
}

export default App
