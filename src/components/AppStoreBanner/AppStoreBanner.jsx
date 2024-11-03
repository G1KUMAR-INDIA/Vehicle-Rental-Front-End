import React from 'react'
import Banner_G1kumar from "../../assets/Banner_G1kumar.jpeg"

const bannerImg={
    backgroundImage: Banner_G1kumar,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition:"center",
    height:"100%",
    width:"100%"
}
const AppStoreBanner = () => {
  return (
    <div className='container pb-14'>
            <div className='text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl' style={bannerImg}>
                <div>
                    <div className='space-y-6 max-w-xl mx-auto'>
                        <h1 data-aos="fade-up" className='text-2xl text-center sm:text-4xl '>Get Started with Our app</h1>
                        <p  data-aos="fade-up" className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, nisi explicabo hic harum a dolorem dolor quos in, sed maxime ut porro sint sit odio quod exercitationem ratione earum!</p>
                    </div>
                    <div data-aos="fade-up" className='flex flex-wrap justify-center items-center gap-4'>
                        {/* <img src="https://shorturl.at/fTI0S" alt="" /> */}
                        <a href="#"><img className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' src="https://shorturl.at/B3TrI" alt="" /></a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AppStoreBanner
