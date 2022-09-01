import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [miniNav, setMiniNav] = useState(false)

  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className='menu'>
            <Link to={"#"}>Home</Link>
            <Link to={"#"}>About Us</Link>
            <Link to={"#"}>Features</Link>
            <Link to={"#"}>Solution</Link>
        </div>
        <div className='miniNav'>
            <img onClick={() => setMiniNav((prev) => !prev)} className='miniMenu' src={miniNav ? close : menu} alt="" />
            {miniNav && <div className='menu-mini'>
                <Link to={"#"}>Home</Link>
                <Link to={"#"}>About Us</Link>
                <Link to={"#"}>Features</Link>
                <Link to={"#"}>Solution</Link>
            </div>}
        </div>
    </nav>
  )
}

export default Navbar