import React from 'react'
import Image from 'next/image'

const MediumCard = ({img, title}) => {
    return (
        <div className="cursor-pointer hover:scale-105 transition duration-200 hover:bg-gray-50 ease-out" >
            <div className="relative w-80 h-80" >
                <Image src={img} layout='fill' className="rounded-md" />
            </div>
            <p className='text-xl mt-2 font-semibold' >{title}</p>
        </div>
    )
}

export default MediumCard
