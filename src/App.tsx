import { Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import { ToastContainer } from 'react-toastify';
import './main.css'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />

      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;