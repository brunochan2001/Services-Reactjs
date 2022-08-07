import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import './index.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const initialForm = {
  title: '',
  type: '',
  description: '',
  id: ''
};

const ModalEditService = ({ open, setOpen, serviceSelect }) => {
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
    }
  };
  console.log(form);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box className="modal-container">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label">Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="title"
                  value={form.title}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label">Descripcion</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Descripcion"
                  value={form.description}
                  onChange={handleChange}
                  name="description"
                ></textarea>
              </div>
              <div className="form-outline mb-4">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="type"
                  value={form.type}
                >
                  <option value="Auto">Autos</option>
                  <option value="Salud">Salud</option>
                  <option value="Hogar">Hogar</option>
                </select>
              </div>
              <div>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleSubmit}
                  >
                    Aceptar
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => setOpen(false)}
                  >
                    Cancelar
                  </Button>
                </Stack>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalEditService;
