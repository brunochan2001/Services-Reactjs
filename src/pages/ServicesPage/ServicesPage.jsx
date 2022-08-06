import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardGrid } from '../../components/Card/CardGrid';
import Form from '../../components/Form';
import Navigation from '../../components/Navigation';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const { data } = useSelector(state => state.service);

  useEffect(() => {
    setServices(data);
  }, [data]);

  return (
    <>
      <Navigation></Navigation>
      <main className="w-75 mx-auto d-flex  py-4">
        <CardGrid services={services} />
        <Form></Form>
      </main>
    </>
  );
};

export default ServicesPage;
