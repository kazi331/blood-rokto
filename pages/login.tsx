import React from 'react'
import styles from '../styles/Login.module.scss'
const Login = () => {
  return (
    <div className='flex items-center justify-center '>
      <div className="container mx-auto flex items-center justify-center" >
        <div className="py-4 w-64 border">
          <h2 className='font-bold text-2xl'>Login</h2>
          <form className={styles.loginForm} action="">
            <div className="flex items-center justify-between">
              <span className='select-none'>Available</span>
              <span>
                <input type="checkbox" name="available" id="available" onClick={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.checked)} />
                <label className={styles.inputLabel} htmlFor="available"></label>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login