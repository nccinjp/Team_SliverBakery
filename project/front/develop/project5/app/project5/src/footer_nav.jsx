import React from 'react'
import { ReactComponent as Gift } from './svg/gift.svg';
import { ReactComponent as Home } from './svg/house-door.svg';
import { ReactComponent as Person } from './svg/person-circle.svg';
import { ReactComponent as Menu } from './svg/tools.svg';

const footer_nav = () => {
  return (
    <footer className='block fixed box-border rounded-t-3xl h-200 right-0 left-0 bottom-0 bg-red-700'>
      {/* <section className='block fixed box-border right-0 left-0 bottom-0 bg-red-700'> */}
          <nav>
          <ul className='flex justify-around pt-11'>
            <li>
              <a href="/home" className='no-underline text-white'>
                <Home />
                <p className='relative font-original -left-1 -bottom-2 text-3xl'>Home</p>
              </a>
            </li>
            <li>
              <a href="/menu" className='no-underline text-white'>
                <Menu />
                <p className='relative font-original -left-1 -bottom-2 text-3xl'>Menu</p>
              </a>
            </li>
            <li>
              <a  href="/coupon" className='no-underline text-white'>
                <Gift/>
                <p className='relative font-original -left-3 -bottom-2 text-3xl'>Corpon</p>
              </a>
            </li>
            <li>
              <a href="/my-page" className='no-underline text-white'>
                <Person/>
                <p className='relative font-original -left-3 -bottom-2 text-3xl font-extrabol'>MyPage</p>
              </a>
            </li>
          </ul>
        </nav>
      {/* </section> */}
    </footer>
  )
}

export default footer_nav