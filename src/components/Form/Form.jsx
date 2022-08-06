import React, { useState } from 'react';
// import { helpHttp } from '../../helpers/helpHttp';
import './style.css';

const initialForm = {
  name: '',
  description: '',
  id: null,
  type: ''
};

const Form = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.description || !form.type) {
      alert('Datos incompletos');
    }
  };

  return (
    <div className="w-25 form-container">
      <form className="card form" onSubmit={handleSubmit}>
        <div className="card-body">
          <h5 className="card-title">Servicios</h5>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="Nombre"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre"
              onChange={handleChange}
              name="name"
              value={form.name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripcion</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="Descripcion"
              value={form.description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChange}
            name="type"
          >
            <option value="">Tipos</option>
            <option value="Auto">Autos</option>
            <option value="Salud">Salud</option>
            <option value="Hogar">Hogar</option>
          </select>
        </div>
        <div className="card-footer d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleSubmit}
          >
            Agregar
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleReset}
          >
            Eliminar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
