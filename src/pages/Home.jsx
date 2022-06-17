import { Link } from 'react-router-dom'
import CartImage from '../assets/pexels-karolina-grabowska-5632402.jpg'
import Navbar from '../layouts/Navbar'

function Home() {

  return (
    <div className=''>
        
        <section className="h-screen  bg-cover relative" style={{backgroundImage: `url('${CartImage}')`}}>
          <Navbar />
          <div className="md:hidden flex justify-center container mx-auto px-8">
            <div className="max-w-2xl text-center">
              <form className="mt-12 ">
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
      <section className=''>
        <div className="animate-pulse bg-teal-500 flex items-center justify-between md:justify-around py-10 px-6 md:px-12">
          <div className='text-6xl '>
            <ion-icon name="logo-github"></ion-icon>
          </div>
          <div className='text-6xl'>
            <ion-icon name="logo-gitlab"></ion-icon>
          </div>
          <div className='text-6xl'>
            <ion-icon name="logo-electron"></ion-icon>
          </div>
          <div className='text-6xl'>
            <ion-icon name="logo-discord"></ion-icon>
          </div>
        </div>
      </section>

      {/* Category  */}
      <section className='bg-gray-100 h-full flex flex-col m-auto p-auto'>
        <h3 className='ml-12 font-semibold text-5xl mt-8 text-center uppercase'>Categories</h3>

        <div className="flex overflow-x-scroll pb-10 scrollbar-hide">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">

              <div className="inline-block mr-4">
                <div className=" flex flex-col max-w-md w-56 h-56 md:w-64 md:h-64 py-4 px-6 my-16">
                  <div className='uppercase text-4xl mb-3 relative'>
                    <div className='animate-bounce absolute -left-10 top-2 text-3xl'>
                      <ion-icon name="caret-forward"></ion-icon>
                    </div>
                    Categories
                  </div>
                  <p className='text-sm'>Calm down, do you need any latest blockchain assets? let's mix n match the categories which suits you</p>

                </div>
              </div>
              {/* Cards  */}
              <div className="inline-block mr-4">
                <div className="group overflow-hidden relative max-w-md w-56 h-56 md:w-64 md:h-64 py-4 px-6 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                    <img src="https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Features" className='absolute inset-0 w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125' />
                    <div className="absolute inset-0 w-full h-full bg-teal-600 opacity-50 transition-opacity duration-500 group-hover:opacity-75" ></div>
                    <Link to='/' className="absolute px-16 inset-x-0 bottom-[40%]">
                        <div className="bg-white group-hover:bg-teal-900 group-hover:text-white rounded py-4 uppercase text-center font-bold text-gray-900">
                            Robotic
                        </div>
                    </Link>
                </div>
              </div>
              <div className="inline-block mr-4">
                <div className="group overflow-hidden relative max-w-md w-56 h-56 md:w-64 md:h-64 py-4 px-6 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                    <img src="https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Features" className='absolute inset-0 w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125' />
                    <div className="absolute inset-0 w-full h-full bg-teal-600 opacity-50 transition-opacity duration-500 group-hover:opacity-75" ></div>
                    <Link to='/' className="absolute px-16 inset-x-0 bottom-[40%]">
                        <div className="bg-white group-hover:bg-teal-900 group-hover:text-white rounded py-4 uppercase text-center font-bold text-gray-900">
                            Hardware
                        </div>
                    </Link>
                </div>
              </div>
              <div className="inline-block mr-4">
                <div className="group overflow-hidden relative max-w-md w-56 h-56 md:w-64 md:h-64 py-4 px-6 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                    <img src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Features" className='absolute inset-0 w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125' />
                    <div className="absolute inset-0 w-full h-full bg-teal-600 opacity-50 transition-opacity duration-500 group-hover:opacity-75" ></div>
                    <Link to='/' className="absolute px-16 inset-x-0 bottom-[40%]">
                        <div className="bg-white group-hover:bg-teal-900 group-hover:text-white rounded py-4 uppercase text-center font-bold text-gray-900">
                            Laptop
                        </div>
                    </Link>
                </div>
              </div>
              <div className="inline-block mr-4">
                <div className="group overflow-hidden relative max-w-md w-56 h-56 md:w-64 md:h-64 py-4 px-6 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                    <img src="https://images.unsplash.com/photo-1619709821682-ec24ace60f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Features" className='absolute inset-0 w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125' />
                    <div className="absolute inset-0 w-full h-full bg-teal-600 opacity-50 transition-opacity duration-500 group-hover:opacity-75" ></div>
                    <Link to='/' className="absolute px-8 inset-x-0 bottom-[40%]">
                        <div className="bg-white group-hover:bg-teal-900 group-hover:text-white rounded py-4 uppercase text-center font-bold text-gray-900">
                            Hardware Wallet
                        </div>
                    </Link>
                </div>
              </div>

              {/* Card Ends  */}
                
            </div>
        </div>
    </section>

    </div>
  )
}

export default Home