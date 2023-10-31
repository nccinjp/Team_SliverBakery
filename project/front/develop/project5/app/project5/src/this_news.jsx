import React from 'react'
import News_swiper from './news_swiper';

const this_news = () => {
  return (
    <div className="relative top-391 mx-12  font-original not-italic font-extrabold text-20">
      <div className="text-[#9B2115] text-40">ニュース</div>
      <div className="text-20 text-[#1E1E1E]">NEWS</div>
      <News_swiper />
    </div>
  )
}

// const this_news = () => {
//   return (
//     <div class="relative grid grid-rows-2 gap-4 absolute w-326 h-30 top-636 right-6 bottom-626 left-25 font-original not-italic font-extrabold text-20">
//       <div class="text-[#9B2115]">ニュース</div>
//       <div class="text-14 text-[#1E1E1E]">NEWS</div>
//     </div>
//   )
// }

export default this_news
