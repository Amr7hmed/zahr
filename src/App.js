import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {  useContext } from 'react';
import Navbar from './layout/navbar/index.jsx';
import Footer from './layout/footer/index.jsx';
import Home from './pages/home/index.jsx';
import Cart from './pages/cart/index.jsx';
import Favorite from './pages/favorite/index.jsx';

import Proudect from './pages/proudect/index.jsx';
import Profile from "./pages/profile/index.jsx";
import CheckOut from './pages/checkout/index.jsx';
import CheckOutData from './pages/checkout/data.jsx';
import Address from './pages/address/index.jsx';
import MyOrders from './pages/myorders/index.jsx';
import Payment from './pages/checkout/payment.jsx';
import PaymentDone from './pages/checkout/paymentdone.jsx';
import PaymentShipping from './pages/checkout/paymentshipping.jsx';
import { Authcontext } from './store/context.js';
import ConnectUs from './pages/connectus/index.jsx';
import AboutUs from './pages/aboutus/index.jsx';
import OuterPages from './pages/aboutus/OuterPages.jsx';
import Proudects from './pages/proudects/all/index.jsx';
import ProductsCategories from './pages/proudects/categories/index.jsx';
import ModelCart from './layout/navbar/modals/modelcart/index.jsx';
import EditeProfile from './pages/editeprofile/index.jsx';
import FormConnectUs from './pages/connectus/formconnectus.jsx';
import Articles from './pages/articles/index.jsx';
import Article from './components/articles/article.jsx';
import Proudectssearch from './pages/Proudectssearch/index.jsx';
import Proudectssearchcategorey from './pages/Proudectssearch/searchcategorey.jsx';

function App() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <main className={language}>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/checkout/:id" element={<CheckOut />} exact />
          <Route path="/checkoutdata/:id" element={<CheckOutData />} exact />
          
          <Route path="/favorite" element={<Favorite />} exact />
          <Route path="/proudects" element={<Proudects />} exact />
          <Route path="/proudectscategories/:id/:name" element={<ProductsCategories/>} exact />
          <Route path="/proudect/:id" element={<Proudect />} exact />
          <Route path="/profile" element={<Profile/>} exact />
          <Route path="/editeprofile" element={<EditeProfile/>} exact />
          <Route path="/addresses" element={<Address/>} exact />
          <Route path="/myorders" element={<MyOrders/>} exact />
          <Route path="/payment/:id" element={<Payment/>} exact />
          <Route path="/paymentdone/:id" element={<PaymentDone/>} exact />
          <Route path="/paymentshipping" element={<PaymentShipping/>} exact />
          <Route path="/connectus" element={<ConnectUs/>} exact />
          <Route path="/formconnectus" element={<FormConnectUs/>} exact />
          <Route path="/aboutus" element={<AboutUs/>} exact />
          <Route path="/pages/:id" element={<OuterPages/>} exact />
          <Route path="/articles" element={<Articles/>} exact />
          <Route path="/article/:id" element={<Article/>} exact />
          <Route path="/Proudectssearch/:search" element={<Proudectssearch/>} exact />
          <Route path="/Proudectssearchcategorey/:search" element={<Proudectssearchcategorey />} exact />
          
        </Routes>


        <ModelCart />
      <Footer/>
    </BrowserRouter>
    </main>
  );
}

export default App;

// <main className={language}>