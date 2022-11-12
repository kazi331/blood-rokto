import Head from 'next/head'
import React from 'react'
import Tooltip from '../page-components/utils/Tooltip'

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      {/* <h2 className='text-center py-10 font-bold text-xl'>Contact</h2> */}
      <div className="flex items-center gap-4 p-2">
        <div className="border p-2">Hello</div>
        <Tooltip className="flex items-center" content='tooltip text' direction='top' delay={600}>Top</Tooltip>
        <Tooltip className="flex items-center" content='tooltip text' direction='left'>
          <p className='p-10 bg-green-400'>Hello <br /> Bang</p>
        </Tooltip>
        <Tooltip className="flex items-center" content='tooltip text' direction='right'>Right</Tooltip>
        <Tooltip className="flex items-center" content='tooltip text' direction='bottom'>Bottom</Tooltip>
      </div>
    </>
  )
}

export default contact