import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import PlanetGallery from './pages/PlanetGallery';
import PlanetDetail from './pages/PlanetDetail';
import Compare from './pages/Compare';
import About from './pages/About';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<PlanetGallery />} />
        <Route path="/planets/:id" element={<PlanetDetail />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
