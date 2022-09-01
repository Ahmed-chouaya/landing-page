import React from 'react'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <section className='cardDeal'>
        <div className="cardDeal-dis">
            <h1>Find a better card deal in few easy steps.</h1>
            <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <button>Get Started</button>
        </div>
        <div className='cardDeal-img'>
            <img src={card} alt="" />
        </div>
    </section>
  )
}

export default CardDeal