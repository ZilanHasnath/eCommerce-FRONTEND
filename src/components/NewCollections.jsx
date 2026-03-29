import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';



const NewCollection = () => {

    return (


        <section className="max-w-7xl mx-auto px-6 py-16">


            <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">Take A Look</h2>
                <div className="h-1.5 w-10 bg-indigo-600 mt-3 rounded-full" />
            </div>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">


                {products.map((product) => (


                    <Link to={`/products/${product.id}`} key={product.id} className="group block relative">

                        <div className="relative w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1"
                            style={{ aspectRatio: '4 / 5' }}>

                            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                src={product.image}
                                alt={product.title} />

                            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-lg border border-gray-100">
                                <p className="text-sm font-bold text-gray-900 leading-none">
                                    {product.price} <span className="text-[10px] text-gray-500 font-medium">TK</span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 px-1">

                            <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                                {product.title}
                            </h3>

                            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-medium">
                                New Arrival
                            </p>

                        </div>
                    </Link>
                ))}
            </div>


        </section>
    );
};

export default NewCollection;