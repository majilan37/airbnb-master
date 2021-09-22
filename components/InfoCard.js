import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const InfoCard = ({
    img, description, location, price, star, title, total, lat, long
}) => {
    return (
        <div className='flex py-7 px-2 pr-4 cursor-pointer items-center md:items-start transition duration-200 ease border-b hover:opacity-90 hover:shadow-md first:border-t first:mt-2'>
            <div className='relative h-32 w-48 md:h-52 md:w-80 flex-shrink-0' >
                <Image 
                    src={img} 
                    layout='fill' 
                    objectFit='cover' 
                    className='rounded-md' 
                />
            </div>
            <div className='flex flex-col flex-grow ml-3' >
                <div className='flex justify-between' >
                    <p className='text-ms md:text-xl' >{location}</p>
                    <HeartIcon className='h-6' />
                </div>
                <h4 className='text-ms md:text-xl font-semibold' >{title}</h4>
                <div className='border-b w-10 pt-2' />
                <p className='pt-2 text-sm text-gray-500 flex-grow' >{description}</p>
                <div className='flex justify-between' >
                    <p className='flex items-center' >
                        <StarIcon className='h-5 text-red-400' />
                        {star}
                    </p>
                    <div>
                        <p className='text-lg font-semibold pb-2' >{price}</p>
                        <p className='text-right font-extralight'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
