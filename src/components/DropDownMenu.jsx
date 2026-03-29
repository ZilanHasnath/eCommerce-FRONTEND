import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoClose, IoPerson, IoBag, IoLogIn, IoLogOut } from "react-icons/io5"

const DropDownMenu = ({ setOpen }) => {
    const navigate = useNavigate()
    const userId = localStorage.getItem("userId")


    const logoutBtn = () => {
        localStorage.removeItem("userId")
        navigate("/login")
        setOpen(false)
    }



    return (
        <div className="fixed top-20 left-4 md:left-7 z-50 w-64 bg-black/95 backdrop-blur-md shadow-xl border border-gray-800 rounded-2xl overflow-hidden">

            <div className="flex justify-between items-center p-3 border-b border-gray-800">

                <h2 className="text-md font-semibold text-white">Menu</h2>

                <button onClick={() => setOpen(false)} className="text-2xl p-1 rounded-full hover:bg-gray-700 transition">
                    <IoClose className="text-white" />
                </button>

            </div>


            <nav className="flex flex-col px-3 py-2 space-y-2">

                {userId ? (
                    <>

                        <Link
                            to={`/profile/${userId}`} className="flex items-center gap-2 px-3 py-2 rounded-md text-white hover:bg-gray-800 hover:text-blue-400 font-medium transition"
                            onClick={() => setOpen(false)}>
                            <IoPerson /> My Profile
                        </Link>


                        <Link to="/myorder" className="flex items-center gap-2 px-3 py-2 rounded-md text-white hover:bg-gray-800 hover:text-blue-400 font-medium transition"
                            onClick={() => setOpen(false)}>
                            <IoBag /> My Orders
                        </Link>



                        <button onClick={logoutBtn} className="flex items-center gap-2 px-3 py-2 rounded-md text-red-500 hover:bg-red-800 hover:text-red-400 font-medium transition w-full text-left">
                            <IoLogOut /> Logout
                        </button>

                    </>


                ) : (
                    <>

                        <Link to="/login" className="flex items-center gap-2 px-3 py-2 rounded-md text-white hover:bg-gray-800 hover:text-blue-400 font-medium transition"
                            onClick={() => setOpen(false)} >
                            <IoLogIn /> Login
                        </Link>


                        <Link to="/signup" className="flex items-center gap-2 px-3 py-2 rounded-md text-white hover:bg-gray-800 hover:text-blue-400 font-medium transition"
                            onClick={() => setOpen(false)}>
                            <IoLogIn /> Sign Up
                        </Link>

                    </>

                )}

            </nav>


        </div>
    )
}

export default DropDownMenu

