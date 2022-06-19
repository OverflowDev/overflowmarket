// import { Link } from 'react-router-dom'
import { useContext, } from 'react'
import CartImage from '../assets/pexels-karolina-grabowska-5632402.jpg'
import Navbar from '../layouts/Navbar'

import ProductsContext from '../context/products/ProductsContext'
import PopularProducts from '../components/PopularProducts'
import Category from '../components/Category'

function Home() {

  const {populars} = useContext(ProductsContext)

  return (
    <div className=''>
        
        <section className="h-screen bg-cover relative" style={{backgroundImage: `url('${CartImage}')`}}>
          <Navbar />
          <div className="md:hidden flex justify-center container mx-auto px-12">
            <div className="max-w-2xl text-center">
              <form className="mt-12 flex">
                  <input className="rounded-l-lg py-2 border-t-2 border-b-2 border-l-2 text-gray-800 border-lime-200 bg-white" />
                  <button className="px-8 rounded-r-lg bg-lime-400  text-gray-800 font-bold py-2 uppercase border-lime-500 border-t border-b border-r">Search</button>
              </form>

            </div>
          </div>
          <div className="flex h-full w-full md:items-center md:mt-0 mt-56 justify-center container mx-auto px-8">
            <div className="max-w-2xl text-center">
              <h1 className="text-3xl sm:text-5xl capitalize tracking-widest font-bold text-black lg:text-6xl">Overflow Market</h1>

              <p className="mt-6 lg:text-lg text-black font-semibold">Coming Soon</p>

            </div>
          </div>
      </section>
      {/* Partners  */}
      <section className='py-6'>
        <div className="md:flex items-center justify-center md:space-x-12">

          <div className="mb-2 bg-teal-200 bg-opacity-10 border border-teal-700 px-4 md:px-12 py-4">
            <div className="flex items-center">
              <div className='text-4xl mr-8'>
                <ion-icon name="car-sport-outline"></ion-icon>
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='text-2xl font-semibold'>Fast Shipping</h3>
                <p>Order over $200</p>
              </div>
            </div>
          </div>
          <div className="mb-2 bg-teal-200 bg-opacity-10 border border-teal-700 px-4 md:px-12 py-4">
            <div className="flex items-center">
              <div className='text-4xl mr-8'>
                <ion-icon name="wallet-outline"></ion-icon>
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='text-2xl font-semibold'>Money Returns</h3>
                <p>30 Days money return</p>
              </div>
            </div>
          </div>
          <div className="bg-teal-200 bg-opacity-10 border border-teal-700 px-4 md:px-12 py-4">
            <div className="flex items-center">
              <div className='text-4xl mr-8'>
                <ion-icon name="alarm-outline"></ion-icon>
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='text-2xl font-semibold'>24/7 Support</h3>
                <p>Customer Support</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Category  */}
      <section className='bg-gray-100 h-full flex flex-col m-auto p-auto'>
        <h3 className='ml-12 font-semibold text-5xl mt-8 text-center uppercase'>Categories</h3>
        <Category />

      </section>
    {/* Category ends */}

    {/* Popular products  */}
    <section className='mt-4'>
      <div className="flex justify-center">
        <h3 className='text-3xl md:text-4xl font-semibold tracking-widest uppercase'>Popular Products</h3>
      </div>
      
      <div className='md:mt-6 py-4 flex justify-center'>
        <div className="md:grid md:grid-cols-4 md:gap-6">
          {
          populars.map((popular) => {
            return (
              <PopularProducts key={popular.id} popular={popular} />
            )
          })
          }
        </div>
      </div>
    </section>

    <section className='py-12 flex items-center justify-center'>
      <div className='bg-gray-200 shadow-lg w-10/12 md:w-3/4 h-56 rounded-lg relative'>

        <div className="flex flex-col items-center p-3 mt-5">
          <h3 className='text-3xl capitalize font-semibold tracking-wider'>Join our newsletter</h3>
          <p className='font-light tracking-widest text-center'>Be the first who will know our latest products, popular stock, and big discount</p>
          <div className='flex rounded bg-white w-auto mt-5'>
            <input type="search" className='w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none' />

            <button
              type="button"
              className="m-1 rounded px-8 py-2 font-semibold text-gray-100 bg-teal-500">
              Join
            </button>

          </div>
          
        </div>

      </div>
    </section>

  </div>
  )
}

export default Home