import React from 'react';
import "./Login.css";


// login page UI
const Login = () => {
  return (
    <div className='Main'>
    <div className='SignUpbox'>
         <h1>Login In</h1>
         <div className='form'>
        <label className='studentDetail'> Your Name</label><br/>
        <input type='name' placeholder='enter your name' className='inputDetail'/>
        </div>
        <div className='form'>
        <label className='studentDetail'>Password</label><br/>
        <input type='name' placeholder='enter your name' className='inputDetail'/>
        <p className='Forget'>Forget Password</p>
        </div>
        <button className='Click'>let's Start</button>
        <p className='SignUp'>Do you have account? Sign in</p>
    </div>
    </div> 
  )
}

export default Login