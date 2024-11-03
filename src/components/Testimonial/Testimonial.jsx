import React from 'react'

const TestimonialsData=[
    {
        name:"K Raja",
        image:"https://shorturl.at/v6ZuF",
        description:"Absolutely fantastic experience! The rental process was quick and easy, and the vehicle was in perfect condition. The rates were very affordable, and the staff was friendly and professional. The driver was experienced and made the journey feel safe and comfortable. I highly recommend this service for anyone looking for a hassle-free, budget-friendly rental option!",
        aosDelay:"0",
        rating:"⭐⭐⭐⭐"
    },
    {
        name:"T Krishna",
        image:"https://shorturl.at/FBoHk",
        description:"Highly impressed with the service! Booking was smooth, and I got a clean, well-maintained vehicle at a great price. The staff was super helpful and made sure everything was ready on time. I felt safe throughout the ride thanks to the experienced driver. Will definitely rent from here again—such a convenient and reliable option!",
        aosDelay:"150",
        rating:"⭐⭐⭐⭐⭐"
    },
    {
        name:"Bandi Eswar Reddy",
        image:"https://shorturl.at/FzP0k",
        description:"Great experience from start to finish! The rental prices were very reasonable, and the vehicle was in excellent condition. The team was responsive and made the entire process so easy. I especially appreciated the professionalism of the driver, who made the trip feel safe and comfortable. Definitely my go-to rental service from now on",
        aosDelay:"300",
        rating:"⭐⭐⭐⭐⭐"
    }
]

const Testimonial = () => {
  return (
    <div className='dark-bg-black dark:text-white bg-gray-50 py-14 sm:pb-24'>
      <div className="container">
        {/* Header */}
        <div className='space-y-4 pb-12'>
            <p  data-aos="fade-up"  className='text-[#A558CE] text-3xl font-semibold text-center sm:text-4xl font-serif'>What Our Clients Say About Us</p>
            <p data-aos="fade-up" className='text-[#A7765E] text-center sm:px-44'>Customer comments on our vehicle rental service reflect their satisfaction with our seamless booking process, well-maintained vehicles, and affordable pricing. Customers appreciate the quality and cleanliness of the vehicles, noting that they feel safe and comfortable on every ride, thanks to our experienced drivers. Friendly and professional service from our staff is another highlight, making each rental experience stress-free and enjoyable. These positive reviews underscore our commitment to providing reliable, budget-friendly transportation options that customers can trust for any journey.</p>
        </div>
        {/* Card Session */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white'>
            {
                TestimonialsData.map((data)=>{
                        return(
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.name} className='card text-center  group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg'>
                                <div className='grid place-items-center'>
                                    <img className="h-20 w-20 rounded-full" src={data.image} alt="" />
                                </div>
                                <div className='text-2xl'>
                                    <h2 className='text-[#0E9109] text-2xl'>{data.name}</h2>
                                    <p className=''>{data.rating}</p>
                                    <p className='text-2xl text-[#466687]'>{data.description}</p>
                                </div>                            
                            </div>
                        )
                })
                
            }
        </div>

      </div>
    </div>
  )
}

export default Testimonial
