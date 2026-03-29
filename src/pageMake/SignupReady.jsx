import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const SignupReady = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", password: "", address: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(
                "https://ecommerce-backend-2vqa.onrender.com/api/user/signup", formData);

            console.log(res.data);

            navigate('/login')

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
                    Create your account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

                <div className="bg-white py-8 px-4 shadow-sm border border-gray-100 sm:rounded-xl sm:px-10">

                    <form className="space-y-6" onSubmit={handleSubmit}>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input name="name" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm transition-all"
                                    onChange={handleChange} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <div className="mt-1">
                                    <input name="email" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm transition-all"
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Phone
                                </label>

                                <div className="mt-1">
                                    <input name="phone" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm transition-all"
                                        onChange={handleChange} />
                                </div>
                            </div>
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>

                            <div className="mt-1">
                                <input name="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm transition-all"
                                    onChange={handleChange} />
                            </div>
                        </div>


                        <div>

                            <label className="block text-sm font-medium text-gray-700">
                                Address
                            </label>

                            <div className="mt-1">
                                <textarea name="address" rows="3" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm transition-all"
                                    onChange={handleChange}>
                                </textarea>
                            </div>
                        </div>


                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors">
                                Sign up
                            </button>
                        </div>
                    </form>


                </div>
            </div>


        </div>
    )
}

export default SignupReady