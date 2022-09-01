import React from 'react'
import { logo } from '../assets'

const Footer = () => {
  return (
    <section className='footer-section'>
        <div className='footer'>
            <div className='logo-section'>
                <img src={logo} alt="" />
                <p>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className="links">
                <h1>Usefull Links</h1>
                    <li>Content</li>
                    <li>How it Works</li>
                    <li>Create</li>
                    <li>Explore</li>
                    <li>Terms & Services</li>
            </div>
            <div className="community">
                <h1>Community</h1>
                    <li>Help Center</li>
                    <li>Partners</li>
                    <li>Suggestions</li>
                    <li>Blog</li>
                    <li>Newsletters</li>
            </div>
            <div className="partner">
                <h1>Partner</h1>
                    <li>Our Partner</li>
                    <li>Become a Partner</li>
            </div>
        </div>
        <div className='copyRight'>
            <p >Copyright | 2022 HooBanks, All Rights Reserved.</p>
        </div>
    </section>
  )
}

export default Footer