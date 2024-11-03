import React,{useState,useEffect} from 'react'
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";
const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [darkMode]);
  return (
    <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40'>
      <div className="container">
        <div className="flex justify-between items-center">
            <div>
                <h1 className='text-3xl font-bold font-serif'>Vehicle Rental</h1>
            </div>
            <div className='hidden md:block ju'>
                    <ol className="flex items-center gap-6">
                        <li href="/home" className='text-red-600 py-3 hover:border-b-2 hover:border hover:text-primary transition-colors duration-500 text-lg font-medium'>HOME</li>
                        <li href="/about" className='text-red-600 py-3 hover:border-b-2 hover:border hover:text-primary transition-colors duration-500 text-lg font-medium'>ABOUT</li>
                        <li href="/Vehicles" className='text-red-600 py-3 hover:border-b-2 hover:border hover:text-primary transition-colors duration-500 text-lg font-medium'>VEHICLES</li>
                        <li href="/bookings" className='text-red-600 py-3 hover:border-b-2 hover:border hover:text-primary transition-colors duration-500 text-lg font-medium'>BOOKINGS</li>
                        <li href="/login" className='text-red-600 py-3 hover:border-b-2 hover:border hover:text-primary transition-colors duration-500 text-lg font-medium'>LOGIN</li>
                    </ol>
            </div>
            <div className='flex'>
                <BiSolidSun className='text-2xl'/>
                <BiSolidMoon className='text-2xl'/>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
