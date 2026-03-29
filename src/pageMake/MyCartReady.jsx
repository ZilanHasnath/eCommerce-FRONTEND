import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BuyNowButton from '../components/BuyNowButton.jsx';

const MyCartReady = () => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);

    const userId = localStorage.getItem('userId');


    const fetchCart = async () => {

        if (!userId) {
            setLoading(false);
            return;
        }

        try {
            const res = await axios.get(`https://ecommerce-backend-2vqa.onrender.com/api/cart/mycart/${userId}`);

            setCart(res.data.cart);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, [userId]);


    const calculateTotal = () => cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleRemove = async (productId) => {
        try {
            await axios.delete(
                `https://ecommerce-backend-2vqa.onrender.com/api/cart/cartItemDelete/${productId}`,
                { data: { user: userId } }
            );

            fetchCart();

        } catch (err) {
            console.error('Failed to remove item:', err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-between">

            <div className="flex-1 flex items-center justify-center">

                {loading ? (
                    <div className="text-center text-pink-500 font-medium animate-pulse">Loading your cart...</div>
                ) : !cart || cart.items.length === 0 ? (
                    <div className="text-center text-gray-400 text-lg">Your cart is empty</div>

                ) : (
                    <div className="max-w-5xl mx-auto px-6 py-10 w-full">
                        <h2 className="text-4xl font-extrabold mb-8 text-pink-600 text-center">My Cart</h2>
                        <div className="space-y-6">

                            {cart.items.map((item) => (
                                <div key={item.productId}
                                    className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300">

                                    <div className="flex items-center w-full md:w-2/3">

                                        <img src={item.image} alt={item.title}
                                            className="w-24 h-24 object-cover rounded-xl border border-pink-100 mr-5" />


                                        <div>
                                            <p className="font-semibold text-pink-700 text-lg">{item.title}</p>
                                            <p className="text-gray-500 mt-1">Quantity: {item.quantity}</p>
                                            <p className="text-gray-500 mt-1">Price: {item.price.toFixed(2)} tk</p>
                                            <p className="text-gray-700 mt-1 font-medium">
                                                Subtotal: {(item.price * item.quantity).toFixed(2)} tk
                                            </p>
                                        </div>


                                    </div>


                                    <div className="flex gap-3 mt-0 md:mt-0">

                                        <button onClick={() => handleRemove(item.productId)}
                                            className="bg-red-500 text-white px-2 py-0 rounded-full hover:bg-red-600 transition-colors font-medium">
                                            Remove
                                        </button>

                                        <BuyNowButton product={{ ...item, id: item.productId }} />

                                    </div>


                                </div>


                            ))}


                        </div>


                        <div className="mt-8 text-right">
                            <p className="text-2xl font-bold text-pink-700">Total: {calculateTotal().toFixed(2)} tk</p>
                        </div>

                    </div>


                )}
            </div>

        </div>
    );
};

export default MyCartReady;