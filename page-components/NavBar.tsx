import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='main-nav shadow'>
      <div className="container mx-auto flex flex-wrap justify-between items-center px-2 md:px-4 lg:px-16 xl:px-0 font-medium text-lg">
        <Link href="/" className=' text-3xl font-bold text-white bg-primary p-4'>Blood Ai</Link>
        <div className="flex flex-wrap gap-x-4">
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