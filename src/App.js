import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/orderReview" element={<OrderReview />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="notFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/NotFound" />} />
        <Route path="/" element={<Navigate to="/shop" />} />
      </Routes>

    </div>
  );
};

export default App;
