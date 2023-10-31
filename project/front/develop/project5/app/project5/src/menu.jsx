import React from 'react'
//import Footer from './footer'
import Footer_nav from './footer_nav';
import Header from './header'
import Gc from './components/get_category'
import Gg from './components/get_good'

const menu = () => {
  return (
    <>
        <Header />
        <Gc />
        <Gg />
        <Footer_nav />
    </>
  )
}

export default menu