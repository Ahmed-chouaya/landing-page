import React from 'react'
import { people01, people02, people03, quotes } from '../assets'

const Testimonials = () => {
  return (
    <section className='testimonials'>
        <div className='testi-des'>
            <h1>What people are saying about us</h1>
            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className="testi-img">
            <div className='people-card'>
                <img className='quotes' src={quotes} alt="" />
                <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                <div className='people-img'>
                    <img src={people01} alt="" />
                    <div className='people-name'>
                        <h1>Herman Jensen</h1>
                        <p>Founder & Leader</p>
                    </div>
                </div>
            </div>
            <div className='people-card'>
                <img className='quotes' src={quotes} alt="" />
                <p>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                <div className='people-img'>
                    <img src={people02} alt="" />
                    <div className='people-name'>
                        <h1>Steve Mark</h1>
                        <p>Founder & Leader</p>
                    </div>
                </div>
            </div>
            <div className='people-card'>
                <img className='quotes' src={quotes} alt="" />
                <p>It is usually people in the money business, finance, and international trade that are really rich.</p>
                <div className='people-img'>
                    <img src={people03} alt="" />
                    <div className='people-name'>
                        <h1>Kenn Gallagher</h1>
                        <p>Founder & Leader</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials