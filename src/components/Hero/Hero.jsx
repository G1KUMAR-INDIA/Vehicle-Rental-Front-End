import React from 'react'

const Hero = () => {
  return (
    <div className='bg-slate-100 duration-300 -z-20'>
      <div className="container min-h-[620px] flex">
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
            <div data-aos="zoom" data-aos-duration="150" className='order-1 sm:order-2'>
                <img src="https://shorturl.at/236JN" alt="Vehicles" className='relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]' />
            </div>
            <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
                <p data-aos="fade-up"  className='text-primary text-xl font-serif'>🚗 Drive Your Adventure with Vehicle Rentals! 🚗 </p>
                <h1 data-aos="fade-up"  className='text-5xl text-[#6E26DE] lg:text-7xl font-semibold font-serif'>Car Rental</h1>
                <p data-aos="fade-up" className='text-[#474604]' >Need a car for a weekend getaway, business trip, or just to explore the open road?  we have got you covered with the perfect vehicle for every journey!</p>
                <button data-aos="fade-up" className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300'>Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
