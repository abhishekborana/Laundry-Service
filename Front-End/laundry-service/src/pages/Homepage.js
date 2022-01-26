import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'

export default function Homepage() {
    // let history = useHistory();
    const [logindata, setLogindata] = useState({
        email: ' ',
        password: ' '
    })

    function changefun(e) {
        // console.log(e.target.value)
        setLogindata({ ...logindata, [e.target.name]: e.target.value })
    }

    async function submitfun(e) {
        e.preventDefault()
        console.log("inside")
        console.log(logindata)
        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            body: JSON.stringify(logindata),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            
        });

        const loginuserdata = await response.json()

        if (loginuserdata.status) {
            localStorage.setItem('token', loginuserdata.authtoken)
            alert('/signinsuccefully')
            // history('/dashboard')
        }
        else {
            alert('Enter credentials again')
        }
    }
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
                    <form method='' action='' onSubmit={submitfun}>
                        <div className='field reg-field'>
                            <label htmlFor="email">Name</label>
                            <input type="email" id='email' name="email" onChange={changefun} required />
                            <div className='under-line'></div>
                        </div>
                        <div className='under-line'></div>
                        <div className='field reg-feild'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' name="password" onChange={changefun} />
                        </div>
                        <div className='under-line'></div>
                        <div className='forgot'>
                            <p>Forgot Password?</p>
                        </div>
                        <button className='signinbutton'>Sign IN</button>
                    </form>

                </div>
            </div>
        </div>
    </div>;
}
