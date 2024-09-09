import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Footer from './Footer'
import Contact from './Contact'
import Testimonials from './Testimonials'


function Home() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <About/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home