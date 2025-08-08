import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import AboutPage from './landing_pages/About/AboutPage.jsx'
import HomePage from './landing_pages/Home/HomePage.jsx'
import Signup from './landing_pages/Signup/Signup.jsx'
import PricingPage from './landing_pages/Pricing/PricingPage.jsx'
import ProductsPage from './landing_pages/Products/ProductsPage.jsx'
import SupportPage from './landing_pages/Support/SupportPage.jsx'
import Navbar from './landing_pages/Navbar.jsx'
import Footer from './landing_pages/Footer.jsx'
import NotFound from './landing_pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <HomePage />
  // </StrictMode>,

  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
)
