import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import footerImg from '../public/rokto.png'
import moment from 'moment';
import { RightArrow } from './Icons';

const links = [
  { slug: '/service', label: 'Service' },
  { slug: '/about', label: 'About Us' },
  { slug: '/new-campaign', label: 'New Campaign' },
  { slug: '/news', label: 'Latest News' },
  { slug: '/contact', label: 'Contact' },
]

const Footer = () => {
  return (
    <footer className='bg-[#111111] text-white'>
      <div className="container mx-auto py-24 flex flex-col md:flex-row flex-wrap gap-x-4 px-4 md:px-0 ">

        {/* About Us  */}
        <div className="flex-1 ">
          <h2 className='mb-10 font-bold text-xl'>About Us</h2>
          <p className='mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quo repellendus rerum sapiente
            dolor repudiandae saepe neque atque est explicabo.</p>
          <p><span className="font-bold">Phone: </span>+880 1612178331</p>
          <p><span className="font-bold">Email: </span>example@sharif.rocks</p>
        </div>

        {/* Quick Links  */}
        <div className="flex-1">
          <h2 className='font-bold text-xl mb-10'>Quick Links</h2>
          <div className="flex flex-col gap-y-1">
            {
              links.map((link, i) => {
                return <Link key={i} href={link.slug}
                  className="hover:text-primary transition flex items-center py-1">
                  <RightArrow /> {link.label}
                </Link>
              })
            }
          </div>
        </div>

        {/* Our Service  */}
        <div className="flex-1">
          <h2 className='font-bold text-xl mb-10'>Out Services </h2>
          <div className="flex flex-col gap-y-1">
            {
              links.map((link, i) => {
                return <Link key={i} href={link.slug}
                  className="hover:text-primary transition flex items-center py-1">
                  <RightArrow /> {link.label}
                </Link>
              })
            }
          </div>
        </div>

        {/* Lates News  */}
        <div className="flex-1">
          <h2 className='font-bold text-xl mb-10'>Latest News</h2>
          <div className="flex flex-col gap-y-6">

            <div className="flex gap-x-2 items-center">
              <Image src={footerImg} width="80" alt="footer image" />
              <div className="flex flex-col gap-y-2">
                <h4 className='max-w-40'>A Formula For Help & Happyness </h4>
                <p className='text-xs'> {moment().format('LL')} </p>
              </div>
            </div>

            <div className="flex gap-x-2 items-center">
              <Image src={footerImg} width="80" alt="footer image" />
              <div className="flex flex-col gap-y-2">
                <h4 className='max-w-40'>A Formula For Help & Happyness </h4>
                <p className='text-xs'> {moment().format('LL')} </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer