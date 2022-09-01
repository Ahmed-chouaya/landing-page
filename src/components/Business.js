import React from 'react'
import { send, shield, star } from '../assets'

const Business = () => {
  return (
    <section className='business'>
        <div className="business-dis">
            <h1>You do the business,<br/> we'll handle the money.</h1>
            <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <button>Get Started</button>
        </div>
        <div className='business-2'>
            <div className='features'>
                <div className='features-img'>
                    <img src={star} alt="" />
                </div>
                <div className="features-dis">
                    <h1>Rewards</h1>
                    <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                </div>
            </div>
            <div className='features'>
                <div className='features-img'>
                    <img src={shield} alt="" />
                </div>
                <div className="features-dis">
                    <h1>100% Secured</h1>
                    <p>We take proactive steps make sure your information and transactions are secure.</p>
                </div>
            </div>
            <div className='features'>
                <div className='features-img'>
                    <img src={send} alt="" />
                </div>
                <div className="features-dis">
                    <h1>Balance Transfer</h1>
                    <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Business