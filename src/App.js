import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ProductsProvider } from './context/products/ProductsContext';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
// import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ProductsProvider>

      <>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
      </>

    </ProductsProvider>
  );
}

export default App;
