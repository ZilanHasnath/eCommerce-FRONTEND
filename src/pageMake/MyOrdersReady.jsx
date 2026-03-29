import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyOrdersReady = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userId = localStorage.getItem('userId');

    useEffect(() => {

        const fetchOrders = async () => {
            if (!userId) {
                setError('User not logged in');
                setLoading(false);
                return;
            }

            try {
                const res = await axios.get(`https://ecommerce-backend-2vqa.onrender.com/api/order/user/${userId}`);
                setOrders(res.data.orders);
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch orders');
            } finally {
                setLoading(false);
            }
        };


        fetchOrders();
    }, [userId]);

    return (
        <div className="min-h-screen flex flex-col justify-between">


            <div className="flex-1 flex items-center justify-center">

                {loading ? (
                    <div className="text-center text-pink-500 font-medium animate-pulse">Loading your orders...</div>
                ) : error ? (

                    <div className="text-center text-red-400 font-medium">{error}</div>

                ) : orders.length === 0 ? (

                    <div className="text-center text-gray-400 text-lg">No orders found</div>

                ) : (

                    <div className="max-w-5xl mx-auto px-4 py-8 w-full">
                        <h2 className="text-3xl font-bold mb-8 text-pink-600 text-center">My Orders</h2>

                        <div className="space-y-6">


                            {orders.map((order) => (

                                <div key={order._id} className="bg-pink-50 border border-pink-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">

                                    <div className="flex justify-between mb-4">
                                        <span className="font-semibold text-pink-700">Order ID:</span>
                                        <span className="text-gray-700 font-medium">{order._id}</span>
                                    </div>


                                    <div className="flex justify-between mb-4 items-center">


                                        <span className="font-semibold text-pink-700">Status:</span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                                            order.status === 'Delivered' ? 'bg-green-200 text-green-800' :
                                                'bg-gray-200 text-gray-700'
                                            }`}>

                                            {order.status}
                                        </span>


                                    </div>


                                    <div className="flex justify-between mb-4">
                                        <span className="font-semibold text-pink-700">Total:</span>
                                        <span className="text-gray-800 font-medium">${order.totalPrice}</span>
                                    </div>


                                    <div className="mb-4">
                                        <span className="font-semibold text-pink-700">Address:</span>
                                        <p className="text-gray-700 mt-1">{order.address}</p>
                                    </div>


                                    <div>
                                        <span className="font-semibold text-pink-700">Items:</span>
                                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">


                                            {order.items.map((item, index) => (
                                                <div key={index} className="flex items-center bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
                                                    <img src={item.image} alt={item.title}
                                                        className="w-20 h-20 object-cover rounded-xl border border-pink-100 mr-4" />

                                                    <div>
                                                        <p className="font-medium text-pink-600">{item.title}</p>
                                                        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                                                        <p className="text-gray-800 font-semibold">${item.price}</p>
                                                    </div>

                                                </div>


                                            ))}
                                        </div>


                                    </div>


                                </div>


                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrdersReady;