import React, { useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"


const LoginReady = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('https://ecommerce-backend-2vqa.onrender.com/api/user/login', formData)

            const userId = res.data.user._id

            localStorage.setItem("userId", userId);

            navigate(`/profile/${userId}`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
                    Welcome
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Please enter your details to sign in
                </p>
            </div>


            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-sm border border-gray-100 sm:rounded-xl sm:px-10">

                    <form className="space-y-6" onSubmit={handleSubmit}>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>


                            <div className="mt-1">
                                <input name="email" type="email" required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm transition-all"
                                    onChange={handleChange} />
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                

                            </div>

                            <div className="mt-1">
                                <input name="password" type="password" required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm transition-all"
                                    onChange={handleChange} />
                            </div>

                        </div>


                        <div className="flex items-center">

                            <input id="remember-me" name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>

                        </div>


                        <div>

                            <button type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm 
                                font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors">
                                Sign in
                            </button>

                        </div>

                    </form>

                    <div className="mt-6">
                        <div className="relative">

                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>

                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    New here?
                                </span>
                            </div>

                        </div>

                        <div className="mt-6">
                            <Link to='/signup'>
                                <button type="button"
                                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm 
                                    font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors" >
                                    Create an account
                                </button>
                            </Link>
                        </div>


                    </div>


                </div>
            </div>

        </div>
    )
}

export default LoginReady