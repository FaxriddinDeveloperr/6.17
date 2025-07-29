import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Layot = () => {
  return (
    <>

    <Header/>
<main className='min-h-[400vh]'>
    <Outlet/>
</main>

    <Footer/>
    
    </>
  )
}

export default Layot