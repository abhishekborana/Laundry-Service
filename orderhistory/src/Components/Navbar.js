import React from 'react';
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return <div className='navbar'>
      <nav className='navs'>
          <div className='title'>
          <h1 className='logo'>LAUNDRY</h1>
          </div>
          <ul className='nav-list'>
          <NavLink className="li" to={"/"} >Pricing</NavLink>
          <NavLink  className="li" to={"/"}  >Career</NavLink>
          <NavLink  className='btn navlast' to={"/"}>User</NavLink>
          </ul>
      </nav>
  </div>;
}