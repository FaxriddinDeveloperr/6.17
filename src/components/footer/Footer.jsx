import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400 text-sm">
            We provide useful content and user-friendly experience for developers and learners.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:underline text-gray-300">About</a></li>
            <li><a href="/contact" className="hover:underline text-gray-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-gray-300">
            <a href="" className="hover:text-white">Facebook</a>
            <a href="" className="hover:text-white">Instagram</a>
            <a href="" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        2025 Faxa Dev. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
