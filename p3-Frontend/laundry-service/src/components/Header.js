import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Header() {
  return <div className='navbar'>
      <nav className='navs'>
          <div className='title'>
          <h1 className='logo'>Laundry</h1>
          </div>
          <ul className='nav-list'>
          <NavLink className="li" to={"/"} >Home</NavLink>
          <NavLink className="li" to={"/"} >Pricing</NavLink>
          <NavLink  className="li" to={"/"}  >Career</NavLink>
          <NavLink  className='btn navlast' to={"/"}>Sign In</NavLink>
          </ul>
      </nav>
  </div>;
}