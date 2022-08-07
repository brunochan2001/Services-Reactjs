import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import './style.css';
import { addService } from '../../store/actions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

const initialForm = {
  title: '',
  description: '',
  id: null,
  type: ''
};

const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title || !form.description || !form.type) {
      alert('Datos incompletos');
      return;
    }
    form.id = uuidv4();
    dispatch(addService(form));
    handleReset();
  };

  return (
    <>
      <Card className="card-container">
        <CardContent className="card-content">
          <div className="form-container">
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
                    name="title"
                    value={form.title}
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
                  value={form.type}
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
          <Divider className="card-divider" light />
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete" o>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <EditIcon />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default Form;
