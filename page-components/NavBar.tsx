import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';

const pages = [
  { slug: '/', label: 'Home' },
  { slug: '/about', label: 'About' },
  { slug: '/contact', label: 'Contact' },
  { slug: '/campaign', label: 'Campaign' },
  { slug: '/login', label: 'Login' },
  { slug: '/register', label: 'Registration' },
  { slug: '/dashboard', label: 'Dashboard' },
]


const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='main-nav shadow'>
      <div className="container mx-auto flex flex-wrap justify-between items-center px-2 md:px-4 lg:px-16 xl:px-0 font-medium text-lg">
        <Link href="/" className=' text-3xl font-bold text-white bg-primary p-4'>Blood Ai</Link>

        {/* Desktop Menu  */}
        <div className="hidden lg:flex gap-x-4">
          {pages.map((page, i) => <Link key={i} href={page.slug} className='hover:text-primary transition'>{page.label}</Link>)}
        </div>

        {/* mobile menu  */}
        <div onClick={(e) => setToggleMenu(false)} className={`${toggleMenu ? 'bottom-0' : '-bottom-full p-0 m-0 overflow-hidden'} flex top-100 h-screen w-full p-4 py-8 transition-all duration-300 justify-center items-end lg:hidden fixed left-0  bg-gray-900 bg-opacity-80 backdrop-blur-lg text-gray-200 z-10 `}>
          <div className="flex flex-col w-full md:max-w-xs bg-gray-800 bg-opacity-40 p-3 rounded backdrop-blur">
            {pages.map((page, i) => <Link key={i} href={page.slug} className='hover:bg-gray-600 hover:bg-opacity-40 rounded p-1 px-2 transition min-w-max '>{page.label}</Link>)}
          </div>
        </div>

        {/* toggle */}
        <div className="fixed bottom-10 right-6 z-20">
          <button className='block lg:hidden outline-none active:outline-none text-white bg-gray-800 bg-opacity-60 backdrop-blur-lg p-2 text-2xl rounded-3xl shadow-sm shadow-gray-900' onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? <XMarkIcon className='w-6 h-6' /> : <Bars3Icon className='w-6 h-6' />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;