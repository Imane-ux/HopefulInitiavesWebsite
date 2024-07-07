import React from 'react'
import About from './components/About/About'
import Categories from './components/Categories/Categories'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Volunteer from './components/Volunteer/Volunteer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer'
import Connect from './components/Connect/Connect'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Categories/>
        <About/>
      </div>
      
      <Volunteer/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default App
