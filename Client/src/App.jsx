import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import Home from './Pages/Home'
import WomanProducts from './Pages/WomanProducts'
import ManProducts from './Pages/ManProducts'
import CasualProducts from './Pages/CasualProducts'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Auth from './Pages/Auth'
import About from './Pages/About'
import Search from './Pages/Search'
import NotFound from './Pages/NotFound'
import WomanProductDetails from './Pages/WomanProductDetails'
export default function App() {
  const {token}=useSelector(state=>state.auth)
  return (
    <>
      <Navbar />
      <Box minHeight={'80vh'}>
        <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route path='/woman/:categoryId/:categoryName' element={<WomanProducts/>}/>
         <Route path='/man/:categoryId/:categoryName' element={<ManProducts/>}/>
         <Route path='/product-details/:id/:name' element={<ProductDetails/>}/>
         <Route path='/woman-product-details/:id/:name' element={<WomanProductDetails/>}/>
         <Route path='/auth' element={!token?<Auth/>:<Navigate to={'/'}/>}/>
         <Route path='/cart' element={token?<Cart/>:<Navigate to={'/auth'}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/search/:query' element={<Search/>}/>
         <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Box>
      <Footer />
    </>
  )
}
