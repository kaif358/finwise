import React from 'react'

const Footer = () => {
  return (
   <section className="w-full px-4 py-12">
  <footer className="max-w-[1080px] mx-auto text-white">
    <div className="flex flex-col md:flex-row justify-center gap-12">
      {/* Left side: Logo + Links */}
      <div className="flex flex-col md:flex-row gap-20">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold">FINWISE</h2>
        </div>

        {/* Finwise Links */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold">Finwise</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Buy NFTs</a></li>
            <li><a href="#">Sell NFTs</a></li>
          </ul>
        </div>

        {/* Features Links */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold">Features</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Links */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold">Contact</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Email</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Right side: Newsletter */}
      <div className="space-y-2 text-sm">
        <h3 className="font-semibold text-sm">Subscribe to our newsletter</h3>
        <div className="relative flex rounded-full overflow-hidden w-full max-w-[280px]">
          <input
            type="email"
            placeholder="EMAIL"
            className="bg-[#8080D6] text-white px-4 py-2 w-full placeholder-white text-sm focus:outline-none"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-black hover:bg-gray-800 hover:scale-105 rounded-full text-white px-8 py-2 text-sm font-medium">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  </footer>
</section>




  )
}

export default Footer
