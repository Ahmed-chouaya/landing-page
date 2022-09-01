import React from 'react';
import { arrowUp, discount, robot, vecotr16 } from '../assets';

const Hero = () => {
  return (
    <section className='big-hero'>
        <div className='hero'>
            <div className="discount">
                <img src={discount} alt="" />
                <p><b>20%</b> DISCOUNT FOR <b>1 MONTH</b> ACCOUNT</p>
            </div>
            <div className="get-started">
                <p>The Next</p>
                <p className='generation'>Generation</p>
                <p>Payment Method.</p>
            </div>
            <p className='hero-para'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
            <div className="get-started-btn">
                <div className='get'>
                <p>Get</p>
                <img src={arrowUp} alt="" />
                </div>
                <p>Started</p>
            </div>
        </div>
        <div className='robot-div'>
            <img className='vector' src={vecotr16} alt="" />
            <img className='robot-images' src={robot} alt="" />
        </div>
        <div className='-get'>
            <div className="get-started-btn-mini">
                <div className='get'>
                <p>Get</p>
                <img src={arrowUp} alt="" />
                </div>
                <p>Started</p>
            </div>
        </div>
        <div className='pink-grid' />
        <div className='white-grid' />
        <div className="blue-grid" />
        <div className='white--grid' />
    </section>
  )
}

export default Hero