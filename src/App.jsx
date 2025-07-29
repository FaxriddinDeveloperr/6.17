import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Recipes from './pages/food/Food'
import User from './pages/user/User'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Login from './pages/login/Login'
import NotFoundpage from './pages/notFound/NOtFound'
import Layot from './pages/layout/Layot'
import HomeDetails from './pages/home/HomeDetails'
import FoodDetails from './pages/food/FoodDetails'
import UserDetails from './pages/user/UserDetails'

const App = () => {
  return (
    <>

    <Routes>
      <Route path='/' element={<Layot/>}>
      <Route index={true} element={<Home/>}/>
      <Route path='/:id' element={<HomeDetails/>}/>
      <Route path='*' element={<NotFoundpage/>}/>
      <Route path='/food' element={<Recipes/>}/>
      <Route path='/food/:id' element={<FoodDetails/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/user/:id' element={<UserDetails/>}/>
      </Route>

      <Route path='/sign-in' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App