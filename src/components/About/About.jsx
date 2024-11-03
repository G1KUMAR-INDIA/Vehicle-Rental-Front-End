import React from 'react'

const About = () => {
  return (
    <div className='bg-slate-50'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                <div data-aos="slide-right" data-aos-duration="1500" data-aos-once="false">
                    {/* <img className='sm:scale-105 sm:-translate-x-11 max-h-[300px] dsm:scale-125 drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)' src="https://shorturl.at/qolkD" alt="About Us" /> */}
                    <img className='sm:scale-105 sm:-translate-x-11 max-h-[300px] dsm:scale-125 drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)' src="https://shorturl.at/8x9We" alt="About Us" />
                </div>
                <div>
                    <div className='space-y-5 sm:p-16 pb-6'>
                        <h1 className='text-4xl text-[#474604] sm:text-3xl font-serif'>Explore your city with ease!</h1>
                        <p className='text-[]'>🚲 Rent a two-wheeler at affordable rates and enjoy hassle-free rides.</p>
                        <p className='text-[]'>No long-term commitments, just smooth and convenient travel whenever you need it. Book now and ride away in style!</p>
                        <button className='button-outline'>Get Started</button>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default About
