import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

//https://airbnb-master.vercel.app/

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-32" >
          <section className="pt-6" >
              <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold pb-5' >Explore Nearby</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' >
                {exploreData?.map((data, index) => (
                  <SmallCard key={index} img={data.img} location={data.location} distance={data.distance} />
                ))}
              </div>
          </section>
          <section>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold py-8' >Live Anywhere</h2>
            <div className='flex max-w-full overflow-x-auto overflow-y-hidden 
                  space-x-4 scrollbar-hide items-center p-3' >
                {cardsData?.map((data, index) => (
                  <MediumCard  key={index} img={data.img} title={data.title} />
                ))}
            </div>
          </section>
          <LargeCard 
            img='https://links.papareact.com/4cj'
            title='The Greatest Outdoor'
            description='Wishlists curated by Airbnb'
            buttonText='Get inspired'
          />
      </main> 
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp')
                              .then(res => res.json())
  const cardsData = await fetch('https://links.papareact.com/zp1')  
                              .then(res => res.json())
      return {
        props: {
          exploreData,
          cardsData
        }
      }
}