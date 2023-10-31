import React from 'react'
import { ReactComponent as Logo } from './svg/cart.svg';
import background from "./images/headimg.png";
import icon  from './images/raku.png';
import cart  from './images/cart.png';

const header = () => {
  return (
    <header className="fixed rounded-b-2xl  drop-shadow-xl h-200 right-0 left-0 top-0 bg-red-700 z-20 text-center grid" style={{ backgroundImage: `url(${background})` }}>
      <div className='m-auto'>
        <img src={icon} alt="sample" className='m-auto h-168 w-168'/>
      </div>
      <div className='absolute right-7 bottom-3'>
        <img src={cart} alt="sample" className='left-800 h-50 w-50'/>
      </div>
      {/* <Logo className="absolute right-6 top-7 bottom-2000" /> */}
    </header>

  )
}

export default header