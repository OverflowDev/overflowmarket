import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ProductsProvider } from './context/products/ProductsContext';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <ProductsProvider>

      <Router>
        {/* <Navbar /> */}
        <div className="">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>

    </ProductsProvider>
  );
}

export default App;
