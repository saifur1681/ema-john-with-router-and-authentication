import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/orderReview" element={<OrderReview />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="notFound" element={<NotFound />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/signup" element={<Signup></Signup>} ></Route>
        <Route path="/" element={<Navigate to="/shop" />} />
        <Route path="*" element={<Navigate to="/NotFound" />} />
      </Routes>

    </div>
  );
};

export default App;
