import React from 'react'
import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <section className='billing'>
        <img className='bill' src={bill} alt="" />
        <div className="billing-dis">
            <h1>Easily control your billing & invoicing.</h1>
            <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className='bill-img'>
                <img src={apple} alt="" />
                <img src={google} alt="" />
            </div>
        </div>
        <div className="white_grid" />
    </section>
  )
}

export default Billing