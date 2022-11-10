import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='main-nav shadow'>
      <div className="container mx-auto flex flex-wrap justify-between items-center px-2 md:px-4 lg:px-16 xl:px-0 font-medium text-lg">
        <Link href="/" className=' text-3xl font-bold text-white bg-primary p-4'>Blood Ai</Link>
        <div className="hidden md:flex gap-x-4">
          <Link href="/" className='hover:text-primary transition'>Home</Link>
          <Link href="/about" className='hover:text-primary transition'>About</Link>
          <Link href="/campaign" className='hover:text-primary transition'>Campaign</Link>
          <Link href="/contact" className='hover:text-primary transition'>Contact</Link>
          <Link href="/login" className='hover:text-primary transition'>Login</Link>
        </div>

        <div className="flex flex-col md:hidden fixed left-0 bottom-0 w-full bg-gray-500 bg-opacity-10 backdrop-blur text-gray-200 gap-1 p-4">
          <Link href="/" className='hover:text-primary transition'>Home</Link>
          <Link href="/about" className='hover:text-primary transition'>About</Link>
          <Link href="/campaign" className='hover:text-primary transition'>Campaign</Link>
          <Link href="/contact" className='hover:text-primary transition'>Contact</Link>
          <Link href="/login" className='hover:text-primary transition'>Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;