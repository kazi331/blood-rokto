import Doners from '../../page-components/dashboard/doners'
import Sidebar from '../../page-components/dashboard/Sidebar'

const Page = () => {
  return (<>
    <div className='bg-dark1'>
      <Sidebar />
      <main className='dashboard-content'>
        <Doners />
      </main>
    </div>
  </>)
}

export default Page