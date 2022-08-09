import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import './style.css';
import { addService } from '../../store/actions';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

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
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Complete todos los datos',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }
    form.id = v4();
    dispatch(addService(form));
    handleReset();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Servicio Agregado',
      showConfirmButton: false,
      timer: 1000
    });
  };

  return (
    <>
      <Card className="card-container" style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom component="div">
          Registrar Servicio
        </Typography>
        <Grid item container spacing={1} style={{ justifyContent: 'center' }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleChange}
                name="title"
                value={form.title}
                data-testid="input-element"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: '80px' }}
                  value={form.description}
                  onChange={handleChange}
                  data-testid="textarea-element"
                  name="description"
                ></textarea>
                <label>Descripcion</label>
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <select
                className="form-select"
                name="type"
                onChange={handleChange}
                value={form.type}
                data-testid="select-element"
              >
                <option value="">Tipos</option>
                <option value="Auto">Auto</option>
                <option value="Salud">Salud</option>
                <option value="Hogar">Hogar</option>
              </select>
            </FormControl>
          </Grid>
        </Grid>
        <Divider className="card-divider" light />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          className="stack-container"
          spacing={1}
        >
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleSubmit}
            data-testid="button-onsubmit-element"
          >
            Agregar
          </Button>
          <Button
            variant="outlined"
            startIcon={<CleaningServicesIcon />}
            onClick={handleReset}
          >
            Limpiar
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default Form;
