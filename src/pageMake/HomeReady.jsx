import React from 'react'
import Hero1 from '../components/Hero1.jsx'
import Hero2 from '../components/Hero2.jsx'
import Hero3 from '../components/Hero3.jsx'
import Hero4 from '../components/Hero4.jsx'
import NewCollection from '../components/NewCollections.jsx'


const HomeReady = () => {
    return (
        <div className='h-auto'>

            <div className='md:flex md:flex-row lg:flex lg:flex-row'>
                <Hero1 />

                

                <div className='flex flex-row md:flex md:flex-col lg:flex-row gap-2'>
                    <Hero2 />
                    <Hero3 />
                </div>

            </div>

            <Hero4 />


            <NewCollection />



        </div>
    )
}

export default HomeReady