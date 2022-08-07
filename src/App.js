import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ServiceAuto, ServiceHealth, ServiceHome, ServicesPage } from './pages';
import store from './store';
import './index.css';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<ServicesPage />} />
            <Route path="/Auto" element={<ServiceAuto />} />
            <Route path="/Salud" element={<ServiceHealth />} />
            <Route path="/Hogar" element={<ServiceHome />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
