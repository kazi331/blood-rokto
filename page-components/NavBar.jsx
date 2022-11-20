import {X, Menu} from 'feather-icons-react'
import Link from 'next/link';
import { useState } from 'react';

const pages = [
  { slug: '/', label: 'Home' },
  { slug: '/about', label: 'About' },
  { slug: '/contact', label: 'Contact' },
  { slug: '/campaign', label: 'Campaign' },
  { slug: '/login', label: 'Login' },
  { slug: '/register', label: 'Registration' },
  { slug: '/admin', label: 'Dashboard' },
]


const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='main-nav '>
      <div className="container mx-auto flex flex-wrap justify-between items-center px-2 md:px-4 font-medium text-lg   ">
        <Link href="/" className=' text-3xl font-bold text-white bg-primary p-4'>Blood Ai</Link>

        {/* Desktop Menu  */}
        <div className="hidden lg:flex gap-x-4">
          {pages.map((page, i) => <Link key={i} href={page.slug} className='hover:text-primary  font-thin transition'>{page.label}</Link>)}
        </div>

        {/* mobile menu  */}
        <div onClick={(e) => setToggleMenu(false)} className={`${toggleMenu ? 'min-h-screen w-full' : 'w-0 h-0 overflow-hidden'} fixed top-0 left-0 lg:hidden flex bg-gray-600 bg-opacity-80 z-10 backdrop-blur-sm `}>
          <div className={`${toggleMenu ? 'ml-0' : '-ml-[100vw]'} flex flex-col w-[50vw] max-w-sm transition-all duration-700 bg-gray-900 bg-opacity-95 shadow-black shadow-xl`}>
            <div className="bg-primary bg-opacity-80 text-gray-200 p-6 text-3xl underline underline-offset-4">  Blood Ai</div>
            <div className='flex flex-col p-6'>{pages.map((page, i) => <Link key={i} href={page.slug} className='font-thin text-gray-100 rounded py-1 px-2 transition min-w-max '>{page.label}</Link>)}</div>
          </div>
        </div>

        {/* toggle */}
        <div className="fixed bottom-10 right-6 z-20">
          <button className='block lg:hidden outline-none active:outline-none text-white bg-gray-900 bg-opacity-60 backdrop-blur-lg p-2 text-2xl rounded-3xl shadow shadow-gray-800' onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;