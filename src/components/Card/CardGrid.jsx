import React from 'react';
import CardItem from './CardItem';
import './index.css';

export const CardGrid = ({ services, deleteService, editService }) => {
  return (
    <>
      <div className="cardgrid">
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
