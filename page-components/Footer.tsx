import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import footerImg from '../public/rokto.png'
import moment from 'moment';
import { Facebook, Instagram, LinkedIn, RightArrow, Twitter } from './Icons';

const links = [
  { slug: '/service', label: 'Service' },
  { slug: '/about', label: 'About Us' },
  { slug: '/new-campaign', label: 'New Campaign' },
  { slug: '/news', label: 'Latest News' },
  { slug: '/contact', label: 'Contact' },
]

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white select-none'>
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

      {/* bootm footer  */}
      <div>
        <div className="border-t border-gray-800">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex gap-2 xs:gap-0 md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Placeholder</label>
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-800   focus:bg-transparent  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none ">Subscribe</button>
              <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">Bitters chicharrones fanny pack
                <br className="lg:block hidden" />waistcoat green juice
              </p>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <Link href="#" className="text-gray-400">
                <Facebook />
              </Link>
              <Link href="#" className="ml-3 text-gray-400">
                <Twitter />
              </Link>
              <Link href="#" className="ml-3 text-gray-400">
                <Instagram />
              </Link>
              <Link href="#" className="ml-3 text-gray-400">
                <LinkedIn />
              </Link>
            </span>
          </div>
        </div>
        <div className=" bg-gray-500 bg-opacity-5 py-6">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">© 2022 Kazi Shariful Islam—
              <a href="https://twitter.com/dev_kazi" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@dev_kazi</a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">Enamel pin tousled raclette tacos irony</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer