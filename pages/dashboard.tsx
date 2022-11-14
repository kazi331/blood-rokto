import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Doners from '../page-components/dashboard/doners'
import Sidebar from '../page-components/dashboard/Sidebar'

const Page = () => {
  return (<>
    <div className='flex'>
      <Sidebar />
      <Doners />
    </div>
  </>)
}

export default Page