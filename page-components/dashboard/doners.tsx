import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import moment from 'moment';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { DonerType } from '../../DataTypes';
import avatarImg from '../../public/avatars/avatar-female.png';
import { Edit, Trash } from '../Icons';


const fetchDoners = () => axios('https://apiblood.herokuapp.com/api/blooddonor')
const THs = ["SL", "Avatar", "Name", "City", "Phone", "Age", "Joined", "Status", "Action"]
const Doners = () => {
  const { data, isLoading, isError, refetch } = useQuery(['get-doners'], fetchDoners)
  const handleDelete = async (id: number) => {
    try {
      const res = await axios.delete(`https://apiblood.herokuapp.com/api/blooddonor/` + id)
      console.log(res.data.status)
      toast('Deleted!')
      // window.location.reload();
      refetch();
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="text-gray-300 bg-dark1 body-font w-full overflow-auto" style={{}}>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Doner List</h1>
          <p className=" max-w-lg lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt perferendis, ipsam earum eos nulla .</p>
          <p className='py-96'>lroem</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse odit, sapiente reiciendis velit culpa unde veniam modi fugit ex? Odit, ipsa iste fugiat ad amet sunt fuga ipsam omnis nesciunt. Earum accusamus eum possimus recusandae quidem, perferendis, ullam nihil ratione aliquam cupiditate veniam saepe et nam rerum. Corrupti ut explicabo enim laboriosam praesentium veritatis quis assumenda expedita fugiat ab?</p>
        </div>
        <div className="xl:w-5/6 w-full mx-auto overflow-auto rounded">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              {/* Head items  */}
              <tr className='bg-gray-800 font-medium text-white text-sm'>
                {THs.map((t, i) => <th key={i} className="head-item">{t}</th>)}
              </tr>
            </thead>
            <tbody >
              {isLoading && <tr>
                <td className='p-10'>loading...</td>
              </tr>}
              {isError && <tr>
                <td className='p-10'>Something is wrong! <br /> See Console</td>
              </tr>}
              {data?.data.bloodDonor.map((doner: DonerType, i: number) => {
                const { id, fname, lname, phone_number, date_joined, city, is_available, avatar } = doner;
                return <tr key={id} className="whitespace-nowrap hover:bg-dark-hover hover:bg-opacity-20 pl-2">
                  <td className="px-2 py-3">{i + 1}</td>
                  <td className="px-2 py-3"> <Image className='rounded-full' src={avatarImg.src} width="40" height="40" alt="user-avatar" /> </td>
                  <td className="px-2 py-3">{fname} {lname}</td>
                  <td className="px-2 py-3"> {city} </td>
                  <td className="px-2 py-3"> {phone_number}</td>
                  <td className="px-2 py-3"> 25</td>
                  <td className="px-2 py-3"> {moment(date_joined).format('ll')} </td>
                  <td className="px-2 py-3">
                    <span className={`${is_available ? 'text-green-600 bg-green-600' : `text-red-400 bg-red-500`} bg-opacity-5  px-3 py-1 rounded text-sm font-mono`}>
                      {is_available ? 'availabe' : 'unvailable'}
                    </span>
                  </td>
                  <td className="px-2 py-3">
                    <div className='flex gap-2'>
                      <button onClick={() => handleDelete(id)} className='text-red-500 bg-red-500 bg-opacity-10 action-btn group'><Trash /> <span className='-left-2 tooltip'>Delete</span></button>
                      <button className='text-blue-400 bg-blue-500 bg-opacity-10 action-btn group'><Edit /> <span className='-left-1 tooltip'>Edit</span></button>
                    </div>
                  </td>
                </tr>
              })}

            </tbody>
          </table>
        </div>
        <p className='py-64'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id optio quidem veritatis architecto distinctio numquam amet voluptates, obcaecati ipsam quas adipisci rem repellendus necessitatibus. Voluptatem vel possimus dignissimos sapiente ullam! Blanditiis deleniti harum tenetur deserunt recusandae aspernatur beatae expedita itaque.</p>
      </div>
    </div>
  )
}

export default Doners