import React from 'react';
import { airbnb, binance, coinbase, dropbox } from '../assets';

const Clients = () => {
  return (
    <section className='clients'>
        <img src={airbnb} alt="" />
        <img src={binance} alt="" />
        <img src={coinbase} alt="" />
        <img src={dropbox} alt="" />
    </section>
  )
}

export default Clients