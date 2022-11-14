import Link from 'next/link'
import bg from '../../public/images/1.webp'
import { PlayIcon } from '../Icons'
import PrimaryBtn from '../utils/PrimaryBtn'
const Hero = () => {
  return (
    <section style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="">
      <div className="bg-gradient-to-r from-white">
        <div className="container flex flex-col gap-4 py-40 px-4 md:px-10 lg:px-20">
          <div className="flex items-center gap-x-2">
            <div className="p-4 bg-primary text-white"><PlayIcon /> </div> <p className="text-xl font-bold">Intro Video</p>
          </div>
          <h2 className='text-primary text-xl md:text-2xl font-bold '> Donate Blood, Save Life !</h2>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl mb-8'>Donate Blood And <br /> Inspire Others. </h1>
          <PrimaryBtn className='mt-4' ><Link href="/campaign">Explore Now</Link></PrimaryBtn>
        </div>
      </div>
    </section>
  )
}

export default Hero