import React, { useState } from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    GlobeAltIcon,
    UserIcon,
    UserCircleIcon,
    MenuIcon
} from '@heroicons/react/solid'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Button } from '@mui/material';
import { useRouter } from 'next/dist/client/router';

const Header = ({placeholder}) => {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numGusts, setNumGusts] = useState(1)
    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:'selection'
    }
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGusts: numGusts
            }
        })
        setSearchInput('')
    }
    return (
        <header className='sticky top-0 grid z-50 grid-cols-3 
            bg-white shadow-md p-5 md:px-10'>
            <div onClick={() => router.push('/') } className='relative sm:flex items-center h-8  cursor-pointer my-auto'>
                <Image  
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            <div className='flex items-center md:border rounded-full py-1 
                    justify-between pl-4 pr-1 shadow-sm' >
                <input 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text" 
                    className='outline-none flex-grow-0 md:flex-grow text-sm text-gray-600 
                        placeholder-gray-400'  
                    placeholder= {placeholder ? placeholder : "Start your search"} 
                />
                <SearchIcon className='h-8 hidden bg-red-400 text-white 
                    rounded-full p-2 cursor-pointer md:inline-flex' 
                />
            </div>
            <div className='flex  items-center justify-end text-gray-700' >
                <p className='cursor-pointer hidden md:inline-flex hover:bg-gray-50 py-2 px-4 rounded-full' >Become a host</p>
                <GlobeAltIcon className='h-10 cursor-pointer p-2 mr-2 hover:bg-gray-50 rounded-full'  />
                <div className='flex items-center space-x-1 border p-2 rounded-full bg-gray-50 cursor-pointer' >
                    <MenuIcon className='h-5' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
            {searchInput &&  (
                <div className='flex flex-col col-span-3 mx-auto mt-10' >
                    <DateRangePicker 
                        ranges={[selectionRange]} 
                        minDate={new Date()} 
                        rangeColors={['#fd5b61']}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className='text-2xl font-medium flex-grow'>Number of guests</h2>
                        <UserIcon className='h-5' />
                        <input  
                            type="number" 
                            className='w-12 pl-2 ml-2 text-gray-700 text-lg border outline-none focus:ring-1 ring-[#fd5b61] rounded-sm transition duration-200' 
                            value={numGusts}
                            min={1}
                            onChange={(e) => setNumGusts(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-around' >
                        <Button onClick={ () => setSearchInput('')} variant='text' style={{ color: 'gray' }} >Cancel</Button>
                        <Button variant='text' style={{ color: '#fd5b61' }} onClick={search} >Search</Button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
