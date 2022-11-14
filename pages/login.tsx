import axios from 'axios';
import { FormikValues, useFormik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { EyeClose, EyeOpen } from '../page-components/Icons';
import styles from '../styles/Register.module.scss';


const Login = () => {
  const [showPass, setShowPass] = useState<boolean>(false);

  const router = useRouter();

  const formik = useFormik<FormikValues>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values: any) => {
      await axios.post('https://apiblood.herokuapp.com/api/account/login', { ...values, password2: values.password })
        .then(res => {
          console.log(res.data)
          if (res.data.status === 'success') {
            console.log(res.data.status)
            toast.success('Login Success!', { position: 'top-right' })
            setTimeout(() => {
              router.push('/update-profile')
            }, 1000);
          }
        })
        .catch(err => {
          console.log(err.response.data.errors.non_field_errors[0])
          toast.error(err.response.data.errors.non_field_errors[0])
        })
    }
  });


  const { values, handleBlur, handleChange, handleReset, handleSubmit } = formik;

  return (
    <div>
      <Toaster />
      <Head>
        <title>Rokto - Login</title>
      </Head>
      {/* <PageHeader title="Login To Your Account" page="Login" /> */}
      <div className="flex items-center justify-center min-h-screen p-4 md:p-20" >
        <div className="py-4 min-w-min ring-1 ring-gray-200 shadow-xl  p-4 md:p-8">
          <h2 className='text-3xl font-bold text-center py-4'>Blood Ai Organization</h2>
          <form className={styles.registerForm} onSubmit={handleSubmit}  >

            {/* Form fields  */}
            < div className="flex flex-col gap-6" >

              {/* Email field  */}
              <div className={styles.field} >
                <label className={styles.fieldLabel} htmlFor="email">Email</label>
                <div className={styles.fieldInput} >
                  <input onChange={handleChange} value={values.email} onFocus={handleBlur} type="email" id="email" placeholder='Eamil Address' required />
                </div>
              </div>


              {/* Password field  */}
              <div className={styles.field} >
                <label className={styles.fieldLabel} htmlFor="password">Password</label>
                <div className={styles.fieldInput} >
                  <input onChange={handleChange} value={values.password} type={showPass ? 'text' : 'password'} id="password" placeholder='password' required />
                  <span className={styles.eye} onClick={() => setShowPass(!showPass)}> {showPass ? <EyeOpen /> : <EyeClose />} </span>
                </div>
              </div>

            </div>
            <button className='select-none w-full bg-primary py-2 text-white font-bold mt-8' type="submit">Login</button>
          </form>
          <div className="flex justify-between">
          <p className='text-xs text-left select-none'>Back to<Link className='text-primary' href="/"> Home</Link></p>
          <p className='text-xs text-right select-none'>New to Rokto?<Link className='text-primary' href="/register"> Register</Link></p>
          </div>
        </div >
      </div >
    </div >
  )
}

export default Login;