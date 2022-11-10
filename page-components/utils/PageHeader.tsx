import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
// import registerBg from '../public/images/blood-donation-camp-1.webp';
import registerBg from '../../public/images/blood-donation-camp-1.webp';

const PageHeader = ({ title, page }: { title: string, page: string }) => {
  return (
    <>
      <div className="text-center " style={{ background: `url(${registerBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="py-28 text-white bg-gray-800 bg-opacity-80">
          <div className="container mx-auto">
            <h1 className='mb-6 text-4xl font-bold'>{title}</h1>
            <p><Link href='/'>Home</Link> / <span className='text-primary'>{page}</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageHeader