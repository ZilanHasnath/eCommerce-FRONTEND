import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const ProfileReady = ({ id }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userId");
        navigate("/login");
    };


    useEffect(() => {
        axios
            .get(`https://ecommerce-backend-2vqa.onrender.com/api/user/profile/${id}`)
            .then((res) => {
                setUser(res.data.user);
                setLoading(false);
            })
            .catch(() => {
                setError("Profile not found.");
                setLoading(false);
            });
    }, [id]);


    if (loading)
        return (
            <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
                <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        );



    if (error)
        return (
            <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
                <p className="text-xl font-semibold text-red-500">{error}</p>
            </div>
        );



    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="md:col-span-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">

                    <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center text-4xl font-bold mb-4">
                        {user.name?.charAt(0)}
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>

                    <p className="text-sm text-gray-500 mt-1">ID: {id?.slice(0, 8)}</p>


                    <div className="mt-6 w-full space-y-3 text-gray-700 text-sm">
                        <div className="flex items-center gap-2"><FiMail /> {user.email || "Not provided"}</div>
                        <div className="flex items-center gap-2"><FiPhone /> {user.phone || "Not provided"}</div>
                        <div className="flex items-center gap-2"><FiMapPin /> {user.address || "Not provided"}</div>
                    </div>


                    <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Update Info
                    </button>


                    <button onClick={handleLogout}
                        className="mt-3 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                        Logout
                    </button>


                </div>


                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

                    <Link to="/mycart" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition">
                        <h2 className="text-xl font-semibold text-gray-800">My Cart</h2>
                        <p className="text-gray-500 mt-1 text-sm">View your shopping cart</p>
                    </Link>


                    <Link to="/myorder" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition">
                        <h2 className="text-xl font-semibold text-gray-800">My Orders</h2>
                        <p className="text-gray-500 mt-1 text-sm">Check your order history</p>
                    </Link>


                    <Link to="/wishlist" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition">
                        <h2 className="text-xl font-semibold text-gray-800">Wishlist</h2>
                        <p className="text-gray-500 mt-1 text-sm">View saved products</p>
                    </Link>


                    <Link to="/settings" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition">
                        <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
                        <p className="text-gray-500 mt-1 text-sm">Manage your account</p>
                    </Link>


                </div>

            </div>

        </div>
    );
};

export default ProfileReady;