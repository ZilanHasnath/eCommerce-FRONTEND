import React, { useRef } from 'react'
import { VscDebugBreakpointFunction } from "react-icons/vsc";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom';



const Hero1 = () => {
    const container = useRef()


    useGSAP(() => {
        gsap.to('.helloImage', {
            y: 7,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        })
    }, { scope: container })




    return (

        <div className='pt-3 md:pt-5 lg:pt-5'>
            <div ref={container} className='w-full h-[65vw] rounded-[20px] md:w-[65vw] md:h-[48vw] lg:w-[47vw] lg:h-auto bg-[#eaf3ea] overflow-hidden relative'>

                <div className='pl-4 pt-4 sm:pt-7 lg:h-[26vw] '>
                    <h1 className='text-2xl sm:text-5xl font-[bold] uppercase'> Feel Every Beat <br /> Deeper </h1>
                    <div className='pt-4 text-[2vw] max-w-[95%] sm:block md:text-[1.5vw] lg:text-[1vw] sm:pt-6 sm:max-w-[50%] font-[regular] '>


                        <div className='flex items-center gap-1'>
                            <VscDebugBreakpointFunction />
                            <p> Clear Sound - Crisp, Balanced Audio</p>
                        </div>



                        <div className='flex items-center gap-1'>
                            <VscDebugBreakpointFunction />
                            <p> Deep Bass - Powerful, Punchy Lows</p>
                        </div>



                        <div className='flex items-center gap-1'>
                            <VscDebugBreakpointFunction />
                            <p> Long Battery - All-Day Listening</p>
                        </div>

                    </div>
                </div>


                <div className='absolute bottom-4 md:bottom-6 lg:bottom-0 right-0 pl-40 sm:pl-0 h-full w-full flex justify-end items-end'>
                    <img className='helloImage h-[80%] md:h-[75%] lg:h-[90%] w-auto object-contain' src='/images/headphone1.png' />
                </div>



                <div className='absolute flex bottom-7 pl-[4%] md:pl-[7%] lg:pl-[10%] justify-end items-center'>
                    <Link to='/products/13'>

                        <div className='w-40 h-10 gap-4 md:gap-5 lg:gap-10 text-[3vw] md:w-55 lg:w-55 sm:h-12 md:text-[2vw] lg:text-[1vw]  bg-amber-300 hover:bg-amber-400 cursor-pointer flex items-center justify-center rounded-[22px]'>
                            <h1 className='pl-3 md:pl-4 font-[regular]'> View The Product </h1>

                            <BsArrowUpRightCircleFill className='text-4xl sm:text-5xl' />

                        </div>

                    </Link>

                </div>


            </div>

        </div>

    )

}



export default Hero1