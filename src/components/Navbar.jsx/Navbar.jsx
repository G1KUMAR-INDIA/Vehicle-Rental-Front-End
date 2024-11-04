import React,{useState,useEffect} from 'react'
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";
import ResponsiveMenu from './ResponsiveMenu';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
export const NavLinks=[
  {
    id:1,
    name:"Home",
    link:"/#",
  },
  {
    id:2,
    name:"Vehicles",
    link:"/#",
  },
  {
    id:3,
    name:"About",
    link:"/#about",
  },
  {
    id:4,
    name:"Bookings",
    link:"/#bookings",
  },
  {
    id:5,
    name:"Login",
    link:"/#login",
  },
]
const Navbar = () => {
    const [showMenu,setShowMenu]=useState(false)

    const togglemenu=()=>{
      setShowMenu(!showMenu)
    }
  return (
    <nav className='shadow-md bg-blue-500 dark:bg-dark dark:text-red-500 duration-300 relative z-40'>
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
            <div>
                <h1 className='text-3xl text-white font-bold font-serif'>Vehicle Rental</h1>
            </div>
            <div className='hidden md:block ju'>
                    <ol className="flex items-center gap-6">
                        <li href="/home" className='text-red-500 py-3 hover:border-b-2 hover:border hover:text-white transition-colors duration-500 text-lg font-medium'>HOME</li>
                        <li href="/about" className='text-red-500 py-3 hover:border-b-2 hover:border hover:text-white transition-colors duration-500 text-lg font-medium'>ABOUT</li>
                        <li href="/Vehicles" className='text-red-500 py-3 hover:border-b-2 hover:border hover:text-white transition-colors duration-500 text-lg font-medium'>VEHICLES</li>
                        <li href="/bookings" className='text-red-500 py-3 hover:border-b-2 hover:border hover:text-white transition-colors duration-500 text-lg font-medium'>BOOKINGS</li>
                        <li href="/login" className='text-red-500 py-3 hover:border-b-2 hover:border hover:text-white transition-colors duration-500 text-lg font-medium'>LOGIN</li>
                    </ol>
            </div>
            <div className='flex items-center gap-4 md:hidden'>
              <div className='flex'>
                  <BiSolidSun className='text-2xl'/>
                  <BiSolidMoon className='text-2xl'/>
              </div>
              {
                showMenu?(<HiMenuAlt1 onClick={togglemenu} size={30} className="cursor-position transition-all"/>):(<HiMenuAlt3 onClick={togglemenu} size={30} className="cursor-position transition-all"/>)
              }
            </div>
            
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu}/>
    </nav>
  )
}

export default Navbar
