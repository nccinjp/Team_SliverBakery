import React from 'react'
//import Footer from './footer'
import Footer_nav from './footer_nav';
import Header from './header'
import icon  from './images/rakunabeRED.png';

const coupon = () => {
  return (
    <>
      <Header />

        <div className='relative top-252 w-850 h-600 mx-auto'>
          <img src={icon} alt="logo" className='m-auto h-168 w-168'/>
          <div className='text-center'>
          現在、利用可能なクーポンはございません。
          </div>
        </div>
        

      <Footer_nav />
    </>
  )
}

export default coupon