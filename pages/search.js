import { format } from "date-fns"
import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard"
import Map from "../components/Map"

function Search({searchResult}) {
    const router = useRouter()
    const {location, endDate, numberOfGusts, startDate} = router.query
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`
    console.log(searchResult);
    
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGusts}`} />
            <main className='flex' >
                <section className='flex-grow pt-16 px-6' >
                    <p className='text-xs' > {searchResult.length} Stays - {range} - for {numberOfGusts} number of guests </p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6' >Stays in {location}</h1>
                    <div className='hidden md:flex space-x-4 px-4' >
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and beds</p>
                        <p className='button'>More filters</p>
                    </div>
                    <div className='flex flex-col' >
                        {searchResult.map((item, index) => (
                            <InfoCard 
                                img={item.img}
                                description={item.description}
                                location={item.location}
                                price={item.price}
                                star={item.star}
                                title={item.title}
                                total={item.total}
                                lat={item.lat}
                                long={item.long}
                                key={index}
                            />
                        ))}
                    </div>
                </section>
                <section className="hidden xl:inline-flex min-w-[600px]" >
                    <Map searchResult={searchResult} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(){
    const searchResult = await fetch('https://links.papareact.com/isz')
                                    .then(res => res.json())
        return {
            props: {
                searchResult,
            }
        }
}

export default Search


