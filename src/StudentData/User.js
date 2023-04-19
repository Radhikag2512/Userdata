import React, { useEffect } from 'react'
import axios from "axios";
import "./User.css"


// User Page UI
const User = () => {
    const [userData, setUserData] = useEffect([]); 

    // Fetch API with axios
    useEffect(() => {
axios.get('http://interview.wpos.live/api/user/get_users')
.then((res) => {
    // console.log(res.data);
    setUserData(res.data);
})
    },[])


  return (
    <div className='main'>
        <div className='header'>
            <h2>Welcome!</h2>
            <p>User Name</p> 
            <p>User ID</p> 
            <button className='logButton'>Logout</button>
        </div>
        <div className='UserInfo'>
            {/* Display data with map function */}
        {userData && userData.length > 0 && userData.map((user) => {
            return (
                <div className='tableHead'>
                <table>
                    <thead>
                        <tr>
                            <th>Candidate Name</th>
                            <th>User ID</th>
                            <th>Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>User Name 1</td>
                            <td>00001</td>
                            <td>99999 99999</td>
                        </tr>
                    </tbody>
                </table>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default User;