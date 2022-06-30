
function PopularProducts({popular}) {
    return (
      // <div className="inline-block">
      //     <div className="rounded-lg max-w-md bg-red-400 w-72 h-72 relative">
      //         <img src={popular.image} alt="Category" className="absolute inset-0 w-full h-full object-cover" />
      //         {/* <div className="absolute inset-0 w-full h-full bg-teal-600 opacity-50 transition-opacity duration-500 group-hover:opacity-75" ></div> */}
      //     </div>
      //     <h3 className="">
      //         {popular.title}
      //     </h3>
      // </div>
      <div>
          <div className="inline-block px-4 py-2">
              <div className="group overflow-hidden relative max-w-md w-80 h-80 md:w-64 md:h-64 rounded-lg shadow-md bg-white hover:shadow-xl">
                  <img src={popular.image} alt="Features" className='absolute inset-0 w-full h-full object-cover ease-in-out transition duration-1000 group-hover:rotate-10 group-hover:scale-50' />
                  <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-40 transition-opacity duration-500 group-hover:opacity-75" ></div>
                  <div className="group-hover:right-2 delay-100 absolute -right-14 top-5 w-8 h-8 p-0.5 duration-700 bg-teal-800 rounded-full text-red-600 text-center text-2xl">
                      <ion-icon name="flame-sharp"></ion-icon>
                  </div>
                  <div className="absolute px-16 inset-x-0 bottom-5">
                      <div className="bg-white group-hover:bg-teal-900 group-hover:text-white rounded py-3 uppercase text-center font-bold text-gray-900">
                          Add to Cart
                      </div>
                  </div>
              </div>
              <div className="flex justify-between mt-2">
                  <h3 className="font-normal tracking-wider">{popular.title}</h3>
                  <h4 className="font-light tracking-wider">${popular.price}</h4>
              </div>
          </div>
      </div>
    )
  }
  
  export default PopularProducts