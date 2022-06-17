import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../assets/icons8-shopping-cart-with-money-100.png'
import Cart from '../assets/cart-outline.svg'

function Navbar() {

    const [open, setOpen] = useState(false)

  return (
    <div className=''>
        <nav className="bg-white shadow">
            <div className="flex items-center font-medium justify-around">
                
                {/*  Menu  */}
                <div className='z-50 p-3 md:w-auto w-full flex items-center justify-between'>
                    <div className='text-3xl md:hidden bg-teal-400 rounded-md w-8 h-8 text-white' onClick={() => setOpen(!open)}>
                        <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
                    </div>
                    <img src={Logo} alt="Logo" className='md:cursor-pointer h-12' />
                    {/* Cart  */}
                    <div className="relative md:hidden">
                        <img src={Cart} alt="Cart" className='h-10 w-10 ' />
                        <div className='absolute -top-1 -right-2 bg-lime-900 h-6 w-6 rounded-full text-sm text-center text-white'>
                            4
                        </div>
                    </div> 
                </div>


                <ul className='md:flex hidden uppercase items-center gap-8'>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            Partners
                        </Link>
                    </li>
                </ul>

                <ul className='md:flex hidden uppercase items-center gap-8'>
                    <li>
                        <button className='bg-lime-300 py-1 px-4 rounded-full text-gray-700 uppercase'>
                            Connect Wallet
                        </button>
                    </li>
                    <li className=''>
                        <form className="relative">
                            <input type="text" 
                                className="peer cursor-pointer relative z-10 h-8 w-8 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </form>
                    </li>
                    {/* Cart  */}
                    <li>
                       <div className="flex relative">
                            <img src={Cart} alt="Cart" className='h-8 w-8' />
                            <div className=' absolute -top-1 -right-2 bg-lime-900 h-5 w-5 rounded-full text-sm text-center text-white'>
                                4
                            </div>
                        </div> 
                    </li>
                    {/* <li className=''>
                       <div className="">
                            <ion-icon name="person-outline" size="large"></ion-icon>
                        </div> 
                    </li> */}
                </ul>


                {/* Mobile Menu  */}
                <ul className={`
                    md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
                    duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}
                `}>
                   
                     <li>
                        <Link to='/' className='py-7 px-3 text-4xl inline-block'>
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='py-7 px-3 text-4xl inline-block'>
                            Partners
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/' className="py-7 px-3 text-4xl inline-block">
                            {/* <ion-icon name="person-outline" size="large"></ion-icon> */}
                        Profile
                        </Link>
                    </li>
                    <li>
                        <button className='bg-lime-300 py-1 px-4 rounded-full text-gray-700 uppercase'>
                            Connect Wallet
                        </button>
                    </li>
                    
                </ul>
            </div>
        </nav>

    </div>
  )
}

export default Navbar