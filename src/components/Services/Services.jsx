import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import {GiNotebook} from 'react-icons/gi'
import {SlNote} from 'react-icons/sl'

const skillData=[
    {
        name:"Best Price",
        icon:(
            <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link:"#",
        description: "Drive more, pay less! 🚗 Get unbeatable prices on vehicle rentals, perfect for any budget. No hidden fees, just clear, affordable rates for your travel needs. Book with us and save big on your next adventure!",
        aosDelay:"0",
    },
    {
        name:"Fast and Safe",
        icon:(
            <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link:"#",
        description: "Need a ride in a flash? 🚕 With our quick booking and seamless rental process, you’ll be on the road in no time! Say goodbye to long waits—rent a vehicle with us for a fast, hassle-free experience. Book now and hit the road faster!",
        aosDelay:"500",
    },
    {
        name:"Experience Drivers",
        icon:(
            <SlNote className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link:"#",
        description: "Your safety is our priority! 🚙 Our rentals come with skilled, experienced drivers who ensure a safe, comfortable ride every time. Travel with peace of mind and let our professionals handle the road. Reserve your ride for a safe, smooth journey!",
        aosDelay:"1000",
    },
]
const Services = () => {
  return (
    <div className='py-14 dark:bg-black bg-slate-50 dark:text-white sm:min-h[600px] sm:grid sm:place-items-center'>
        <div className=''>
            <div className='container'>
                <div className='pb-12'>
                    <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>Why Choose Us</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        skillData.map((skill)=>(
                            <div className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg' key={skill.name} data-aos="fade-up" data-aos-delay={skill.aosDelay}>
                                <div className='grid place-items-center'>{skill.icon}</div>
                                <h1>{skill.name}</h1>
                                <p>{skill.description}</p>
                                <a href={skill.link}></a>
                                <div></div>
                                <div></div>
                            </div>
                        ))    
                    }
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Services
