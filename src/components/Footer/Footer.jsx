import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
const FooterLinks=[
  {
    title:"Home",
    link:"/#",
  },
  {
    title:"About",
    link:"/about",
  },
  {
    title:"Vehicles",
    link:"/vehicles",
  },
  {
    title:"Bookings",
    link:"/bookings",
  },
  {
    title:"Login",
    link:"/login",
  },
]
const Footer = () => {
  return (
    <div className='bg-gray-500  dark:bg-dark'>
      <div className='container'>
        <div className='grid md:grid-cols-3 py-5'>
          {/* Company Details */}
          <div className='py-8 px-4'>
            <h1 className='text-[#F8607F] text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Vehicle Rental</h1>
            <p className='text-[#8EF120]'>Need a ride? 🚗 Quick, easy, and affordable vehicle rentals for any journey. Book now and hit the road with confidence!</p>
            <br />
            <div className='text-white flex items-center gap-3'>
              <FaLocationArrow />
              <p>Palamner, Chittoor District, Andhra Pradesh</p>
            </div>
            <div className='flex items-center text-white gap-3'>
              <FaMobile />
              <p>+918501891921</p>              
            </div>
            {/* Social Handles */}
            <div className='flex items-center text-[#E46620] mt-6 '>
              <a href="https://www.linkedin.com/in/g1kumarr/"  target='_blank'>
                <FaLinkedin className="text-3xl hover:text-primary"/>
              </a>
              <a href="https://www.facebook.com/g1kumar.in/" target='_blank'>
                <FaFacebook className="text-3xl hover:text-primary"/>
              </a>
              <a href="mailto:g1kumar215@gmail.com" target='_blank'>
                <FaMailBulk className="text-3xl hover:text-primary"/>
              </a>
            </div>
          </div>
          {/* Navlinks */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            {/* 1st Line */}
            <div>
              <div className='py-8 px-4'>
                <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify m-3'>Important Links</h1>
                <ul className='flex flex-col'>
                  {
                    FooterLinks.map(data=>{
                      return(
                          <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                            <a href={data.links} target="_blabk"><span className='mr-2'>&#11162;</span>{data.title}</a>
                          </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            {/* 2nd Line */}
            <div>
              <div className='py-8 px-4'>
                <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify m-3'>Important Links</h1>
                <ul className='flex flex-col'>
                  {
                    FooterLinks.map(data=>{
                      return(
                        
                          <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                            <a href={data.links} target="_blabk"><span className='mr-2'>&#11162;</span>{data.title}</a>
                          </li>
                        
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            {/* 3rd Line */}
            <div>
              <div className='py-8 px-4'>
                <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify m-3'>Important Links</h1>
                <ul className='flex flex-col'>
                  {
                    FooterLinks.map(data=>{
                      return(
                        
                          <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                            <a href={data.links} target="_blabk"><span className='mr-2'>&#11162;</span>{data.title}</a>
                          </li>
                        
                      )
                    })
                  }
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
