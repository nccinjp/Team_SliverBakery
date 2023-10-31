import React from 'react'
import sample  from './images/Recommend.png';

const recommends = () => {
  return (
    <div className='relative top-252 w-850 h-600 mx-auto'>
      <div className='absolute'>
        <img src={sample} alt="sample" className='rounded-2xl  w-850 h-600'/>
      </div>
      <div className='absolute w-850 h-600'>
        <div className='absolute top-8 right-10 not-italic text-40 text-white font-original tracking-widest'>台湾の味を再現</div>
        <div className='absolute top-20 right-10 not-italic text-15 text-white font-original tracking-widest'>大阪難波の台湾火鍋専門店</div>
      </div>
    </div>
  )
}

export default recommends