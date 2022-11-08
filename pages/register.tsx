import axios from 'axios';
import { FormikValues, useFormik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { EyeClose, EyeOpen, Spinner } from '../page-components/Icons';
import PageHeader from '../page-components/utils/PageHeader';
import styles from '../styles/Register.module.scss';


// TYPE DEFINATION
type SubmitType = {
  preventDefault: () => void;
  target: { value: any; };
}

const Register = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const formik = useFormik<FormikValues>({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
    onSubmit: async (values: any) => {
      setLoading(true)
      await axios.post('https://apiblood.herokuapp.com/api/account/register', values)
        .then(res => {
          console.log(res);
          setLoading(false)
          toast.success('Account Created Successfully!', { position: 'top-right' });
          setTimeout(() => {
            router.push('/login')
          }, 1000);
        })
        .catch(err => {
          setLoading(false)
          console.log(err.response.data.errors.email[0])
          if (err.response.data.status == 'failed') {
            toast.error('User Already Exists!', { position: 'top-right' })
          }
        })
    }
  });


  const { values, handleBlur, handleChange, handleReset, handleSubmit } = formik;

  return (
    <div>
      <Head>
        <title>Rokto - Register</title>
      </Head>
      <Toaster />
      <PageHeader title="Register As A Blood Donar" page="Register" />
      <div className="container mx-auto flex items-center justify-center py-20" >
        <div className="py-4 min-w-min border p-8">
          <h2 className='text-3xl font-bold text-center py-4'>Blood Ai Organization</h2>
          <form className={styles.registerForm} onSubmit={handleSubmit}  >

            {/* Form fields  */}
            < div className="flex flex-col gap-6" >

              {/* Name field  */}
              <div className={styles.field} >
                <label className={styles.fieldLabel} htmlFor="name">Full Name</label>
                <div className={styles.fieldInput} >
                  <div className={styles.name}>
                    <input onChange={handleChange} value={values.first_name} type="text" id="first_name" placeholder='First Name' required />
                  </div>
                  <div className={styles.name}>
                    <input onChange={handleChange} value={values.last_name} type="text" id="last_name" placeholder='Last Name' required />
                  </div>

                </div>
              </div>

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
                  <input onChange={handleChange} value={values.password} type={showPass ? 'text' : 'password'} minLength={8} id="password" placeholder='password' required />
                  <span className={styles.eye} onClick={() => setShowPass(!showPass)}> {showPass ? <EyeOpen /> : <EyeClose />} </span>
                </div>
              </div>

            </div>
            <button disabled={loading} className='w-full flex items-center justify-center bg-primary select-none py-2 text-white font-bold mt-8' type="submit"> {loading && <Spinner />} Register</button>
          </form>
          <p className='text-xs text-right select-none'>Have an account? <Link className='text-primary' href="/login">Login</Link></p>
        </div >
      </div >
    </div >
  )
}

export default Register;