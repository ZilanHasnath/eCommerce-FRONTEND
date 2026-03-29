import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import products from '../data/products.json'
import axios from 'axios'

const BuyNowReady = () => {


    const { id } = useParams()

    const product = products.find((item) => item.id === parseInt(id))
    const userId = localStorage.getItem("userId")

    const navigate = useNavigate()

    const [quantity, setQuantity] = useState(1)
    const [address, setAddress] = useState("")
    const [options, setOptions] = useState({})


    if (!product) return <div>  Product not found  </div>


    const handleInputChange = (e) => {

        const { name, value } = e.target

        setOptions({ ...options, [name]: value })
    }


    const handleBuyNow = async () => {


        if (!userId) return alert("You must login to buy products.")
        if (!address) return alert("Please enter your address.")

        try {
            await axios.post("https://ecommerce-backend-2vqa.onrender.com/api/order/buy", {
                user: userId,
                items: [{
                    productId: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity,
                    options
                }],
                totalPrice: product.price * quantity,
                address
            })
            alert("Order placed successfully")


            navigate('/')
        } catch (error) {
            console.error(error.response?.data || error)
            alert("Failed to place order")
        }
    }


    return (

        <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-8">
            <div className="flex flex-col md:flex-row gap-6">

                <div className="md:w-1/2">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-lg" />
                </div>


                <div className="md:w-1/2 flex flex-col gap-4">

                    <h2 className="text-2xl font-bold">{product.title}</h2>
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-xl font-semibold">{product.price} tk</p>

                    <div className="flex items-center gap-2">

                        <label>Quantity:</label>


                        <input type="number" min="1" value={quantity}

                            onChange={(e) => setQuantity(parseInt(e.target.value))}

                            className="border rounded px-2 py-1 w-20"
                        />
                    </div>


                    <div className="flex flex-col gap-2">

                        <label>Address:</label>

                        <textarea value={address} onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter your delivery address" className="border rounded px-2 py-1 w-full" />
                    </div>


                    {product.options?.length > 0 && (

                        <div className="flex flex-col gap-2">

                            {product.options.map((opt) => (
                                <div key={opt}>

                                    <label>{opt}:</label>

                                    <input type="text" name={opt} onChange={handleInputChange}
                                        className="border rounded px-2 py-1 w-full" />

                                </div>
                            ))}

                        </div>
                    )}


                    <div>
                        Payment method: Cash On Delevery only.
                    </div>

                    <button onClick={handleBuyNow}
                        className="mt-4 bg-amber-300 px-4 py-2 rounded-[20px] hover:bg-amber-400 transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BuyNowReady