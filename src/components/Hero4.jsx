import React from 'react'
import { Link } from 'react-router-dom'


const Hero4 = () => {


    return (


        <div className='relative w-full h-auto pt-1 '>

            <Link to='/products/16'>

                <div className='relative bg-blue-300 h-[65vw] w-[50%] -mt-[70%] md:-mt-[41vw] md:h-[40vw] md:w-[68%] lg:mt-2 lg:h-[30vw] lg:w-auto rounded-[20px] flex flex-col gap-20'>

                    <img className='h-full w-full object-cover rounded-[20px]' src='/images/shoe5.jpg' />

                    <div className='absolute inset-0 flex items-center justify-center lg:flex lg:justify-between lg:items-center '>
                        <h1 className='text-white font-[bold] text-6xl md:text-8xl pt-[98%] md:pt-[40%] md:-ml-[55%] md:pb-[8%] lg:pt-0 lg:pb-0 lg:ml-10 '> boO </h1>
                        <p className='text-white font-[bold] hidden lg:block md:text-6xl lg:relative lg:mr-10 lg:pt-0 '>See all</p>
                    </div>

                </div>

            </Link>

        </div>
    )
}



export default Hero4