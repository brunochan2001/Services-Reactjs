import React from 'react';
import { CardGrid } from './components/Card/CardGrid';
import Navigation from './components/Navigation';
const ServicesApp = () => {
  return (
    <>
      <Navigation></Navigation>
      <main className="w-75 mx-auto d-flex">
        <CardGrid />
        <div className="w-25"></div>
      </main>
    </>
  );
};

export default ServicesApp;
