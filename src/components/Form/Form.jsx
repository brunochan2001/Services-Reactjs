import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import './style.css';
import { addService } from '../../store/actions';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

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
      <Card className="card-container" style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom component="div">
          Registrar Servicio
        </Typography>
        <Grid item container spacing={1} justify="center">
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Nombre"
                size="small"
                type="Nombre"
                onChange={handleChange}
                name="title"
                value={form.title}
                className="form-input"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextareaAutosize
                aria-label="minimum height"
                maxRows={3}
                minRows={3}
                placeholder="Descripcion"
                value={form.description}
                onChange={handleChange}
                name="description"
                className="form-text-area"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipos</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Tipo"
                name="type"
                onChange={handleChange}
                value={form.type}
              >
                <MenuItem value="">Tipos</MenuItem>
                <MenuItem value="Auto">Autos</MenuItem>
                <MenuItem value="Salud">Salud</MenuItem>
                <MenuItem value="Hogar">Hogar</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Divider className="card-divider" light />
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleSubmit}
          >
            Agregar
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={handleReset}
          >
            Eliminar
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default Form;
