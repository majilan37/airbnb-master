import React from 'react'
import Image from 'next/image'

const SmallCard = ({img, location, distance}) => {
    return (
        <div className='flex items-center m-2 ml-4 space-x-4 rounded-lg cursor-pointer
                hover:bg-gray-50 hover:scale-105 transition transform duration-200 
                ease-out' >
            <div className='relative w-16 h-16' >
                <Image 
                    src={img} 
                    layout='fill'
                    className='rounded-md'
                />
            </div>
            <div >
                <p>{location}</p>
                <p className='text-gray-500' >{distance}</p>
            </div>
        </div>
    )
}

export default SmallCard
