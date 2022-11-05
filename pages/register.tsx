import React from 'react'
import styles from '../styles/Register.module.scss'
import registerBg from '../public/images/blood-donation-camp-1.webp'
import Link from 'next/link'
import { bloodGroups, months, countries } from '../data'


const start: number = 1950;
const end: number = 2023;
const length = end - start + 1;
const years = Array(length).fill(start).map((x, y) => x + y);
const days = Array.from({ length: 31 }, (x, i) => i + 1);




const Register = () => {

  return (
    <div>
      <div className="text-center " style={{ background: `url(${registerBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="py-28 text-white bg-gray-800 bg-opacity-80">
          <div className="container mx-auto">
            <h1 className='mb-6 text-4xl font-bold'>Register As A Blood Donar </h1>
            <p><Link href='/'>Home</Link> / <span className='text-primary'>register</span></p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center py-20" >
        <div className="py-4 min-w-min border p-8">
          <h2 className='text-3xl font-bold text-center py-4'>Blood Ai Organization</h2>
          <form className={styles.RegisterForm} action="">

            <div className="fields flex flex-col gap-6 sm:gap-4">

              {/* Name field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="fname">Full Name</label>
                <div className={styles.fieldInput}>
                  <input type="text" id="fname" placeholder='First name' required />
                  <input type="text" id="lname" placeholder='Last name' />
                </div>
              </div>

              {/* DOB field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="dobM">Date of birth</label>
                <div className={styles.fieldInput}>
                  <select className={styles.day} name="dobD" id="dobD" placeholder='day' required>
                    <option value="">Day</option>
                    {days.map((day) => <option key={day} value={day}>{day}</option>)}
                  </select>
                  <select className={styles.month} name="dobM" id="dobM" placeholder='day' required>
                    <option value="">Month</option>
                    {months.map((month) => <option key={month} value={month}>{month}</option>)}
                  </select>
                  <select className={styles.year} name="dobY" id="dobY" placeholder='day' required>
                    <option value="">Year</option>
                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div>
              </div>


              {/* Blood Group field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="bGroup">Blood Group</label>
                <div className={styles.fieldInput}>
                  <select name="bGroup" id="bGroup" placeholder='day' required>
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map((group) => <option key={group.value} value={group.value}>{group.name}</option>)}
                  </select>
                </div>
              </div>

              {/* Last Donation field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="donateM">Last Donate <span className='text-xs'>(Optional)</span></label>
                <div className={styles.fieldInput}>
                  <select className={styles.day} name="donateD" id="donateD" >
                    <option value="">Day</option>
                    {days.map((day) => <option key={day} value={day}>{day}</option>)}
                  </select>
                  <select className={styles.month} name="donateM" id="donateM" >
                    <option value="">Month</option>
                    {months.map((month) => <option key={month} value={month}>{month}</option>)}
                  </select>
                  <select className={styles.year} name="donateY" id="donateY" >
                    <option value="">Year</option>
                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div>
              </div>


              {/* Blood Group field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="phone">Phone Number</label>
                <div className={styles.fieldInput}>
                  <input type="number" id="phone" name="phone" placeholder='Phone Number' />
                </div>
              </div>

              {/* Address field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="street">Address</label>
                <div className={styles.fieldInput}>
                  <div className="flex flex-col w-full gap-y-2">
                    <input type="text" id="street" placeholder='Street' />
                    <input type="text" id="city" placeholder='City' />
                    <input type="text" id="state" placeholder='State/Province' />
                    <select name="country" id="country" required>
                      <option value="">Select Country</option>
                      {countries.map((country) => <option key={country.code} value={country.code}>{country.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Available button */}
              <div className="flex items-center justify-between">
                <span>
                  <label htmlFor='available' className='select-none cursor-pointer'>Available</label>
                  <span className='text-xs'> ( Are you available now to donate blood? )</span>
                </span>
                <span>
                  <input type="checkbox" name="available" id="available" />
                  <label className={styles.switchLable} htmlFor="available"></label>
                </span>
              </div>
            </div>

            <button className='w-full bg-primary py-2 text-white font-bold mt-8' type="submit">Register</button>
          </form>
        </div>
      </div >
    </div >
  )
}

export default Register