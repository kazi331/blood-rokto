import { FormControlLabel, Switch, Tooltip } from '@mui/material';
import axios from 'axios';
import { FormikValues, useFormik } from 'formik';
import { MuiTelInput, MuiTelInputInfo } from 'mui-tel-input';
import Head from 'next/head';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { bloodGroups, days, months, years } from '../data/data';
import { countries } from '../data/countries';
import { ProfileInputs } from '../DataTypes';
import { Spinner } from '../page-components/Icons';
import styles from '../styles/Update.module.scss';

const Update = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [phone, setPhone] = useState('')
  const [phoneInfo, setPhoneInfo] = useState<MuiTelInputInfo | any>({
    countryCallingCode: "880",
    countryCode: "BD",
    nationalNumber: "1612178331",
    numberValue: "+8801612178331",
    reason: "input",
  })

  let user;
  const formik = useFormik<FormikValues>({
    initialValues: {
      country: 'Bangladesh',
      phone: '',
      first_name: '', last_name: '',
      blood: '',
      is_available: false,
      dobD: '', dobM: '', dobY: '',
      lastD: '', lastM: '', lastY: '',
      city: '', state: '', street: '',
    },
    onSubmit: async (values) => {
      // setLoading(true);
      user = {
        first_name: values.first_name,
        last_name: values.last_name,
        blood: values.blood,
        phone: [phone, phone.replaceAll(' ', '')],
        phoneInfo,
        address: { city: values.city, street: values.street, state: values.state, country: phoneInfo?.countryCode || 'BD' },
        dob: values.dobY + "-" + values.dobM + "-" + values.dobD,
        last_donate: values.lastY + "-" + values.lastM + "-" + values.lastD,
        is_available: values.is_available
      }
      console.log(values)
      console.log(user)

      // try {
      //   const res = await axios.post(`https://apiblood.herokuapp.com/api/blooddonor`, user)
      //   console.log(res.data.status)
      //   if (res.data.status === 'success') toast.success('Doner Registered!')
      //   setLoading(false)
      // } catch (err) {
      //   console.log(err)
      //   setLoading(false)
      // }
    },
    validateOnChange: true,
  });
  const { values, handleChange, handleBlur, handleReset, handleSubmit } = formik;

  const handlePhone = (newphone: string, newInfo: {}) => {
    setPhone(newphone);
    setPhoneInfo(newInfo);
  }

  return (
    <div className='bg-gray-200'>
      <Head>
        <title>Update Profile</title>
      </Head>
      {/* <PageHeader title="Register As a Doner" page="update-profile" /> */}
      <div className="container mx-auto flex items-center justify-center py-20 px-4 " >
        <div className="py-4 min-w-min p-8 bg-white shadow-lg">
          <h2 className='text-3xl font-bold text-center py-4'>Register As Doner</h2>
          <form onSubmit={handleSubmit} className={styles.updateForm}>

            {/* Form fields  */}
            < div className="flex flex-col gap-6" >

              {/* Name field  */}
              <div className={styles.field} >
                <label className={styles.fieldLabel} htmlFor="first_name">Full Name</label>
                <div className={styles.fieldInput} >
                  <div>
                    <input onChange={handleChange} value={values.first_name} type="text" id="first_name" placeholder='First name' required />
                  </div>
                  <div>
                    <input onChange={handleChange} value={values.last_name} type="text" id="last_name" placeholder='Last name' required />
                  </div>
                </div>
              </div>

              {/* DOB field  */}

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="dobM">Date of birth</label>
                <div className={styles.fieldInput}>
                  <select onChange={handleChange} value={values.dobD} className={styles.day} name="dobD" id="dobD" placeholder='day' required>
                    <option value="" disabled >Day</option>
                    {days.map((day) => <option key={day} value={day}>{day}</option>)}
                  </select>
                  <select onChange={handleChange} value={values.dobM} className={styles.month} name="dobM" id="dobM" placeholder='month' required>
                    <option value="" disabled >Month</option>
                    {months.map((month) => <option key={month.value} value={month.value}>{month.name}</option>)}
                  </select>
                  <select onChange={handleChange} value={values.dobY} className={styles.year} name="dobY" id="dobY" placeholder='year' required>
                    <option value="" disabled >Year</option>
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
                  <select onChange={handleChange} value={values.blood} name="blood" id="blood" placeholder='Blood' required>
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map((group) => <option key={group.value} value={group.value}> {group.name}</option>)}
                  </select>
                </div>
              </div>

              {/* Last Donation field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="donateM">Last Donate <span className='text-xs'>(Optional)</span></label>
                <div className={styles.fieldInput}>

                  <select onChange={handleChange} value={values.lastD} className={styles.day} title="Select Day" name="lastD" id="lastD" >
                    <option value="" disabled >Day</option>
                    {days.map((day) => <option key={day} value={day}>{day}</option>)}
                  </select>

                  <select onChange={handleChange} value={values.lastM} className={styles.month} title="Select Month" name="lastM" id="lastM" >
                    <option value="" disabled >Month</option>
                    {months.map((month) => <option key={month.value} value={month.value}> {month.name} </option>)}
                  </select>

                  <select onChange={handleChange} value={values.lastY} className={styles.year} title="Select Year" name="lastY" id="lastY" >
                    <option value="" disabled >Year</option>
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
                  {/* <input onChange={handleChange} value={values.phone} type="tel" maxLength={11} minLength={11} pattern="[0-9]{11}" id="phone" name="phone" placeholder='phone number (11 digits)' /> */}
                  <MuiTelInput
                    required
                    className={styles.phoneNumber}
                    style={{ borderRadius: '0' }}
                    placeholder='+880 01612178331'
                    value={phone}
                    onChange={handlePhone}
                    defaultCountry="BD"
                    label="Phone" id="phone" name="phone"
                    aria-label='phone'
                  />
                </div>
              </div>

              {/* Address field  */}
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="street">Address</label>
                <div className={styles.fieldInput}>
                  <div className="flex flex-col w-full gap-y-2">
                    <input onChange={handleChange} value={values.street} type="text" id="street" placeholder='Street' />
                    <input onChange={handleChange} value={values.city} type="text" id="city" placeholder='City' required />
                    <input onChange={handleChange} value={values.state} type="text" id="state" placeholder='State/Province' />
                    {/* <select onChange={handleChange} value={values.country} name="country" id="country" title="Country" required>
                      {countries.map((country) => <option key={country.code} value={country.code}>{country.name}</option>)}
                    </select> */}
                  </div>
                </div>
              </div>

              {/* Available button */}
              <div className={styles.field}>
                <div className={styles.fieldInput}>
                  <FormControlLabel
                    value={values.is_available}
                    onChange={handleChange}
                    id="is_available"
                    name="is_available"
                    className="flex itemc justify-between w-full m-0 available" labelPlacement='start' control={<Switch />}
                    label={<Tooltip title="Are you physically ready to donate blood?"><span className='select-none'>Available</span></Tooltip>}
                  />
                </div>
              </div>
            </div>

            <button disabled={loading} className={` ${loading && 'bg-opacity-50'} w-full bg-primary py-2 text-white font-bold mt-8`} type="submit"> {loading && <Spinner />} Update Profile</button>
          </form>

        </div >
      </div >
    </div >
  )
}

export default Update;


// Update.getLayout = function getLayout(page: ReactElement){
//   return <Layout>{page}</Layout>
// }

