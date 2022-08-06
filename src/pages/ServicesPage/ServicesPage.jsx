import React from 'react';
import { CardGrid } from '../../components/Card/CardGrid';
import Form from '../../components/Form';
import Navigation from '../../components/Navigation';

const ServicesPage = () => {
  return (
    <>
      <Navigation></Navigation>
      <main className="w-75 mx-auto d-flex  py-4">
        <CardGrid />
        <Form></Form>
      </main>
    </>
  );
};

export default ServicesPage;
