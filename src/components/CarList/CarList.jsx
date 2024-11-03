import React from 'react'

const CarListData =[
    {
        id:1,
        name:"BMW UX",
        price:1000,
        image: "https://shorturl.at/RUPbC",
        aosDelay:"0"
    },
    {
        id:2,
        name:"KIA UX",
        price:1400,
        image: "https://shorturl.at/D4qX4",
        aosDelay:"500"
    },
    {
        id:3,
        name:"BMW UX",
        price:1800,
        image: "https://shorturl.at/RUPbC",
        aosDelay:"1000"
    }
]
const CarList = () => {
  return (
    <div className='dark:bg-dark bg-white dark:text-white pb-24 pt-12'>
      <div className="container">
        {/* heading */}
        <h1 className='teaxt-3xl sm:text-4xl font-semibold font-serif mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut, quae a nobis incidunt dolorem? Officia perspiciatis ex aut inventore laborum tempora dolorem expedita. Vitae enim tempore praesentium voluptas sapiente.</h1>
        <p data-aos="fade-up" className='text-sm pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ad maiores reprehenderit beatae quaerat quia vel corrupti. Minima animi velit, voluptate similique illo vitae enim ipsa, quae error quisquam optio.</p>
        {/* Car Display Cards */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                {
                    CarListData.map((data)=>{
                        return (
                        <div key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay}  className='space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group'>
                            <div className='w-full h-[120px]'>
                                <img className='w-[250px] h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700' src={data.image} alt="" />
                            </div>
                            <div className='space-y-2'>
                                <h1 className='text-primary font-semibold'>{data.name}</h1>
                                <div className='flex justify-between items-center text-xl font-semibold'>
                                    <p className='text-blue-600'>₹{data.price}/per 10km</p>
                                    <a className='button-outline' href="#">Deatails</a>
                                </div>
                                <p className='text-xl font-semibold absolute top-0 left-3'>12Km</p>
                            </div>
                            
                        </div>
                    )})
                }
                <div className='justify-center'>
                    <button className='button-outline'>Get Started</button>
                </div>
            </div>
            <br />
            
        </div>
      </div>
    </div>
  )
}

export default CarList
