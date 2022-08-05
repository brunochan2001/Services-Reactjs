import React from 'react';

const CardItem = ({ service }) => {
  const { title, description } = service;
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <a className="card-link">Editar</a>
        <a className="card-link">Eliminar</a>
      </div>
    </div>
  );
};

export default CardItem;
