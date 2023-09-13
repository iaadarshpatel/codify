import React from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Feature from './components/features/Feature'
import Course from './components/courses/Course'
import Registration from './components/registration/Registration'
import Testimonial from './components/testimonials/Testimonial'
import Footer from './components/footer/Footer'


const App = () => {
  return (  
    <>
          <Nav/>
          <Home/>
          <Feature/>
          <Course/>
          <Registration/>
          <Testimonial/>
          <Footer/> 
    </>
  );
}

export default App