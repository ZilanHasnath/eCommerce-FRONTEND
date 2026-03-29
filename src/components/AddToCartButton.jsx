import React from 'react'
import axios from 'axios'

const AddToCartButton = ({ product, userId }) => {

    const handleAddToCart = async () => {
        if (!userId) return alert("You must be logged in to add items.");



        try {
            await axios.post("https://ecommerce-backend-2vqa.onrender.com/api/cart/addToCart", {
                user: userId,
                items: [{
                    productId: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                }],
                totalPrice: product.price
            });
            
            alert("Added to cart!");


        } catch (error) {
            console.error(error.response?.data || error);
            alert("Failed to add to cart");
        }
    };



    return (
        <div className='flex flex-row justify-start mt-4'>

            <button onClick={handleAddToCart}
                className='bg-amber-300 px-4 py-2 rounded-[20px] hover:bg-amber-400 transition'>
                Add to cart
            </button>

        </div>
    )
}

export default AddToCartButton