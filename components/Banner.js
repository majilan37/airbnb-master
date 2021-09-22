import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[800px]' >
           <Image 
                src='https://links.papareact.com/0fm'
                layout='fill'
                objectFit='cover'
                objectPosition='bottom'
           />
           <div className='absolute top-1/2 w-full flex flex-col items-center' >
               <p className='text-sm sm:text-lg' >Not sure where to go ? Perfect .</p>
               <button className='text-purple-500 bg-white px-10 py-5 shadow-md rounded-full font-medium 
                     my-3 hover:shadow-lg transition duration-200 active:scale-95'>
                   I'm flexible
               </button>
           </div>
        </div>
    )
}

export default Banner
 