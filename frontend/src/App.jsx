import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Manufacturing from './pages/Manufacturing';
import Products from './pages/Products';
import Quote from './pages/Quote';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Insights from './pages/Insights';
import ParcelPaperBags from './pages/parcelpaperbags';
import DeliveryBags from './pages/diliverybags';
import CustomCursor from './components/CustomCursor';
import ChatBot from './components/ChatBot';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/parcel-paper-bags" element={<ParcelPaperBags />} />
        <Route path="/delivery-bags" element={<DeliveryBags />} />
        <Route path="/products/:type" element={<Products />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

function Layout() {
  const location = useLocation();
  const hideLayout = ['/login', '/admin'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <CustomCursor />
        <Layout />
        <ChatBot />
      </Router>
    </AuthProvider>
  );
}

export default App;
