import { Link } from "react-router-dom";
import {useEffect, useState, useRef, useContext} from 'react'

import ProductsContext from '../context/products/ProductsContext'


function Category() {

  const {categories} = useContext(ProductsContext)

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);


  return (
    <div className="">

      <div className="carousel my-12 md:px-6 md:flex justify-center">
        <div className=" overflow-hidden ">

          <div
            ref={carousel}
            className="carousel-container relative flex gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            
            {categories.map((resource, index) => {
              return (
                <div
                  key={index}
                  className="carousel-item text-center snap-always snap-center"
                >
                  <div className="z-0 group overflow-hidden relative max-w-md w-80 h-64 md:w-64 md:h-64 my-4 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300 ease-in-out object-contain">
                      <img src={resource.imageUrl} alt="Features" className='absolute inset-0 w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125' />
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

          <div className="flex justify-center items-center mt-5 w-full h-full ">
            <button
              onClick={movePrev}
              className="hover:teal-400 text-teal-900 mr-10 text-3xl disabled:opacity-25 disabled:cursor-not-allowed transition-all ease-in-out duration-300"
              disabled={isDisabled('prev')}
            >
             
             <ion-icon name="caret-back-outline"></ion-icon>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:teal-400 text-teal-900 text-3xl disabled:opacity-50 disabled:cursor-not-allowed transition-all ease-in-out duration-300"
              disabled={isDisabled('next')}
            >
             <ion-icon name="caret-forward-outline"></ion-icon>
              <span className="sr-only">Next</span>
            </button>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Category