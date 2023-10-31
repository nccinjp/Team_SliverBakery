//docker-compose run --rm node sh -c "npm install --save-dev ts-migrate"
// errorの場合: docker logs project名

// rafce: new_file
// 例) docker logs project5_node_1
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter, 
  Route, 
  Routes,
  Navigate
} from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import Recommends from './recommends';
import Month from './this_month';
import Swiper from './swiper';
import News from './this_news';
import News_swiper from './news_swiper';
import Home from './home';
import Menu from './menu';
import Menu_Del from './menu_detail';
import Coupon from './coupon';
import Mypage from './mypage';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Navigate to="/home" /> } />
            <Route path='/home' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/menu/:id' element={<Menu_Del />} />
            <Route path='/coupon' element={<Coupon />} />
            <Route path='/my-page' element={<Mypage />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;