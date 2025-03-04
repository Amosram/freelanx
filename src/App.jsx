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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApplicationPage from './pages/ApplicationPage'
import UserMatchedJobs from './pages/UserMatchedJobs'
import UserApplications from './pages/UserApplications'
import SuccessPage from './pages/SuccessPage'


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
        <Route path='/success' element={<SuccessPage/>} />
        <Route path='/user-jobs' element={<UserMatchedJobs/>} />
        <Route path='/my-applications' element={<UserApplications/>} />
        <Route path='/job/:jobId' element={<SingleJob/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App