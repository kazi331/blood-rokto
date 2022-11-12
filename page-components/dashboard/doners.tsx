import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import moment from 'moment';
import Image from 'next/image';
import toast from 'react-hot-toast';
import avatarImg from '../../public/avatars/avatar-female.png';
import { Edit, Trash } from '../Icons';

type DonerType = {
  id: number;
  fname: string; lname: string;
  phone_number: string;
  date_joined: string;
  city: string;
  is_available: boolean;
  avatar: string;
}
const fetchDoners = () => axios('https://apiblood.herokuapp.com/api/blooddonor')

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
    <div className="text-gray-300 bg-dark1 body-font w-full overflow-auto " style={{}}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Doner List</h1>
          <p className=" max-w-lg lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt perferendis, ipsam earum eos nulla corporis illum quidem nemo at.</p>
        </div>
        <div className="xl:w-5/6 w-full mx-auto overflow-auto rounded">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr className='bg-gray-800 font-medium text-white text-sm'>
                <th className="head-item">SL</th>
                <th className="head-item">Avatar</th>
                <th className="head-item">Name</th>
                <th className="head-item">City</th>
                <th className="head-item">Phone</th>
                <th className="head-item">Age</th>
                <th className="head-item">Joined</th>
                <th className="head-item">Status</th>
                <th className="head-item">Action</th>
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
                  <td className="px-2 py-3">{i}</td>
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
      </div>
    </div>
  )
}

export default Doners