import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { NavLinks } from './Navbar'

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={`${showMenu?"left-0":"-left-full"} fixed top-0 z-50 bg-gray-100 text-red-400 dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}>
        <div className='card'>
            <div className='flex flex-col items-center justify-start gap-3'>
                <FaUserCircle size={50}/>
                <div>
                    <h1>Hello Customer</h1>
                    <h1>Premium User</h1>
                </div>
                {/* Links */}
                <nav className='mt-12'>
                    <ul className='space-y-4 text-xl'>
                        {
                            NavLinks.map((data)=>(
                                <li>
                                    <a href={data.link}>{data.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                {/* footer */}
                <div>
                    <h1>Made with Developer by <a href="https://github.com/G1KUMAR-INDIA">G1KUMAR</a></h1>
                </div>
            </div>        
        </div>      
    </div>
  )
}

export default ResponsiveMenu
