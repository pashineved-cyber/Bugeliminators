import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-20">
        <div className="container mx-auto px-6 text-center text-gray-600">
          &copy; {new Date().getFullYear()} DocAI. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer