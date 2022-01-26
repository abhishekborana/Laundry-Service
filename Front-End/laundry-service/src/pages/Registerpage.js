import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


export default function Registerpage() {
  // let history = useHistory();
  const [data, setData] = useState({
    name: " ",
    email: " ",
    phone: " ",
    password: " ",
    district: " ",
    address: " ",
    pincode: " ",
    state: " "
  })

  function handlechange(e) {
    // console.log(e.target.value)
    // console.log(e.target.name)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  async function handlesubmit(e) {
    e.preventDefault();
    console.log('regis clicked')
    console.log(data)

    const response = await fetch('http://localhost:5000/register',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      // const response = await axios.post('http://localhost:5000/register', data);
      // console.log(response)

      const userdata = await response.json()
      
      console.log(userdata)

      if (userdata.status){
        localStorage.setItem('token', userdata.token)
        alert('You have succesfully registered')
        // history.push('/dashboard')
      }else{
        alert('There was some problem while registering')
      }

  }
  return <div className='registerpage'>
    <div className='leftregister'>
      <h1 className='registerlefttile'>Laundry service</h1>
      <br />
      <div className='belowlefttitle'>
        <p>Doorstep wash and Dryclean service
          <br />
          <br />
          <br />
          Already have an account?</p>

        <NavLink to={"/"} ><button className='signinbuttonregister'>Login</button></NavLink>
      </div>
    </div>
    <div className='rightregister'>
      <div className=''>
        <h3 className='registertitleright'>REGISTER</h3>
        <form method='' action="" onSubmit={handlesubmit}>
          <div className='division'>
            <div className='field reg-field'>
              <label htmlFor="name">Name</label>
              <input type="text" id='name' name="name" onChange={handlechange} required />
              <div className='under-line'></div>
            </div>

            <div className='field reg-field'>
              <label htmlFor="phone">Phone</label>
              <input type="text" id='phone' name="phone" onChange={handlechange} required />
              <div className='under-line'></div>
            </div>
          </div>
          <div className='division'>
            <div className='field reg-field'>
              <label htmlFor="email">Email</label>
              <input type="email" id='password' name="email" onChange={handlechange} required />
              <div className='under-line'></div>
            </div>

            <div className='field reg-field'>
              <label htmlFor="password">Password</label>
              <input type="password" id='password' name="password" onChange={handlechange} required />
              <div className='under-line'></div>
            </div>
          </div>
          <div className='division'>
            <div className='field reg-field'>
              <label htmlFor="state">State</label>
              <input type="text" id='state' name="state" onChange={handlechange} required />
              <div className='under-line'></div>
            </div>
            <div className='field reg-field'>
              <label htmlFor="district">District</label>
              <input type="text" id='district' name="district" onChange={handlechange} required />
              <div className='under-line'></div>
            </div>
          </div>
          <div className='division'>
            <div className='field reg-field'>
              <label htmlFor="address">Address</label>
              <input type="text" id='address' name="address" onChange={handlechange} required />
              <div className='under-line'></div>

            </div><div className='field reg-field'>
              <label htmlFor="pincode">Pincode</label>
              <input type="text" id='pincode' name="pincode" onChange={handlechange} required />
              <div className='under-line'></div>

            </div>
          </div>
          <div className='checkbox'>
            <input type="checkbox" name="checkbox" id="checkbox" required />
            <label htmlFor="checkbox"> I agree to Terms & Condition receiving marketing and promotional materials  </label>
          </div>

          <button className='btn-signin'>Register</button>
        </form>
      </div>
    </div>

  </div>
}
