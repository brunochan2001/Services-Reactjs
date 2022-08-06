import React from 'react';
import CardItem from './CardItem';

export const CardGrid = ({ services, deleteService, editService }) => {
  return (
    <>
      <div className="d-flex flex-wrap w-75" style={{ gap: '1rem' }}>
        {services.map((service, index) => (
          <CardItem
            key={index}
            service={service}
            deleteService={deleteService}
            editService={editService}
          ></CardItem>
        ))}
      </div>
    </>
  );
};
