import React from 'react'

const Hero = () => {
  return (
    <div className='dark:bg-black bg-slate-100 dark:text-white duration-300 relative -z-20'>
      <div className="container min-h-[620px] flex">
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
            <div data-aos="zoom-in" data-aos-duration="1500" className='order-1 sm:order-2'>
                {/* <img src="https://shorturl.at/pDEBk" alt="" /> */}
                {/* <img src="https://shorturl.at/7pnZE" alt="Vehicles" className='relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]' /> */}
                <img src="https://shorturl.at/236JN" alt="Vehicles" className='relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]' />
            </div>
            <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
                <p data-aos="fade-up"  className='text-primary text-2xl font-serif'>🚗 Drive Your Adventure with Vehicle Rentals! 🚗 </p>
                <h1 data-aos="fade-up"  className='text-5xl lg:text-7xl font-semibold font-serif'>Vehicle Rental</h1>
                <p data-aos="fade-up" >Need a car for a weekend getaway, business trip, or just to explore the open road?  we’ve got you covered with the perfect vehicle for every journey!</p>
                <button data-aos="fade-up" className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300'>Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero