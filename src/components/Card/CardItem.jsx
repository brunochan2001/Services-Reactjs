import React from 'react';

const CardItem = ({ service, deleteService }) => {
  const { title, description, id } = service;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <a className="card-link">Editar</a>
        <a className="card-link" onClick={() => deleteService(id)}>
          Eliminar
        </a>
      </div>
    </div>
  );
};

export default CardItem;
