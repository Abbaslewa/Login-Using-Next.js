import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='flex justify-center gap-6 bg-blue-300 p-4'>
        <Link href="/">Home</Link>
        <Link href="/about">AboutMe</Link>
        <Link href="/contact">Contact</Link>
    </div>
  )
}
export default Navbar 