import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import './index.css';
import Swal from 'sweetalert2';

const ModalEditService = ({
  open,
  setOpen,
  serviceSelect,
  editServiceSelect
}) => {
  const [form, setForm] = useState({
    title: '',
    type: '',
    description: '',
    id: ''
  });

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
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Datos Incompletos',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }
    editServiceSelect(form);
    setOpen(false);
    setTimeout(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Servicio Editado',
        showConfirmButton: false,
        timer: 1000
      });
    }, 200);
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
            <Card className="card-modal">
              <Typography variant="h6" gutterBottom component="div">
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
                        className="text-area"
                        id="floatingTextarea2"
                        style={{ height: '80px' }}
                        value={form.description}
                        onChange={handleChange}
                        data-testid="textarea-element"
                        name="description"
                        maxLength="150"
                      ></textarea>
                      <div className="counter-container">
                        <p className="counter">
                          {form.description ? form.description.length : ''}
                          /150
                        </p>
                      </div>
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
              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  startIcon={<CheckIcon />}
                  onClick={handleSubmit}
                  data-testid="button-onsubmit-element"
                >
                  Aceptar
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<CloseIcon />}
                  onClick={() => setOpen(false)}
                  data-testid="button-hide-modal"
                >
                  Cerrar
                </Button>
              </Stack>
            </Card>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

ModalEditService.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  editServiceSelect: PropTypes.func.isRequired
};
ModalEditService.defaultProps = { open: false, serviceSelect: {} };
export default ModalEditService;
