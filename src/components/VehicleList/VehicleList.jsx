import React from 'react'

const VehicleListData =[
    {
        id:1,
        name:"Honda Activa 6G",
        price:400,
        image: "https://shorturl.at/vXsO8",
        aosDelay:"0",
        movement:"fade-up"
    },
    {
        id:2,
        name:"KIA UX",
        price:1400,
        image: "https://shorturl.at/D4qX4",
        aosDelay:"500",
        movement:"fade-up"
    },
    {
        id:3,
        name:"BMW UX",
        price:1800,
        image: "https://shorturl.at/RUPbC",
        aosDelay:"1000",
        movement:"zoom"
    }
]
const VehicleList = () => {
  return (
    <div className='dark:bg-dark bg-gray-50 dark:text-white pb-24 pt-12'>
      <div className="container">
        {/* heading */}
        <h1 className='teaxt-3xl text-[#DD89B5] sm:text-4xl font-semibold font-serif mb-3'>Rent Your Ride</h1>
        <p data-aos="fade-up" className='text-[#3F438F] text-sm pb-10'><small>Discover the freedom of flexible, affordable vehicle rentals! Whether you’re exploring new places or need a reliable ride for daily commutes, we offer a range of options to suit your needs. With competitive prices, quick booking, and a commitment to safety with our experienced drivers, every journey is made easy. Choose Rent Your Ride for the best travel experience—convenient, safe, and budget-friendly. Book now and get on the road with confidence!</small></p>
        {/* Car Display Cards */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                {
                    VehicleListData.map((data)=>{
                        return (
                        <div key={data.id} data-aos={data.movement} data-aos-delay={data.aosDelay}  className='space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group'>
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

export default VehicleList
