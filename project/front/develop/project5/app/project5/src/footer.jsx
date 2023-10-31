import React from 'react'
import { ReactComponent as Gift } from './svg/gift.svg';
import { ReactComponent as Home } from './svg/house-door.svg';
import { ReactComponent as Person } from './svg/person-circle.svg';
import { ReactComponent as Menu } from './svg/tools.svg';

const footer = () => {
  return (
    <footer className='fixed h-20 right-0 left-0 bottom-0 bg-red-700 z-10'>
      <nav>
        <ul className='flex justify-around pt-3'>
          <li>
            <a href="/home" className='no-underline text-black'>
              <Home />
              <p className='relative font-original -left-1'>Home</p>
            </a>
          </li>
          <li>
            <a href="/menu" className='no-underline text-black'>
              <Menu />
              <p className='relative font-original -left-1'>Menu</p>
            </a>
          </li>
          <li>
            <a  href="/coupon" className='no-underline text-black'>
              <Gift/>
              <p className='relative font-original -left-2'>Corpon</p>
            </a>
          </li>
          <li>
            <a href="/my-page" className='no-underline text-black'>
              <Person/>
              <p className='relative font-original -left-2 font-extrabol'>MyPage</p>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

// const footer = () => {
//   return (
//     <footer className='fixed h-20 right-0 left-0 bottom-0 bg-red-700 z-10'>
//       <nav>
//         <ul className='flex justify-around pt-3'>
//           <li>
//             <a href="/home" className='no-underline text-black'>
//             {/* absolute left-45 right-304 top-19 bottom-37 text-black */}
//               <Home className='' />
//               {/* absolute w-30 h-15 left-43 top-52 font-original not-italic font-extrabold text-10 text-black */}
//               <p className='relative font-original -left-1'>Home</p>
//             </a>
//           </li>
//           <li>
//             <a href="/menu" className='no-underline text-black'>
//             {/* absolute left-132 right-218 top-5 bottom-38 text-black */}
//               <Menu className=''/>
//               {/* absolute w-10 h-15 left-125 top-52 font-original not-italic font-extrabold text-10 text-black */}
//               <p className='relative font-original -left-1'>Menu</p>
//             </a>
//           </li>
//           <li>
//             <a href="/coupon" className='no-underline text-black'>
//             {/* absolute left-218 right-132 top-5 bottom-37 text-black */}
//               <Gift className=''/>
//               {/* absolute w-10 h-15 left-211 top-52 font-original not-italic font-extrabold text-10 text-black */}
//               <p className='relative font-original -left-2'>Corpon</p>
//             </a>
//           </li>
//           <li>
//             <a href="/my-page" className='no-underline text-black'>
//             {/* absolute left-304 right-45 top-5 bottom-36 text-black */}
//               <Person className=''/>
//               {/* absolute w-50 h-15 left-292 top-52 font-original not-italic font-extrabold text-10 text-black */}
//               <p className='relative font-original -left-2 font-extrabol'>MyPage</p>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </footer>
//   )
// }

export default footer