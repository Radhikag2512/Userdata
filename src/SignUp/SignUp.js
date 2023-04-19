import React from 'react'
import "./SignUp.css"


// Sign uo page UI
const SignUp = () => {
  return (
    <div className='Main'>
    <div className='SignUpbox'>
        <h1>Sign Up</h1>
        <div className='Info'>
        <div className='form'>
        <label className='studentDetail'>Name</label><br/>
        <input type='name' placeholder='enter your name' className='inputDetail'/>
        </div>
        <div className='form'>
        <label className='studentDetail' >Mobile No.</label><br/>
        <input type='number' placeholder='****'  className='inputDetail'/>
        </div>
        <div className='form'>
        <label className='studentDetail'>User ID</label><br/>
        <input type='userID' placeholder='enter your ID'  className='inputDetail'/>
        </div>
        <div className='form'>
        <label className='studentDetail'>Password</label><br/>
        <input type='name' placeholder='****'  className='inputDetail'/>
        </div>
        <div className='form'>
        <label className='studentDetail'> Confirm Password</label><br/>
        <input type='name' placeholder='****'  className='inputDetail'/>
        </div>
        </div>
        <button className='Click'>let's Start</button>
        <p>Already have account? log in</p>
    </div>
    </div>
  )
}

export default SignUp