import axios from 'axios';
import { FormikValues, useFormik } from 'formik';
import { ReactElement, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import { bloodGroups, days, months, years } from '../data';
import { countries } from '../data/countries';

import { ProfileInputs } from '../DataTypes';
import { Spinner } from '../page-components/Icons';
import { Layout } from '../page-components/Layout';
import PageHeader from '../page-components/utils/PageHeader';
import styles from '../styles/Update.module.scss';

const UpdateProfile = () => {
  const [userInfo, setUserInfo] = useState<ProfileInputs | {}>({});
  const [loading, setLoading] = useState<boolean>(false)
  const formik = useFormik<FormikValues>({
    initialValues: {
      country: 'Bangladesh',
    },
    onSubmit: async (values) => {
      setLoading(true);
      setUserInfo({
        fname: values.first_name,
        lname: values.last_name,
        bloodgroup: values.blood,
        phone_number: values.phone,
        city: values.city,
        state: values.state,
        country: values.country,
        dob: values.dobY + "-" + values.dobM + "-" + values.dobD,
        lastdonatedate: values.lastY + "-" + values.lastM + "-" + values.lastD,
      })
      console.log(userInfo)
      try {
        const res = await axios.post(`https://apiblood.herokuapp.com/api/blooddonor`, userInfo)
        console.log(res.data.status)
        if (res.data.status === 'success') toast.success('Doner Registered!')
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
  });
  const { values, handleChange, handleBlur, handleReset, handleSubmit } = formik;

  return (
    <div>
      <PageHeader title="Register As a Doner" page="update-profile" />
      <div className="container mx-auto flex items-center justify-center py-20" >
        <div className="py-4 min-w-min border p-8">
          <h2 className='text-3xl font-bold text-center py-4'>Register As Doner</h2>
          <form onSubmit={handleSubmit} className={styles.updateForm}>

            {/* Form fields  */}
            < div className="flex flex-col gap-6" >

              {/* Name field  */}
              <div className={styles.field} >
                <label className={styles.fieldLabel} htmlFor="first_name">Full Name</label>
                <div className={styles.fieldInput} >
                  <div>
                    <input onChange={handleChange} value={values.first_name} type="text" id="first_name" placeholder='First name' />
                  </div>
                  <div>
                    <input onChange={handleChange} value={values.last_name} type="text" id="last_name" placeholder='Last name' />
                  </div>
                </div>
              </div>

              {/* DOB field  */}

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="dobM">Date of birth</label>
                <div className={styles.fieldInput}>
                  <select onChange={handleChange} value={values.dobD} className={styles.day} name="dobD" id="dobD" placeholder='day' required>

                    {days.map((day) => <option key={day} value={day}>{day}</option>)}
                  </select>
                  <select onChange={handleChange} value={values.dobM} className={styles.month} name="dobM" id="dobM" placeholder='month' required>

                    {months.map((month) => <option key={month.value} value={month.value}>{month.name}</option>)}
                  </select>
                  <select onChange={handleChange} value={values.dobY} className={styles.year} name="dobY" id="dobY" placeholder='year' required>
                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div>
                {/* <div className={styles.fieldInput}>
                  <input type="date" min="1980-01-01" max="2023-12-31" />
                </div> */}
              </div>

              {/* Blood Group field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="blood">Blood Group</label>
                <div className={styles.fieldInput}>
                  <select onChange={handleChange} value={values.blood} name="blood" id="blood" placeholder='day' required>
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map((group) => <option key={group.value} value={group.value}> {group.name}</option>)}
                  </select>
                </div>
              </div>

              {/* Last Donation field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="donateM">Last Donate <span className='text-xs'>(Optional)</span></label>
                <div className={styles.fieldInput}>

                  <select onChange={handleChange} value={values.lastD} className={styles.day} name="lastD" id="lastD" >
                    {days.map((day) => <option key={day} value={day}>{day}</option>)}
                  </select>

                  <select onChange={handleChange} value={values.lastM} className={styles.month} name="lastM" id="lastM" >
                    {months.map((month) => <option key={month.value} value={month.value}> {month.name} </option>)}
                  </select>

                  <select onChange={handleChange} value={values.lastY} className={styles.year} name="lastY" id="lastY" >
                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div>
                {/* <div className={styles.fieldInput}>
                  <input type="date" pattern="\d{1,2}/\d{1,2}/\d{4}" min="1970-01-01" max="2023-12-31" />
                </div> */}
              </div>



              {/* Phone Number field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="phone">Phone Number</label>
                <div className={styles.fieldInput}>
                  <input onChange={handleChange} value={values.phone} type="tel" maxLength={11} minLength={11} pattern="[0-9]{11}" id="phone" name="phone" placeholder='phone number (11 digits)' />
                </div>
              </div>


              {/* Address field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="street">Address</label>
                <div className={styles.fieldInput}>
                  <div className="flex flex-col w-full gap-y-2">
                    <input onChange={handleChange} value={values.street} type="text" id="street" placeholder='Street' />
                    <input onChange={handleChange} value={values.city} type="text" id="city" placeholder='City' />
                    <input onChange={handleChange} value={values.state} type="text" id="state" placeholder='State/Province' />
                    <select onChange={handleChange} value={values.country} name="country" id="country" required>
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
                  <input onChange={handleChange} value={values.available} type="checkbox" name="is_available" id="available" />
                  <label className={styles.switchLable} htmlFor="available"></label>
                </span>
              </div>
            </div>

            <button disabled={loading} className='w-full bg-primary py-2 text-white font-bold mt-8' type="submit"> {loading && <Spinner />} Update Profile</button>
          </form>

        </div >
      </div >
    </div >
  )
}

export default UpdateProfile;
UpdateProfile.getLayout = function getLayout(page: ReactElement){
  return <Layout>{page}</Layout>
}

