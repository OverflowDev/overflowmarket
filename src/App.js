import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { ProductsProvider } from './context/products/ProductsContext';

import Products from './components/products/Products';
import Product from './components/products/Product';
import SingleProduct from './components/products/SingleProduct';

import Carts from './components/cart/Carts'

import Users from './components/users/Users'

import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Partners from './pages/Partners'
import NotFound from './pages/NotFound';

function App() {
  return (
    <ProductsProvider>

      <div className='container'>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/*' element={<NotFound />} />
              <Route path='/product/:category' element={<Product />} />
              <Route path='/product/:category/:productId' element={<SingleProduct />} />
              <Route path='/shop' element={<Products />} />
              <Route path='/partners' element={<Partners />} />

              <Route path='/cart' element={<Carts />} />

              <Route path='/profile' element={<Users />} />

            </Routes>
            <Footer />
        </Router>
      </div>

    </ProductsProvider>
  );
}

export default App;
