import { Link } from "react-router-dom";
import {useEffect, useState, useContext} from 'react'


import ProductsContext from '../context/products/ProductsContext'


function Category() {

  const {categories} = useContext(ProductsContext)
  
  return (
    <div className="">

      <div className=" my-12 md:px-6 md:flex justify-center">

            
        {categories.map((resource, index) => {
            return (
              <div
                key={index}
                className="flex justify-center text-center p-3 "
              >
                <div className="relative max-w-md w-72 h-64 md:w-64 md:h-64 my-4  shadow-sm rounded-lg bg-white hover:shadow-md transition-shadow duration-300 ease-in-out object-contain">
                    <img src={resource.imageUrl} alt="Features" className='w-full h-full object-cover' />
                    <div className="absolute inset-0 w-full h-full bg-teal-600 opacity-50 transition-opacity duration-500 group-hover:opacity-75" ></div>
                      <Link to='/' className="">
                          <div className="bg-white absolute inset-x-[17%] bottom-[40%] w-4/6 group-hover:bg-teal-900 group-hover:text-white rounded py-4 uppercase text-center font-bold text-gray-900">
                              {resource.title}
                          </div>
                      </Link>
                </div>
              </div>
            );
          })}
      </div>

    </div>
  )
}

export default Category