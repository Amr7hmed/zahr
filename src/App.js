import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  useContext } from 'react';
import './App.css';
import { Authcontext } from './store/context.js';
import Navbar from './layout/navbar/index.jsx';
import Footer from './layout/footer/index.jsx';
import Home from './pages/home/index.jsx';
import Cart from './pages/cart';
import Favorite from './pages/favorite';
import Products from './pages/products/products.jsx';

function App() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <main className={language === "Ar" ? "languagear" :'languageen' }>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/favorite" element={<Favorite />} exact />
          <Route path="/products" element={<Products />} exact />
          

          
        </Routes>

      <Footer/>
    </BrowserRouter>
    </main>
  );
}

export default App;


/*
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/index.jsx";
import Navbar from "./layout/navbar/index.jsx";
import Footer from './layout/footer/index.jsx';
import Favorite from './pages/Favorite/index.jsx';
import Proudect from './pages/Proudect/index.jsx';
import Cart from './pages/Cart/index.jsx';
import Confirm from './pages/Checkout/Confirm.jsx';
import Payment from './pages/Checkout/Payment.jsx';
import Orderdone from './pages/Checkout/Orderdone.jsx';
import Posts from './pages/Post/index.jsx';
import Porfile from './pages/Porfile/index.jsx';
import Myorders from './pages/Orders/index.jsx';
import Mynotifications from './pages/Notifications/index.jsx';
import MyAds from './pages/Ads/index.jsx';
import Massages from './pages/Massages/index.jsx';
import Proudects from './pages/Proudects/index.jsx';
import Edaitads from './components/orders_ads/Edaitads.jsx';
import {  useEffect, useState } from 'react';
import { Contextprovider } from './store/context.js';

function App() {
  const [language, setLanguage] = useState("Ar");
  
useEffect(() => {
  if(localStorage.getItem("language") !== null){
    setLanguage("En")
  }else{
    setLanguage("Ar")

  }

}, [language]);

  return (
    
    <Contextprovider>
      
    <main className={language === "Ar" ? "languagear" :'languageen' }>

      <BrowserRouter>
        <Navbar language={language} setLanguage={setLanguage}/>
        <Routes>
          <Route path="/" element={<Home language={language} />} exact />
          <Route path="/favorite" element={<Favorite  language={language}/>} exact />
          <Route path="/proudects" element={<Proudects  language={language} />} exact />
          <Route path="/proudect/:id" element={<Proudect  language={language} />} exact />
          <Route path="/cart" element={<Cart language={language} />} exact />
          <Route path="/confirm/:id" element={<Confirm language={language}/>} exact />
          <Route path="/payment/:id" element={<Payment language={language}/>} exact />
          <Route path="/orderdone/:id" element={<Orderdone  language={language}/>} exact />
          <Route path="/post" element={<Posts language={language}/>} exact />
          <Route path="/myporfile" element={<Porfile language={language} setLanguage={setLanguage}/>} exact />
          <Route path="/myorders" element={<Myorders language={language}/>} exact />
          <Route path="/mynotifications" element={<Mynotifications language={language}/>} exact />
          <Route path="/myads" element={<MyAds language={language}/>} exact />
          <Route path="/edaitads/:id" element={<Edaitads language={language}/>} exact />
          <Route path="/mymassages" element={<Massages language={language}/>} exact />



        </Routes>
        <Footer  language={language} />
      </BrowserRouter>
    </main>
    </Contextprovider>
  );
}

export default App;
*/