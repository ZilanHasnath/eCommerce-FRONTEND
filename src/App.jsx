import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SingleNewCollections from './components/SingleNewCollections.jsx';
import Navbar from './components/Navbar.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Cart from './pages/Cart.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import MyCartReady from './pageMake/MyCartReady.jsx';
import MyOrders from './pages/MyOrders.jsx';
import BuyNowReady from './pageMake/BuyNowReady.jsx';
import Footer from './components/Footer.jsx';
import Notice from './components/Notice.jsx';

const App = () => {

  useEffect(() => {
    const wakeServer = async () => {
      try {
        await fetch("https://ecommerce-backend-2vqa.onrender.com");
        console.log("Server wake-up request sent");
      } catch (err) {
        console.log("Server not responding yet");
      }
    };

    wakeServer();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Notice />

      <div className='mx-2 md:mx-4 lg:mx-5'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/products/:id' element={<SingleNewCollections />} />

          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />


          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/cart/:id' element={<Cart />} />


          <Route path='/products/buy/:id' element={<BuyNowReady />} />
          <Route path='/mycart' element={<MyCartReady />} />
          <Route path='/myorder' element={<MyOrders />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;