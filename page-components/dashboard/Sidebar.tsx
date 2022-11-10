import { useState } from 'react'
import { Instagram, RightArrow, Twitter } from '../Icons'
import SideItem from './SideItem'

const Sidebar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='bg-dark2 text-gray-100'>
      <div className={`${toggle ? 'w-44' : 'w-16'} transition-all duration-300 relative`}>
        <button className={`${toggle ? 'rotate-180' : 'rotate-0'} absolute -right-3 top-1 bg-gray-700 py-1 pl-1 rounded-3xl shadow-lg`} onClick={() => setToggle(!toggle)}> <RightArrow /> </button>
        <div className="flex flex-col px-3 justify-center pt-8">
          <SideItem toggle={toggle} icon={<Twitter />} label="Twitter" />
          <SideItem toggle={toggle} icon={<Twitter />} label="Twitter" />
          <SideItem toggle={toggle} icon={<Twitter />} label="Twitter" />
          <SideItem toggle={toggle} icon={<Instagram />} label="Instagram" />
          <SideItem toggle={toggle} icon={<Twitter />} label="facebook" />
          <SideItem toggle={toggle} icon={<Twitter />} label="Github" />
          <SideItem toggle={toggle} icon={<Twitter />} label="Twitter" />
          <SideItem toggle={toggle} icon={<Twitter />} label="Twitter" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar