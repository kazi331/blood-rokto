import moment from 'moment';
import Link from 'next/link';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { bloodGroups, countries } from '../data';
import PageHeader from '../page-components/utils/PageHeader';
import styles from '../styles/Update.module.scss';


type Inputs = {
  name: { fname: string, lname: string }
  city: string, street: string, state: string, country: string
  phone: number, dob: Date, lastDonate: Date, blood: string, available: boolean,
}

const UpdateProfile = () => {
  const [userInfo, setUserInfo] = useState<Inputs | {}>({});
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    const { street, state, country, city, blood, dob, lastDonate, available, phone, name } = data
    const address = { street, state, country, city };
    setUserInfo({ name, address, blood, dob, lastDonate, available, phone })
  }
  console.log(userInfo)

  return (
    <div>
      <PageHeader title="Update Blood Doner Profile" page="update-profile" />
      <div className="container mx-auto flex items-center justify-center py-20" >
        <div className="py-4 min-w-min border p-8">
          <h2 className='text-3xl font-bold text-center py-4'>Blood Ai Organization</h2>
          <form className={styles.updateForm} onSubmit={handleSubmit(onSubmit)}>



            {/* Form fields  */}
            < div className="flex flex-col gap-6" >

              {/* Name field  */}
              <div className={styles.field} >
                <label className={styles.fieldLabel} htmlFor="fname">Full Name</label>
                <div className={styles.fieldInput} >
                  <div>
                    <input {...register("name.fname", { required: true })} type="text" id="fname" placeholder='First name' />
                    {errors.name && <span className={styles.error}>This field is required</span>}
                  </div>
                  <div>
                    <input {...register("name.lname")} type="text" id="lname" placeholder='Last name' />
                    {errors.name && <span className={styles.error}>This field is required</span>}
                  </div>
                </div>
              </div>

              {/* DOB field  */}

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="dobM">Date of birth</label>
                {/* <div className={styles.fieldInput}>
                  <select {...register("dobD")} className={styles.day} name="dobD" id="dobD" placeholder='day' required>

                    {days.map((day) => <option key={day} value={day}>{day}</option>)}
                  </select>
                  <select {...register("dobM")} className={styles.month} name="dobM" id="dobM" placeholder='month' required>

                    {months.map((month) => <option key={month.value} value={month.value}>{month.name}</option>)}
                  </select>
                  <select {...register("dobY")} className={styles.year} name="dobY" id="dobY" placeholder='year' required>
                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div> */}
                <div className={styles.fieldInput}>
                  <input {...register('dob', { required: true })} type="date" min="1980-01-01" max="2023-12-31" />
                </div>
              </div>



              {/* Blood Group field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="blood">Blood Group</label>
                <div className={styles.fieldInput}>
                  <select {...register("blood", { required: true })} name="blood" id="blood" placeholder='day' required>
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map((group) => <option key={group.value} value={group.value}> {group.name}</option>)}
                  </select>
                </div>
              </div>

              {/* Last Donation field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="donateM">Last Donate <span className='text-xs'>(Optional)</span></label>
                {/*  <div className={styles.fieldInput}>
                  <select {...register("donate.day")} className={styles.day} name="day" id="day" >

                    {days.map((day) => <option key={day} value={day}>{day}</option>)}
                  </select>
                  <select {...register("donate.month")} className={styles.month} name="month" id="month" >

                    {months.map((month) => <option key={month.value} value={month.value}> {month.name} </option>)}
                  </select>
                  <select {...register("donate.year")} className={styles.year} name="year" id="year" >

                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div> */}
                <div className={styles.fieldInput}>
                  <input {...register('lastDonate', { required: true })} type="date" pattern="\d{1,2}/\d{1,2}/\d{4}" min="1970-01-01" max="2023-12-31" />
                </div>
              </div>



              {/* Phone Number field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="phone">Phone Number</label>
                <div className={styles.fieldInput}>
                  <input {...register('phone', { required: true })} type="tel" maxLength={11} minLength={11} pattern="[0-9]{11}" id="phone" name="phone" placeholder='phone number (11 digits)' />
                </div>
              </div>


              {/* Address field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="street">Address</label>
                <div className={styles.fieldInput}>
                  <div className="flex flex-col w-full gap-y-2">
                    <input {...register('street', { required: true })} type="text" id="street" placeholder='Street' />
                    <input {...register('city', { required: true })} type="text" id="city" placeholder='City' />
                    <input {...register('state', { required: true })} type="text" id="state" placeholder='State/Province' />
                    <select {...register('country', { required: true })} name="country" id="country" required>
                      {/* <option value="bd" >Bangladesh</option> */}
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
                  <input {...register("available")} type="checkbox" name="available" id="available" />
                  <label className={styles.switchLable} htmlFor="available"></label>
                </span>
              </div>
            </div>

            <button className='w-full bg-primary py-2 text-white font-bold mt-8' type="submit">Update Profile</button>
          </form>

        </div >
      </div >
    </div >
  )
}

export default UpdateProfile;

