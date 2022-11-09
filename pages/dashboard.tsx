import React from 'react'
import Doners from '../page-components/dashboard/doners'
import Sidebar from '../page-components/dashboard/Sidebar'

const Index = () => {
  return (<div className='flex'>
    <Sidebar />
    <Doners />
  </div>
  )
}

export default Index