import React from 'react'
import samp1 from './images/sample.png'
import Swiper from './swiper';

const this_month = () => {
  return (
    <div className="relative top-391 mx-12 font-original not-italic font-extrabold text-20">
      <div className="text-[#9B2115] text-40">今月の新商品</div>
      <div className="text-20 text-[#1E1E1E]">NEW PRODUCTS</div>  
      <Swiper /> 
    </div>
  )
}

export default this_month