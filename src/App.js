import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ServiceAuto, ServiceHealth, ServiceHome, ServicesPage } from './pages';
import Error404 from './pages/Error404/Error404';
import store from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<ServicesPage />} />
            <Route exact path="/Auto" element={<ServiceAuto />} />
            <Route exact path="/Salud" element={<ServiceHealth />} />
            <Route exact path="/Hogar" element={<ServiceHome />} />
            <Route exact path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
