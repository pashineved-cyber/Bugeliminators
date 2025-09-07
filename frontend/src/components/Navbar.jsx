import React from 'react'

const Navbar = () => {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">DocAI</div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('upload-section')}
              className="btn-primary"
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar