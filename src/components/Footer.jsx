import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='bg-black flex justify-center my-5 items-center text-center text-white'>
        <p>© {new Date().getFullYear()} Shams Farabi. All rights reserved.</p>
      </div>
    </div>
  )
}
