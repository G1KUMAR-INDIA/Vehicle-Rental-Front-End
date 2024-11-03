import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
FaFacebook
const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl'>
      <div className='container'>
        <div className='grid md:grid-cols-3 py-5'>
          {/* Company Details */}
          <div className='py-8 px-4'>
            <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Vehicle Rental</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur a, doloremque porro deserunt explicabo earum assumenda, sapiente accusamus dolorem odit magni, sit delectus aliquid inventore aspernatur est. Praesentium, eaque inventore.</p>
            <br />
            <div className='flex items-center gap-3'>
              <FaLocationArrow />
              <p>Palamner, Chittoor District, Andhra Pradesh</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaMobile />
              <p>+918501891921</p>              
            </div>
            {/* Social Handles */}
            <div className='flex items-center gap-3'>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary"/>
              </a>
              <a href="https://www.facebook.com/g1kumar.in/">
                <FaFacebook className="text-3xl hover:text-primary"/>
              </a>
              <a href="mailto:g1kumar215@gmail.com">
                <FaMailBulk className="text-3xl hover:text-primary"/>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
