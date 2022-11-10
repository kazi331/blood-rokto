import { Bars3Icon, BeakerIcon, LockClosedIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { useState } from 'react';
import { CloseRound, ToggleRound } from './Icons';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='main-nav shadow'>
      <div className="container mx-auto flex flex-wrap justify-between items-center px-2 md:px-4 lg:px-16 xl:px-0 font-medium text-lg">
        <Link href="/" className=' text-3xl font-bold text-white bg-primary p-4'>Blood Ai</Link>

        {/* Desktop Menu  */}
        <div className="hidden md:flex gap-x-4">
          <Link href="/" className='hover:text-primary transition'>Home</Link>
          <Link href="/about" className='hover:text-primary transition'>About</Link>
          <Link href="/campaign" className='hover:text-primary transition'>Campaign</Link>
          <Link href="/contact" className='hover:text-primary transition'>Contact</Link>
          <Link href="/login" className='hover:text-primary transition'>Login</Link>
        </div>

        {/* mobile menu  */}
        <div className={`${toggleMenu ? 'h-screen p-4 py-8' : 'h-0 overflow-hidden p-0'} flex transition-all justify-center items-end md:hidden fixed left-0 bottom-0 w-full h-screen bg-gray-900 bg-opacity-80 backdrop-blur-sm text-gray-200 z-10 `}>
          <div className="flex flex-col w-full max-w-xs">
            <Link href="/" className='active:bg-gray-600 active:bg-opacity-40 rounded p-1 px-3 transition min-w-max '>Home</Link>
            <Link href="/about" className='active:bg-gray-600 active:bg-opacity-40 rounded p-1 px-3 transition min-w-max '>About</Link>
            <Link href="/campaign" className='active:bg-gray-600 active:bg-opacity-40 rounded p-1 px-3 transition min-w-max '>Campaign</Link>
            <Link href="/contact" className='active:bg-gray-600 active:bg-opacity-40 rounded p-1 px-3 transition min-w-max '>Contact</Link>
            <Link href="/login" className='active:bg-gray-600 active:bg-opacity-40 rounded p-1 px-3 transition min-w-max '>Login</Link>
          </div>
        </div>

        {/* toggle */}
        <div className="fixed bottom-10 right-10 z-20">
          <button className='block md:hidden  text-white bg-gray-800 bg-opacity-60 backdrop-blur-lg p-2 text-2xl rounded-3xl shadow-sm shadow-gray-900' onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? <XMarkIcon className='w-6 h-6' /> : <Bars3Icon className='w-6 h-6' />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;