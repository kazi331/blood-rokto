import { useState } from 'react'
import { Facebook, Instagram, RightArrow, Twitter } from '../Icons'
import SideItem from './SideItem'

const sideItems = [
  { label: 'twitter', slug: '/dashboard', icon: <Twitter /> },
  { label: 'twitter', slug: '/dashboard', icon: <Twitter /> },
  { label: 'twitter', slug: '/dashboard', icon: <Twitter /> },
  { label: 'twitter', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Facebook /> },
  { label: 'Discord', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Instagram', slug: '/dashboard', icon: <Instagram /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
  { label: 'Facebook', slug: '/dashboard', icon: <Twitter /> },
]

const Sidebar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <aside className={`${toggle ? 'w-44' : 'w-16'}  fixed bg-dark2 transition-all duration-300 text-gray-400 font-thin sidebar`}>
      <div className={`  relative sidebar-top`}>
        <button className={`${toggle ? 'rotate-180' : 'rotate-0'} absolute -right-3 top-1 bg-gray-700 py-1 pl-1 rounded-3xl shadow-lg`} onClick={() => setToggle(!toggle)}> <RightArrow /> </button>
        <h2 className='p-4 text-center text-2xl'>{toggle ? 'Blood Ai' : 'BA'}</h2>
      </div>
      <div className="flex flex-col px-3 justify-center pt-4  side-items">
        {sideItems.map((item, i) => {
          return <SideItem key={i} icon={item.icon} label={item.label} slug={item.slug} />
        })}
      </div>
    </aside>
  )
}

export default Sidebar