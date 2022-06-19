import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ProductsProvider } from './context/products/ProductsContext';
// import Navbar from './layouts/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <ProductsProvider>

      <>
        <Router>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
        </Router>
      </>

    </ProductsProvider>
  );
}

export default App;
