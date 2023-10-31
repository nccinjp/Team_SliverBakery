import React from 'react'
import Footer_nav from './footer_nav';
import Header from './header';
import Recommends from './recommends';
import Month from './this_month';
import News from './this_news';


const home = () => {
  return (
    <div>
      <Header />
      <main  className='h-2400'>
        <Recommends />
        <Month />
        <News />
      </main>
      <Footer_nav />
    </div>
  )
}

export default home