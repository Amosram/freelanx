import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import  Login  from './pages/Login'
import Footer from './components/Footer'
import SingleJob from './pages/SingleJob'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/job/:jobId' element={<SingleJob/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App