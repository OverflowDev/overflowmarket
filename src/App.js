import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { ProductsProvider } from './context/products/ProductsContext';

import Products from './components/products/Products';
import Product from './components/products/Product';
import SingleProduct from './components/products/SingleProduct';

import Cart from './components/cart/Cart'

import Users from './components/users/Users'

import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Partners from './pages/Partners'
import NotFound from './pages/NotFound';
import { CartProvider } from './context/carts/CartContext';

function App() {
  return (
    <ProductsProvider>
      <CartProvider>

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

                <Route path='/cart' element={<Cart />} />

                <Route path='/profile' element={<Users />} />

              </Routes>
              <Footer />
          </Router>
        </div>
        
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
