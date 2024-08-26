import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import { CartProvider } from "./context/CartContext";
import { OrdersProvider } from "./context/OrdersContext";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <OrdersProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<ProductPage />} />
    
                  <Route
                    path="/product/:productId"
                    element={<ProductDetail />}
                  />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/payment" element={<PaymentPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/orders" element={<OrderHistoryPage />} />
                  <Route
                    path="/AdminLogin"
                    element={<AdminLogin onLogin={handleLogin} />}
                  />
                  <Route
                    path="/AdminDashboard"
                    element={
                      isLoggedIn ? (
                        <AdminDashboard />
                      ) : (
                        <Navigate to="/AdminLogin" />
                      )
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </OrdersProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Navbar from './components/Navbar';
// import ProfilePage from './pages/ProfilePage';
// import AdminLogin from './pages/AdminLogin';
// import AdminDashboard from './pages/AdminDashboard';
// import CartPage from './pages/CartPage';
// import PaymentPage from './pages/PaymentPage';
// import OrderHistoryPage from './pages/OrderHistoryPage';
// import ProductPage from './pages/ProductPage';
// import ProductDetail from './components/ProductDetail';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/admin" element={<AdminLogin />} />
//         <Route path="/admindashboard" element={<AdminDashboard />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/payment" element={<PaymentPage />} />
//         <Route path="/orders" element={<OrderHistoryPage />} />
//         <Route path="/products" element={<ProductPage />} />
//         <Route path="/product/:productId" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
