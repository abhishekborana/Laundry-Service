import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Homepage() {
    return <div className='container'>
        <div className='registerpart'>
            <div className='registercontent'>
                <h1 className='maintitle'>Laundry Service</h1>
                <br />
                <div className='belowtitle'>
                    <p>Doorstep wash and Dryclean service
                        <br />
                        <br />
                        <br />
                        Dont have an Account?</p>
                </div>
                <NavLink className="li" to={"/register"} ><button className='registerbutton'>Register</button></NavLink>
            </div>
        </div>
        <div className='signinpart'>
            <div className='signincontent'>
                <h1 className='signintitle'>SIGN IN</h1>
                <div className='signinform'>
                    <form>
                        <div className='field'>
                            <label htmlFor="Email/phone">Mobile/Email</label>
                            <br/>
                            <input type="text" id='Email/phone' name="emailPhone" value='' />
                        </div>
                        <div className='under-line'></div>
                        <div className='field'>
                            <label htmlFor="password">Password</label>
                            <br/>
                            <input type="password" id='password' name="password" value=''/>
                        </div>
                        <div className='under-line'></div>
                        <div className='forgot'>
                            <p>Forgot Password?</p>
                        </div>
                    </form>
                    <button className='signinbutton' type='button'>Sign IN</button>
                </div>
            </div>
        </div>
    </div>;
}
