import React from 'react'
//import Footer from './footer'
import Footer_nav from './footer_nav';
import Header from './header'

const mypage = () => {
  return (
    <>
      <Header />
      <h1 className="absolute text-[#9B2115] text-center top-[250px] inset-x-6 font-original not-italic font-extrabold text-[60px]">
        testさん
      </h1>

      <div className="relative top-[400px] w-[800px] h-[400px] py-5 px-7 mx-auto bg-[#9B2115] rounded-xl shadow-2xl sm:items-center ">
        <div className="space-y-9 sm:text-center">
          <div>
            <p className="text-white font-semibold text-[38px]">台湾楽鍋MEMBERS</p>
          </div>
          <div>
            <button className="px-4 py-4 w-full h-[100px] text-[38px] text-[#1E1E1E]-500 bg-white font-semibold rounded-full border">会員情報の確定・変更</button>
          </div>
          <div>
            <button className="px-4 py-4 w-full h-[100px] text-[38px] text-[#1E1E1E]-500 bg-white font-semibold rounded-full border">パスワードの変更</button>
          </div>
        </div>
      </div>
      
      <div className='relative top-[480px] '>
        <button className=' w-327 px-8 py-2 bg-white text-left rounded-full border text-[38px] text-[#9B2115] font-semibold'>設定</button>
      </div>

      <div className='relative top-[500px]'>
        <button className='w-327 px-8 py-2 bg-white text-left rounded-full border text-[38px] text-[#9B2115] font-semibold'>お問い合わせ</button>
      </div>

      <div className='relative top-[520px]'>
      <button className='w-327 px-8 py-2 bg-white text-left rounded-full border text-[38px] text-[#9B2115] font-semibold'>ログアウト</button>
      </div>

      <div className='relative top-[540px]'>
      <button className='w-327 px-8 py-2 bg-white text-left rounded-full border text-[38px] text-[#9B2115] font-semibold'>退会</button>
      </div>

      <Footer_nav />
    </>
  )
}

export default mypage