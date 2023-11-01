import React from 'react'
import './CSS/Login.css'

export const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Sign up</h1>
        <div className='login-input'>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='login-page'>Have an account? <span>Login here</span></p>
        <div className='login-agree'>
          <input type='checkbox' name="" id='' />
          <p>By continuing, I agree to the terms and conditions.</p>
        </div>
      </div>
    </div>
  )
}
