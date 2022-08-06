import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ServiceAuto, ServiceHealth, ServiceHome, ServicesPage } from './pages';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ServicesPage />} />
          <Route path="/Auto" element={<ServiceAuto />} />
          <Route path="/Salud" element={<ServiceHealth />} />
          <Route path="/Hogar" element={<ServiceHome />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
