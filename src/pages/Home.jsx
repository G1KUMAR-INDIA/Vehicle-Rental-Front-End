import React from 'react'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import CarList from '../components/CarList/CarList'
import Testimonial from '../components/Testimonial/Testimonial'
import AppStoreBanner from '../components/AppStoreBanner/AppStoreBanner'
import Contact from '../components/Contact/Contact'
import Hero from '../components/Hero/Hero'
import AOS from 'aos'
import "aos/dist/aos.css"

const Home = () => {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100
    })
    AOS.refresh(),[]
  })
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <CarList/>
      <Testimonial/>
      <AppStoreBanner/>
      <Contact/>      
    </div>
  )
}

export default Home
