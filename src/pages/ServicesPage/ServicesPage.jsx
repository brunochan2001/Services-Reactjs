import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardGrid from '../../components/Card/CardGrid';
import Form from '../../components/Form';
import ModalEditService from '../../components/modal/Modal';
import Navigation from '../../components/Navigation';
import {
  deleteService,
  editService,
  getServicesLoading,
  getServicessuccess
} from '../../store/actions';
import { Grid } from '@material-ui/core';
import './index.css';
import Swal from 'sweetalert2';
import Spin from '../../components/Spin';

const ServicesPage = () => {
  const dispatch = useDispatch();
  const [services, setServices] = useState([]);
  const { data, loading } = useSelector(state => state.service);
  const [open, setOpen] = useState(false);
  const [serviceSelect, setServiceSelect] = useState([]);

  useEffect(() => {
    dispatch(getServicesLoading());
    setTimeout(() => {
      dispatch(getServicessuccess());
    }, 500);
  }, []);

  useEffect(() => {
    setServices(data);
  }, [data]);

  const deleteServiceId = id => {
    Swal.fire({
      title: '¿Estas Seguro de Eliminar este Servicio?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Servicio Eliminado', '', 'success');
        dispatch(deleteService(id, data));
      }
    });
  };

  const openModal = service => {
    setOpen(true);
    setServiceSelect(service);
  };

  const editServiceSelect = service => {
    dispatch(editService(service, data));
  };

  return (
    <>
      <Navigation></Navigation>
      {loading ? (
        <Spin></Spin>
      ) : (
        <>
          <main className="main">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={7} lg={8}>
                <CardGrid
                  services={services}
                  deleteService={deleteServiceId}
                  editService={openModal}
                />
              </Grid>
              <Grid item xs={12} md={5} lg={4}>
                <Form></Form>
              </Grid>
            </Grid>
          </main>
        </>
      )}
      <ModalEditService
        open={open}
        setOpen={setOpen}
        serviceSelect={serviceSelect}
        editServiceSelect={editServiceSelect}
      ></ModalEditService>
    </>
  );
};

export default ServicesPage;
