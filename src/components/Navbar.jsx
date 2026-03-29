import React, { useState } from 'react'
import { RiShoppingCartFill } from "react-icons/ri"
import { TiThMenu } from "react-icons/ti"
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu.jsx'



const Navbar = () => {
    const [open, setOpen] = useState(false)

    const userId = localStorage.getItem("userId")

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }



    return (
        <nav className='sticky top-0 left-0 w-full px-4 pt-4 z-50'>
            <div className='max-w-7xl mx-auto w-full h-16 px-8 rounded-full bg-amber-300 flex items-center justify-between shadow-lg border border-black/5'>


                <div className='flex-1 flex items-center'>

                    <Link to="/" onClick={scrollToTop}
                        className='text-gray-900 font-semibold tracking-wide hover:text-white transition-all duration-300' >
                        Home
                    </Link>

                </div>

                <div className='flex-none'>

                    <Link to="/" onClick={scrollToTop}
                        className='text-2xl sm:text-3xl font-black tracking-tighter text-gray-900 hover:scale-105 transition-transform block'>
                        <h1>buydoo.</h1>
                    </Link>

                </div>



                <div className='flex-1 flex items-center justify-end gap-6'>

                    {userId && (
                        <Link to={`/profile/${userId}`}
                            className='hidden md:block text-gray-900 font-semibold tracking-wide hover:text-white transition-all duration-300'>
                            Profile
                        </Link>
                    )}



                    <Link to="/mycart"
                        className='text-2xl text-gray-900 transition-all duration-300 hover:text-white hover:-translate-y-0.5'>
                        <RiShoppingCartFill />
                    </Link>



                    <button className='text-2xl text-gray-900 transition-all duration-300 hover:rotate-90 hover:text-white'
                        onClick={() => setOpen(!open)} >
                        <TiThMenu />
                    </button>


                </div>
            </div>


            {open && <DropDownMenu setOpen={setOpen} userId={userId} />}


        </nav>
    )
}

export default Navbar