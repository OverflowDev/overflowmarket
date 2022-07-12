import { useContext,useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductsContext from '../../context/products/ProductsContext'

import ProductItem from './ProductItem'



function Product() {

  const {products} = useContext(ProductsContext)

  const [product, setProduct] = useState([])

  const params = useParams()

    useEffect(() => {
      // fetchCategory()
      const cate = products.filter(category => 
        category.category === params.category
      )
      if(cate){
        setProduct(cate)
      }
    }, [products, params.category])


  return (
    <div className=''>
      {/* <div className='text-center font-bold text-3xl p-4 uppercase'>
        {params.category}
      </div>
      <div className='inline-block px-4 py-2'>

        {
          product.map((prod) => {
            return (
              <div
              key={prod.id} >
                <ProductItem {...prod} />
              </div>
            );
          })
        }
      </div> */}
      <div className="flex justify-center">
        <h3 className='text-3xl md:text-4xl font-semibold tracking-widest uppercase'>{params.category}</h3>
      </div>
      
      <div className='md:mt-6 py-4 flex justify-center'>
        <div className="md:grid md:grid-cols-4 md:gap-6">
        {
          product.map((prod) => {
            return (
              <div
              key={prod.id} >
                <ProductItem prod={prod} />
                  {/* <h3>{cat.category}</h3> */}
              </div>
            );
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Product