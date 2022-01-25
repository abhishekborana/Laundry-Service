import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Registerpage() {
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
        <form action="">
          <div className='division'>
              <div className='field reg-field'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name="name"  required />
                <div className='under-line'></div>
              </div>

              <div className='field reg-field'>
                <label htmlFor="phone">Phone</label>
                <input type="text" id='phone' name="phone" />
                <div className='under-line'></div>
              </div>
              </div>
              <div className='division'>
              <div className='field reg-field'>
                <label htmlFor="email">Email</label>
                <input type="email" id='password' name="email"  />
                <div className='under-line'></div>
              </div>

              <div className='field reg-field'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name="password"  />
                <div className='under-line'></div>
              </div>
              </div>
              <div className='division'>
              <div className='field reg-field'>
                <label htmlFor="state">State</label>
                <input type="text" id='state' name="state"  />
                <div className='under-line'></div>
              </div>
              <div className='field reg-field'>
                <label htmlFor="district">District</label>
                <input type="text" id='district' name="district"  />
                <div className='under-line'></div>
              </div>
</div>
<div className='division'>
              <div className='field reg-field'>
                <label htmlFor="address">Address</label>
                <input type="text" id='address' name="address"/>
                <div className='under-line'></div>

              </div><div className='field reg-field'>
                <label htmlFor="pincode">Pincode</label>
                <input type="text" id='pincode' name="pincode" />
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
