import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import './index.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@mui/icons-material/Delete';

const initialForm = {
  title: '',
  type: '',
  description: '',
  id: ''
};

const ModalEditService = ({
  open,
  setOpen,
  serviceSelect,
  editServiceSelect
}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (serviceSelect) {
      setForm(serviceSelect);
    }
  }, [serviceSelect]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title || !form.description || !form.type) {
      alert('Datos incompletos');
      return;
    }
    editServiceSelect(form);
    setOpen(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <Box className="modal-container">
            <Card className="card-container" style={{ padding: '2rem' }}>
              <Typography variant="h4" gutterBottom component="div">
                Editar Servicio
              </Typography>
              <Grid
                item
                container
                spacing={1}
                style={{ justifyContent: 'center' }}
              >
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
                      maxRows={5}
                      minRows={5}
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
                  Aceptar
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => setOpen(false)}
                >
                  Cancelar
                </Button>
              </Stack>
            </Card>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalEditService;
