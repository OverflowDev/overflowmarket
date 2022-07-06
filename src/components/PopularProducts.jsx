
function PopularProducts({popular}) {

    return (
      <div>
            <div className="inline-block px-4 py-2">
                <div className="group overflow-hidden relative max-w-md w-80 h-80 md:w-64 md:h-64 rounded-lg shadow-md bg-white hover:shadow-xl">
                    <img src={popular.image} alt="Features" className='absolute inset-0 w-full h-full object-cover transition ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125' />
                    <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-40 transition-opacity duration-500 group-hover:opacity-75" ></div>
                    <div className="group-hover:right-2 delay-100 absolute -right-14 top-5 w-8 h-8 p-0.5 duration-700 bg-teal-800 rounded-full text-red-600 text-center text-2xl">
                        <ion-icon name="flame-sharp"></ion-icon>
                    </div>
                    <div className="absolute px-16 inset-x-0 bottom-5">
                        <div 
                            // onClick={() => add(popular)}
                            className="bg-white group-hover:bg-teal-900 group-hover:text-white rounded py-3 uppercase text-center font-bold text-gray-900">
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