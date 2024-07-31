import React from 'react'
import './Login.css'

export default function Login({dlt}) {
  
  return (
  <div>
    <button className='close-btn' onClick={dlt}>Dlt</button>
    <h3>Login</h3>
    <form action="">
      <label htmlFor="first">UserName:</label>
      <input type="text" id='first' placeholder='Enter Your Name' />
      <label htmlFor="first">Password:</label>
      <input type="text" id="password"  placeholder="Enter your Password" />
      <button>Submit</button>
      <p>Not registered?
                  <a>
                        <b>Create an account</b>
                  </a>
            </p>


    </form>
            
    </div>
  )
}
