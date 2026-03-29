import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products.json'
import AddToCartButton from './AddToCartButton.jsx'
import BuyNowButton from './BuyNowButton.jsx'
import NewCollection from './NewCollections.jsx'



const SingleNewCollections = () => {


    const { id } = useParams()
    const product = products.find((item) => item.id === parseInt(id))


    if (!product) {
        return (
            <div className='min-h-[60vh] flex justify-center items-center'>
                <div className='bg-red-50 px-10 py-5 rounded-2xl border border-red-100'>
                    <h1 className='text-2xl font-bold text-red-600'>Product Not Found!</h1>
                </div>
            </div>
        )
    }

    const userId = localStorage.getItem("userId");

    return (

        <div className='max-w-7xl mx-auto px-4 py-8 lg:py-12'>
            <div className='flex flex-col lg:flex-row gap-10 lg:items-start'>


                <div className='w-full lg:w-1/2'>
                    <div className='bg-gray-100 rounded-[30px] overflow-hidden shadow-sm'>
                        <img className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                            src={product.image}
                            alt={product.title} />
                    </div>
                </div>


                <div className='w-full lg:w-1/2 flex flex-col gap-6'>
                    <div>
                        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>

                            {product.title}
                        </h1>
                        <div className='h-1 w-20 bg-black rounded-full'></div>
                    </div>


                    <div className='flex items-center gap-4'>
                        <span className='text-3xl font-semibold text-gray-900'>
                            {product.price} tk
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>


                    <div className='flex flex-row gap-2'>

                        {product.inStock && userId && (
                            <AddToCartButton product={product} userId={userId} />
                        )}

                        {product.inStock && (
                            <BuyNowButton product={product} />
                        )}

                    </div>



                    <div className='border-t border-b border-gray-100 py-6'>

                        <h3 className='text-lg font-bold mb-3 text-gray-700'>Product Details:</h3>
                        <p className='text-gray-600 leading-relaxed'>
                            {product.description}
                        </p>

                    </div>


                </div>

            </div>
            <NewCollection />
        </div>
    )
}

export default SingleNewCollections