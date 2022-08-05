import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import servicesdata from '../../data/servicesData';
export const CardGrid = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesdata);
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap w-75 p-4" style={{ gap: '1rem' }}>
        {services.map((service, index) => (
          <CardItem key={index} service={service}></CardItem>
        ))}
      </div>
    </>
  );
};
