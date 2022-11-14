import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import consultImg from '../../public/images/patient-consultation.webp'




const Consult = () => {
  return (
    <section className='py-10 bg-orange-50/50'>
      <div className="container flex flex-col md:flex-row items-center justify-center gap-x-4">
        <div className="basis-5/12 max-w-md mx-auto md:mx-0" >
          <Image src={consultImg.src} alt="Consult" width={600} height={20}/>
        </div>
        <div className="basis-7/12 max-w-lg p-4 mx-auto md:mx-0 ">
          <h3 className='text-primary pb-4 uppercase'>Help the people in need</h3>
          <h2 className={` text-3xl md:text-4xl lg:text-6xl font-extrabold py-4`}>Welcome to Blood <br /> Doners Club</h2>
          <p className='py-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio et, vel magni ut culpa sunt consequatur libero dolor fugit modi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="flex justify-between max-w-sm">
            <div>
              <span className='flex font-medium'><ChevronDoubleRightIcon className='h-6 w-4 mr-1 text-primary' /> Good Service </span>
              <span className='flex font-medium'><ChevronDoubleRightIcon className='h-6 w-4 mr-1 text-primary' /> Help People </span>
              <span className='flex font-medium'><ChevronDoubleRightIcon className='h-6 w-4 mr-1 text-primary' /> Hygine Tool </span>
            </div>
            <div>
              <span className='flex font-medium'><ChevronDoubleRightIcon className='h-6 w-4 mr-1 text-primary' /> 24hrs Service </span>
              <span className='flex font-medium'><ChevronDoubleRightIcon className='h-6 w-4 mr-1 text-primary' /> Health Check </span>
              <span className='flex font-medium'><ChevronDoubleRightIcon className='h-6 w-4 mr-1 text-primary' /> Blood Bank </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consult