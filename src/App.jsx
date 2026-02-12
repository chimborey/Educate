import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import Home from './Page/Home'
import Header from './Page/Header'
import Footer from './Page/Footer'
import About from './Page/About'
import Course from './Page/Course'
import Pages from './Page/Pages'
import Blog from './Page/Blog'
import Contact from './Page/Contact'
const App = () => {


  useEffect(() => {
    AOS.init({
      duration: 100,
      offset: 100,
      once: false
    })
  })

  return (


    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/course' element={<Course />}></Route>
        <Route path='/page' element={<Pages />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App