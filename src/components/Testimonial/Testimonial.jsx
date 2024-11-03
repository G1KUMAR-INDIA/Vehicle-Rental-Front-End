import React from 'react'

const TestimonialsData=[
    {
        name:"K Raja",
        image:"https://shorturl.at/v6ZuF",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam cum voluptatem aspernatur vel excepturi unde ratione expedita delectus saepe! Soluta voluptatibus labore sequi ullam eaque officia esse reprehenderit officiis?",
        aosDelay:"0"
    },
    {
        name:"T Krishna",
        image:"https://shorturl.at/FBoHk",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam cum voluptatem aspernatur vel excepturi unde ratione expedita delectus saepe! Soluta voluptatibus labore sequi ullam eaque officia esse reprehenderit officiis?",
        aosDelay:"150"
    },
    {
        name:"Bandi Eswar Reddy",
        image:"https://shorturl.at/FzP0k",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam cum voluptatem aspernatur vel excepturi unde ratione expedita delectus saepe! Soluta voluptatibus labore sequi ullam eaque officia esse reprehenderit officiis?",
        aosDelay:"300"
    }
]

const Testimonial = () => {
  return (
    <div className='dark-bg-black dark:text-white py-14 sm:pb-24'>
      <div className="container">
        {/* Header */}
        <div className='space-y-4 pb-12'>
            <p  data-aos="fade-up"  className='text-3xl font-semibold text-center sm:text-4xl font-serif'>What Our Clients Say About Us</p>
            <p data-aos="fade-up" className='text-center sm:px-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit similique fugiat soluta dolor accusamus, error, ut quas totam ex ipsam eligendi, magnam exercitationem fuga officia quod. Commodi, excepturi voluptate.</p>
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
                                    <h2 className='text-2xl'>{data.name}</h2>
                                    <p className=''>⭐⭐⭐⭐⭐</p>
                                    <p className='text-2xl'>{data.description}</p>
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
