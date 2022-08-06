import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteService } from '../../store/actions';

const CardItem = ({ service }) => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.service);
  const { title, description, id } = service;

  const deleteServiceId = (id, data) => {
    dispatch(deleteService(id, data));
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <a className="card-link">Editar</a>
        <a className="card-link" onClick={() => deleteServiceId(id, data)}>
          Eliminar
        </a>
      </div>
    </div>
  );
};

export default CardItem;
