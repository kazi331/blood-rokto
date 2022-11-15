import styled from '@emotion/styled';
import { alpha, FormControlLabel, Switch } from '@mui/material';
import { pink } from '@mui/material/colors';
import axios from 'axios';
import { FormikValues, useFormik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { EyeClose, EyeOpen, Spinner } from '../page-components/Icons';
import styles from '../styles/Register.module.scss';

const Register = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const formik = useFormik<FormikValues>({
    initialValues: {
      first_name: '',
      last_name: '',
      is_available: false,
      email: '',
      password: '',

    },
    onSubmit: async (values: any) => {
      console.log(values)
      // setLoading(true)
      // await axios.post('https://apiblood.herokuapp.com/api/account/register', { ...values, password2: values.password })
      //   .then(res => {
      //     setLoading(false)
      //     toast.success('Account Created Successfully!', { position: 'top-right' });
      //     setTimeout(() => {
      //       router.push('/login')
      //     }, 1000);
      //   })
      //   .catch(err => {
      //     setLoading(false)
      //     toast.error('Something went wrong!!', { position: 'top-right' })
      //     console.log(err)
      //     if (err.response.data.status == 'failed') {
      //       toast.error('User Already Exists!', { position: 'top-right' })
      //     }
      //   })
    }
  });


  const { values, handleBlur, handleChange, handleReset, handleSubmit } = formik;

  return (
    <div>
      <Head>
        <title>Register - Rokto</title>
      </Head>
      <Toaster />
      {/* <PageHeader title="Register As A Blood Donar" page="Register" /> */}
      <div className="flex items-center justify-center p-4 md:p-10 min-h-screen bg-gray-200" >
        <div className="py-4 min-w-min shadow-lg bg-white p-4 md:p-8">
          <h2 className='text-3xl font-bold text-center py-4'>Blood Ai Organization</h2>
          <form className={styles.registerForm} onSubmit={handleSubmit}  >

            {/* Form fields  */}
            < div className="flex flex-col gap-6" >

              {/* Name field  */}
              <div className={styles.field} >
                <label className={styles.fieldLabel} htmlFor="first_name">Full Name</label>
                <div className={styles.fieldInput} >
                  <div className={styles.name}>
                    <input onChange={handleChange} value={values.first_name} type="text" id="first_name" placeholder='John ' required />
                  </div>
                  <div className={styles.name}>
                    <input onChange={handleChange} value={values.last_name} type="text" id="last_name" placeholder='Doe' required />
                  </div>

                </div>
              </div>

              {/* Email field  */}
              <div className={styles.field} >
                <label className={styles.fieldLabel} htmlFor="email">Email</label>
                <div className={styles.fieldInput} >
                  <input onChange={handleChange} value={values.email} onFocus={handleBlur} type="email" id="email" placeholder='someone@gmail.com' required />
                </div>
              </div>


              {/* Password field  */}
              <div className={styles.field} >
                <label className={styles.fieldLabel} htmlFor="password">Password</label>
                <div className={styles.fieldInput} >
                  <input onChange={handleChange} value={values.password} type={showPass ? 'text' : 'password'} minLength={8} id="password" placeholder='your strong password' required />
                  <span className={styles.eye} onClick={() => setShowPass(!showPass)}> {showPass ? <EyeOpen /> : <EyeClose />} </span>
                </div>
              </div>

              {/* Available button */}
              <div className={styles.field} >
                <FormControlLabel
                  className='flex justify-between w-full m-0'
                  // value={values.is_available}
                  name="is_available"
                  onChange={handleChange}
                  control={
                    <Switch color="error"
                      name='is_available'
                      value={values.is_available}
                    />
                  }
                  label="Available?"
                  labelPlacement="start"
                />
              </div>




            </div>
            <button disabled={loading} className=' w-full flex items-center justify-center bg-primary select-none py-2 text-white font-bold mt-8' type="submit"> {loading && <Spinner />} Create Account</button>
          </form>
          <div className="flex justify-between">
            <p className='text-xs text-left select-none'>Back to<Link className='text-primary' href="/"> Home</Link></p>
            <p className='text-xs text-right select-none'>Have an account? <Link className='text-primary' href="/login">Login</Link></p>
          </div >
        </div >
      </div >
    </div >
  )
}

export default Register;