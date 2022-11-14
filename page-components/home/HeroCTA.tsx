import Link from 'next/link'
import { ExitIcon } from '../Icons'

const HeroCTA = () => {
  return (
    <div className="container">
      <div className="container flex flex-col md:flex-row px-4 md:absolute -mt-20">
        <div className='flex gap-x-4 md:gap-x-2 items-center justify-between bg-black text-white py-8 px-4'>
          <Link href="/register">
            <h2 className='font-bold text-2xl mb-4'>Register Now</h2>
            <p className='text-sm'>Nor again is there anyone who loves or pursues or desires
              <br /> to obtain pain of itself, because it is pain,</p>
          </Link>
          <Link href="/register" className='p-4 hover:scale-[1.1] transition'><ExitIcon /></Link>
        </div>
        <div className='flex gap-x-4 md:gap-x-2 items-center justify-between bg-primary text-white py-8 px-4'>
          <Link href="/donate">
            <h2 className='font-bold text-2xl mb-4'>Donate Now</h2>
            <p className='text-sm'>Nor again is there anyone who loves or pursues or desires
              <br /> to obtain pain of itself, because it is pain,</p>
          </Link>
          <Link href="/donate" className='p-4 hover:scale-[1.1] transition'><ExitIcon /></Link>
        </div>
      </div>
    </div>
  )
}

export default HeroCTA