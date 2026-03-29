import React from 'react'
import { VscDebugBreakpointFunction } from "react-icons/vsc";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Hero3 = () => {
    return (
        <div className='relative w-full h-auto md:h-auto lg:h-full lg:flex-1 pt-2 md:pl-4 lg:pl-1.5 lg:mt-3'>

            <div className='relative bg-[#eaf3ea] rounded-[20px] h-[100vw] w-full md:h-[64vw] lg:h-[97%] lg:w-[31.5vw]'>

                <div className='pt-6 flex justify-center lg:pt-4 lg:-ml-10'>
                    <img className='h-auto w-[86%] lg:w-[22%] pr-1 scale-110' src='/images/vr1.png' />
                </div>

                <div className='pt-5 pl-2 text-[2vw] md:pl-1 md:text-[1.4vw] lg:pl-4 lg:text-[1vw] font-[regular]'>

                    <div className='flex items-center gap-1'>
                        <VscDebugBreakpointFunction />
                        <p> Head tracking and motion sensing</p>
                    </div>


                    <div className='flex items-center gap-1'>
                        <VscDebugBreakpointFunction />
                        <p> Immersive 3D environments</p>
                    </div>


                    <div className='flex items-center gap-1'>
                        <VscDebugBreakpointFunction />
                        <p> 360° immersive view</p>
                    </div>


                    <div className='flex items-center gap-1'>
                        <VscDebugBreakpointFunction />
                        <p> Quick setup</p>
                    </div>


                    <div className='flex items-center gap-1'>
                        <VscDebugBreakpointFunction />
                        <p> Game compatible</p>
                    </div>
                </div>


                <div className='flex justify-center pt-2 pl-2 pr-1 lg:-ml-22'>
                    <h1 className='text-[16px] md:text-[23px] font-[regular]'>Step Inside Virtual Reality </h1>
                </div>


                <Link to='/products/15'>
                    <div className='flex justify-end pr-3 -mt-4 md:pr-4 md:-mt-3 lg:-mt-11'>
                        <BsArrowUpRightCircleFill className='text-4xl sm:text-5xl' />
                    </div>
                </Link>


            </div>

        </div>
    )
}

export default Hero3