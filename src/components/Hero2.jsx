import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Hero2 = () => {

    return (

        <div className='relative w-full h-auto pt-2 md:pt-5 md:pl-4 lg:pt-5 lg:pl-3'>

            <div className='relative h-[32vw] w-[48vw] md:h-[24vw] md:w-full lg:h-full lg:w-full rounded-[20px] overflow-hidden bg-amber-300'>

                <h1 className='absolute uppercase top-3 left-4 font-normal text-[14px] md:top-5 md:left-5 md:text-[22px] md:font-bold lg:pt-1 z-10 leading-tight'>
                    New Gen <br /> X-Bud
                </h1>

                <div className='flex items-center justify-end pr-4 h-full w-full'>
                    <img
                        className='h-[28vw] md:h-[18vw] w-auto object-contain'
                        src='/images/earbuds2.png'
                        alt="X-Bud Earbuds"
                    />
                </div>

                <Link to='/products/14'>

                    <div className='absolute bottom-3 left-4 text-3xl md:bottom-4 md:left-5 md:text-5xl opacity-75'>
                        <BsArrowUpRightCircle />
                    </div>

                </Link>

            </div>

        </div>
    )
}

export default Hero2