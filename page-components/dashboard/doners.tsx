import axios from 'axios';
import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
// import { doners } from '../../data'
import avatarImg from '../../public/avatars/avatar-female.png'
import { Edit, Trash } from '../Icons';


type DonersType = [
  {
    id: number,
    name: string,
    email: string,
    phone: string,
    city: string,
    is_available: boolean,
    avatar: string,
  }
]

const Doners = () => {
  const [doners, setDoners] = useState([])
  const [loading, setLoading] = useState(false)

  const getDoners = async () => {
    await axios.get('https://apiblood.herokuapp.com/api/accounts')
      .then(res => {
        setDoners(res.data.account)
        setLoading(false)
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDoners();
  }, [])


  if (doners.length < 1) {
    return <p>No doners found!</p>
  }

  return (
    <section className="text-gray-300 bg-dark1 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Doner List</h1>
          <p className=" max-w-lg lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt perferendis, ipsam earum eos nulla corporis illum quidem nemo at.</p>
        </div>
        <div className="xl:w-5/6 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">ID</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 w-4">Avatar</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Name</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">City</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Email</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Phone</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Age</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Joined</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Status</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Action</th>
              </tr>
            </thead>
            <tbody >

              {doners.length && doners?.map(doner => {
                const { id, first_name, last_name, email, phone, date_joined, city, is_available, avatar } = doner;
                return <tr key={id} className="whitespace-nowrap hover:bg-dark-hover pl-2">
                  <td className="px-2 py-3">{id}</td>
                  <td className="px-2 py-3"> <Image className='rounded-full' src={avatarImg.src} width="40" height="40" alt="user-avatar" /> </td>
                  <td className="px-2 py-3">{first_name} {last_name}</td>
                  <td className="px-2 py-3"> {"Cumilla"} </td>
                  <td className="px-2 py-3"> {email}</td>
                  <td className="px-2 py-3"> 01612178331</td>
                  <td className="px-2 py-3"> 25</td>
                  <td className="px-2 py-3"> {moment(date_joined).format('ll')} </td>
                  <td className="px-2 py-3">
                    <span className={`${is_available ? 'text-green-600 bg-green-600' : `text-red-400 bg-red-500`} bg-opacity-5  px-3 py-1 rounded text-sm font-mono`}>
                      {is_available ? 'availabe' : 'unvailable'}
                    </span>
                  </td>
                  <td className="px-2 py-3">
                    <div className='flex gap-2'>
                      <button className='text-red-400 bg-red-500 bg-opacity-10 text-xl p-2 rounded'><Trash /></button>
                      <button className='text-blue-400 bg-blue-500 bg-opacity-10 text-xl p-2 rounded'><Edit /></button>
                    </div>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Doners