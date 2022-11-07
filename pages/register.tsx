import { FormikValues, useFormik } from 'formik';
import { useState } from 'react';
import { EyeClose, EyeOpen } from '../page-components/Icons';
import PageHeader from '../page-components/utils/PageHeader';
import styles from '../styles/Register.module.scss';


// TYPE DEFINATION
type SubmitType = {
  preventDefault: () => void;
  target: { value: any; };
}

const Register = () => {
  const [showPass, setShowPass] = useState<boolean>(false);

  const formik = useFormik<FormikValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values: any) => {
      console.log(values);
    }
  });


  const { values, handleBlur, handleChange, handleReset, handleSubmit } = formik;

  return (
    <div>
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
                  <input onChange={handleChange} value={values.name} type="text" id="name" placeholder='Full Name' required />
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
                  <input onChange={handleChange} value={values.password} type={showPass ? 'text' : 'password'} id="password" placeholder='password' required />
                  <span className={styles.eye} onClick={() => setShowPass(!showPass)}> {showPass ? <EyeOpen /> : <EyeClose />} </span>
                </div>
              </div>

            </div>
            <button className='w-full bg-primary py-2 text-white font-bold mt-8' type="submit">Register</button>
          </form>

        </div >
      </div >
    </div >
  )
}

export default Register;