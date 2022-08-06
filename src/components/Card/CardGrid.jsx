import React from 'react';
import CardItem from './CardItem';

export const CardGrid = ({ services, deleteService }) => {
  return (
    <>
      <div className="d-flex flex-wrap w-75" style={{ gap: '1rem' }}>
        {services.map((service, index) => (
          <CardItem
            key={index}
            service={service}
            deleteService={deleteService}
          ></CardItem>
        ))}
      </div>
    </>
  );
};
