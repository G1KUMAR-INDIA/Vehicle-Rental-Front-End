import React from 'react'

const About = () => {
  return (
    <div    >
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                <div data-aos="slide-right" data-aos-duration="1500" data-aos-once="false">
                    {/* <img className='sm:scale-105 sm:-translate-x-11 max-h-[300px] dsm:scale-125 drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)' src="https://shorturl.at/qolkD" alt="About Us" /> */}
                    <img className='sm:scale-105 sm:-translate-x-11 max-h-[300px] dsm:scale-125 drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)' src="https://shorturl.at/8x9We" alt="About Us" />
                </div>
                <div>
                    <div className='space-y-5 sm:p-16 pb-6'>
                        <h1 className='text-4xl sm:text-3xl font-serif'>About Us</h1>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt temporibus ex possimus at provident repudiandae. Aspernatur iusto doloremque temporibus obcaecati aut atque, placeat ex accusamus provident sed, debitis cupiditate.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint praesentium laboriosam assumenda necessitatibus veniam perferendis corporis incidunt excepturi quisquam harum aliquid alias sed quos, distinctio voluptatem quam quasi ut culpa.</p>
                        <button className='button-outline'>Get Started</button>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default About
