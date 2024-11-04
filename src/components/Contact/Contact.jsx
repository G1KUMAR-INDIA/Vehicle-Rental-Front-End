import React from 'react'

const Contact = () => {
  return (
    <div data-aos="zoom-in" className='dark:bg-black bg-gray-50 dark:text-white py-14'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 rounded-2xl px-6'>
                <div className='col-span-2 space-y-3'>
                    <h1 className='text-4xl sm:text-5xl font-bold text-[#CD3614]'>Let's Collaborate on your upcoming Vehicle rental venture</h1>
                    <p className='text-[#B0D337]'>Ready to launch your vehicle rental venture? 🚗💼 Let’s collaborate to bring your vision to life! From seamless booking systems to secure payment processing, our expertise in MERN and modern tech stacks ensures a smooth, user-friendly experience for your customers. Partner with us and drive your business forward!</p>
                </div>
                <div className='grid place-items-center'>
                    <a href="#" className='inline-block font-semibold py-2 px-6 bg-primary text-white rounded-lg tracking-wide uppercase hover:bg-primary/80 duration-300'>Contact Us</a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
