import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

export const CardGrid = () => {
  const { data } = useSelector(state => state.service);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(data);
  }, [data]);

  return (
    <>
      <div className="d-flex flex-wrap w-75" style={{ gap: '1rem' }}>
        {services.map((service, index) => (
          <CardItem key={index} service={service}></CardItem>
        ))}
      </div>
    </>
  );
};
