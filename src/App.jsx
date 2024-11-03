import React from 'react'
import Navbar from './components/Navbar.jsx/Navbar'
import AOS from 'aos'
import "aos/dist/aos.css"
import Footer from './components/Footer/Footer';
import Home from './pages/Home';


const App = () => {
  // AOS Initialization
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
    <div className='bg-white dark:bg-dark dark:text-white'>
      <Navbar/> 
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
