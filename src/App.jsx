import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Header from './commonComponents/Header'
import Footer from './commonComponents/Footer'
import Products from './pages/Products/Products'
import Carts from './pages/Carts/Carts'
const App = () => {
   return (

      <HashRouter>
         <Header />
         <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/carts' element={<Carts />} />
            <Route path='*' element={<h1>404 - Page Not Found</h1>} />
         </Routes>
         <Footer />
      </HashRouter>

   )
}

export default App
