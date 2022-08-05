import React from 'react';
import './style.css';

const Form = () => {
  return (
    <div className="w-25 form-container">
      <form className="card form">
        <div className="card-body">
          <h5 className="card-title">Servicios</h5>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="Nombre"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripcion</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="Descripcion"
            ></textarea>
          </div>
          <select className="form-select" aria-label="Default select example">
            <option selected>Tipo</option>
            <option value="1">Autos</option>
            <option value="2">Salud</option>
            <option value="3">Hogar</option>
          </select>
        </div>
        <div className="card-footer d-flex justify-content-around">
          <button type="button" className="btn btn-outline-success">
            Agregar
          </button>
          <button type="button" className="btn btn-outline-danger">
            Eliminar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
